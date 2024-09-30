+++
title = 'Gochat: Building a Real-Time Chat App with Go and React'
description = 'A miniature version of a chat app, demonstrating web socket connections between frontend and backend, handle multiple clients connections, read a socket message and send out incoming messages to all clients.'
date = 2024-07-24T11:47:59+05:30
type = "project"
draft = false
link = "https://gochat-go.onrender.com/"
tags = ['javascript', 'react.js', 'go', 'websocket']
showTableOfContents = true
+++

In this blog post, we’ll explore how to build a real-time chat application using Go and React. Our app, Gochat, leverages WebSockets to enable instant messaging between users. You can check out the live demo here.

![](/images/projects/go_chat_demo.png)

## Introduction

Real-time communication is a crucial feature for modern web applications. Whether it’s for customer support, social networking, or collaborative tools, the ability to send and receive messages instantly enhances user experience. In this tutorial, we’ll walk through the process of creating a chat application using Go for the backend and React for the frontend.

## Why Go and React?

-   **Go**: Known for its simplicity and performance, Go is an excellent choice for building scalable backend services. Its concurrency model, based on goroutines and channels, makes it ideal for real-time applications.

-   **React**: A popular JavaScript library for building user interfaces, React allows us to create dynamic and responsive frontends. Its component-based architecture makes it easy to manage and update the UI.

## Setting Up the Project

### Backend with Go

1. **Initialize the Go Project**

    ```
    mkdir gochat
    cd gochat
    mkdir gochat-server
    cd gochat-server
    go mod init github.com/<your-id>/GoChat-Go
    ```

2. **Install Dependencies**: We’ll use the Gorilla WebSocket package to handle WebSocket connections.

    ```
    go get github.com/gorilla/websocket
    ```

3. **Create the WebSocket Server**

    **main.go**

    ```
    // Module: github.com/<your-id>/GoChat-Go
    package main

    import (
        "fmt"
        "log"
        "net"
        "net/http"
        "os"

        "github.com/<your-id>/GoChat-Go/setupRouter"
        "github.com/joho/godotenv"
    )

    func main() {

        fmt.Println("************************************************")
        fmt.Println("Go-Chat Chat App v0.01")
        fmt.Println("************************************************")
        setupRouter.SetupRouter()

        listener, err := net.Listen("tcp", ":0")
        if err != nil {
            panic(err)
        }

        fmt.Println("************************************************")
        fmt.Println("Using IP:", listener.Addr().(*net.TCPAddr).IP)
        fmt.Println("Using port:", listener.Addr().(*net.TCPAddr).Port)
        fmt.Println("************************************************")

        panic(http.Serve(listener, nil))
    }
    ```

4. **Set up your router**

    **setupRouter/setupRouter.go**

    ```
    package setupRouter

    import (
        "fmt"
        "log"
        "net/http"
        "os"
        "time"

        "github.com/gorilla/websocket"
    )

    var upgrader = websocket.Upgrader{
        ReadBufferSize:  1024,
        WriteBufferSize: 1024,
        CheckOrigin:     func(r *http.Request) bool { return true },
    }

    func Upgrade(w http.ResponseWriter, r *http.Request) (*websocket.Conn, error) {
        ws, err := upgrader.Upgrade(w, r, nil)

        if err != nil {
            fmt.Fprintln(w, "Unable to setup WebSocket connection")
            return ws, err
        }
        return ws, nil
    }

    // define our WebSocket endpoint
    func serverWs(pool *Pool, w http.ResponseWriter, r *http.Request) {

        // upgrade this connection to a WebSocket
        conn, err := Upgrade(w, r)
        if err != nil {
            log.Println(w, "Unable to setup WebSocket connection")
            return
        }

        client := &Client{
            ID:   fmt.Sprintf("%v", time.Now().UnixMilli()),
            Conn: conn,
            Pool: pool,
        }

        pool.Register <- client
        client.Read()
    }

    func SetupRouter() {
        pool := NewPool()
        go pool.Start()

        // handle our `/ws` endpoint to the `serveWs` function
        http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
            serverWs(pool, w, r)
        })
    }

    ```

5. **Create/setup your pool methods**

    **setupRouter/pool.go**

    ```
    package setupRouter

    import (
        "fmt"
        "log"
    )

    type Pool struct {
        Register   chan *Client
        Unregister chan *Client
        Clients    map[*Client]bool
        Broadcast  chan Message
    }

    func NewPool() *Pool {
        return &Pool{
            Register:   make(chan *Client),
            Unregister: make(chan *Client),
            Clients:    make(map[*Client]bool),
            Broadcast:  make(chan Message),
        }
    }

    func (pool *Pool) Start() {
        for {
            select {
            case client := <-pool.Register:
                pool.Clients[client] = true
                log.Println("Pool Size: ", len(pool.Clients))
                for client, _ := range pool.Clients {
                    log.Println("New client registered:", client.ID)
                    client.Conn.WriteJSON(Message{Type: 0, Body: "New User Joined..."})
                }
                break

            case client := <-pool.Unregister:
                delete(pool.Clients, client)
                log.Println("Pool Size: ", len(pool.Clients))
                for client, _ := range pool.Clients {
                    log.Println("Client disconnected", client.ID)
                    client.Conn.WriteJSON(Message{Type: 0, Body: fmt.Sprintf("User %s disconnected ", client.ID)})
                }
                break

            case message := <-pool.Broadcast:
                log.Println("Sending message to all clients in Pool")
                for client, _ := range pool.Clients {
                    if err := client.Conn.WriteJSON(message); err != nil {
                        log.Fatalln("Error: ", err)
                        return
                    }
                }
            }
        }
    }
    ```

6. **Create/setup your client methods**

    **setupRouter/client.go**

    ```
    package setupRouter

    import (
        "fmt"
        "log"
    )

    type Pool struct {
        Register   chan *Client
        Unregister chan *Client
        Clients    map[*Client]bool
        Broadcast  chan Message
    }

    func NewPool() *Pool {
        return &Pool{
            Register:   make(chan *Client),
            Unregister: make(chan *Client),
            Clients:    make(map[*Client]bool),
            Broadcast:  make(chan Message),
        }
    }

    func (pool *Pool) Start() {
        for {
            select {
            case client := <-pool.Register:
                pool.Clients[client] = true
                log.Println("Pool Size: ", len(pool.Clients))
                for client, _ := range pool.Clients {
                    log.Println("New client registered:", client.ID)
                    client.Conn.WriteJSON(Message{Type: 0, Body: "New User Joined..."})
                }
                break

            case client := <-pool.Unregister:
                delete(pool.Clients, client)
                log.Println("Pool Size: ", len(pool.Clients))
                for client, _ := range pool.Clients {
                    log.Println("Client disconnected", client.ID)
                    client.Conn.WriteJSON(Message{Type: 0, Body: fmt.Sprintf("User %s disconnected ", client.ID)})
                }
                break

            case message := <-pool.Broadcast:
                log.Println("Sending message to all clients in Pool")
                for client, _ := range pool.Clients {
                    if err := client.Conn.WriteJSON(message); err != nil {
                        log.Fatalln("Error: ", err)
                        return
                    }
                }
            }
        }
    }

    ```

7. **Finally create a Dockerfile for your server components.**

    **.Dockerfile**

    ```
    FROM golang:1.22.5

    RUN mkdir /app
    ADD . /app/
    WORKDIR /app
    RUN go mod download
    RUN go build -o main
    CMD ["/app/main"]
    ```

8. Initialize your server directory with `git` and upload it to your remote repository. You can check out the steps [here](https://stackoverflow.com/questions/16897723/how-to-add-my-current-project-to-an-already-existing-github-repository#:~:text=Open%20your%20Terminal%2C%20access%20to%20this%20folder%20and%20write%3A).

    Before that, make sure you test your code and confirm it is working. You can use `postman` to test the websocket connections.

9. For referencing the source code: [here](https://github.com/Aamjit/GoChat-server)

## Frontend with React

You can refer the frontend part from [here](https://github.com/Aamjit/GoChat-Go) for now. Will update the blog soon...

## Conclusion

In this tutorial, we’ve built a simple real-time chat application using Go and React. By leveraging WebSockets, we’ve enabled instant communication between users. This project demonstrates the power of combining Go’s performance with React’s flexibility to create a responsive and scalable web application.

Feel free to explore the code and customize it to fit your needs. Happy coding!
