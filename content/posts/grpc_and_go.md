+++
title = 'gRPC and Go: Building High-Performance Web Services'
description = 'An article on "gRPC and Go", an introduction and a step-by-step guide on installing and setting up your first gRPC project with Go.'
image = "/images/posts/grpc_and_go.webp"
date = 2024-08-23T11:18:40+05:30
draft = false
type = 'post'
tags = ['go', 'grpc', 'rpc', 'rest', 'webservices']
+++

## Introduction

In the world of microservices and distributed systems, efficient communication between services is crucial. This is where gRPC, a high-performance RPC (Remote Procedure Call) framework developed by Google, comes into play. Combined with Go, a statically typed, compiled programming language designed for simplicity and efficiency, gRPC can help you build robust and scalable web services.

## What is gRPC?

gRPC stands for **g**oogle **R**emote **P**rocedure **C**all. [It is an open-source framework that uses HTTP/2 for transport, Protocol Buffers as the interface description language, and provides features such as authentication, load balancing, and more](https://grpc.io/docs/languages/go/basics/). gRPC allows you to define your service methods and message types in a `.proto` file, which can then be used to generate client and server code in multiple languages.

## Why Use gRPC with Go?

1. **Performance**: gRPC uses HTTP/2, which allows for multiplexing multiple requests over a single connection, reducing latency and improving performance.
2. **Code Generation**: With Protocol Buffers, you can define your service once and generate client and server code in Go, ensuring consistency and reducing boilerplate code.
3. **Streaming**: gRPC supports client-side, server-side, and bidirectional streaming, making it ideal for real-time applications.
4. **Interoperability**: gRPC services can be consumed by clients written in different languages, making it a versatile choice for polyglot environments.

## Getting Started with gRPC in Go

-   ### Prerequisites

    Before you start, ensure you have the following installed:

    -   Go (any of the two latest major releases)
    -   Protocol Buffer Compiler (`protoc`)
    -   Go plugins for the Protocol Buffer Compiler

    You can install the Go plugins using the following commands:

    ```
    go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
    ```

    Update your `PATH` so that the `protoc` compiler can find the plugins:

    ```
    export PATH="$PATH:$(go env GOPATH)/bin"
    ```

    Confirm that `protoc` is installed and configured in your system by opening a terminal and typing:

    ```
    protoc --version
    ```

    You should see an output similar to this

    ```
    C:\Users\Guest>protoc --version
    ~ libprotoc 27.3
    ```

    If it doesn't recognize the `protoc` command, then you can use `Chocolatey` for windows to install the protocol buffers:

    ```
    choco install protoc
    ```

    If this isn't the case, where you don't have chocolatey installed or you're on a different OS, you can go through the official installation documentation [here](https://grpc.io/docs/protoc-installation/).

    ### Defining the Service

    Create a `.proto` file to define your gRPC service. For example:

    **_helloworld.proto_**

    ```
    syntax = "proto3";
    package helloworld;

    message HelloRequest {
        string name = 1;
    }
    message HelloResponse {
        string message = 1;
    }

    service Greeter {
        rpc SayHello (HelloRequest) returns (HelloResponse) {}
    }
    ```

    ### Generating Code

    Generate the Go code from your `.proto` file:

    ```
    protoc --go_out=. --go-grpc_out=. helloworld.proto
    ```

    ### Implementing the Server

    Create a server in Go:

    **_server.go_**

    ```
    package main

    import (
        "context"
        "log"
        "net"

        "google.golang.org/grpc"
        pb "path/to/your/proto"
    )

    type server struct {
        pb.GreeterServer
    }

    func main() {
        lis, err := net.Listen("tcp", ":8080")
        if err != nil {
            log.Fatalf("failed to listen: %v", err)
        }

        log.Printf("Server started at %v", lis.Addr())

        grpcServer := grpc.NewServer()
        pb.RegisterGreeterServer(grpcServer, &server{})
        if err := grpcServer.Serve(lis); err != nil {
            log.Fatalf("failed to serve: %v", err)
        }
    }

    // SayHello name should be the same RPC name as defined in your proto file
    func (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloResponse, error) {
        return &pb.HelloResponse{Message: "Hello " + in.Name}, nil
    }
    ```

    ### Creating the Client

    Create a client in Go:

    **_client.go_**

    ```
    package main

    import (
        "context"
        "log"
        "os"
        "time"

        "google.golang.org/grpc"
        pb "path/to/your/proto"
    )

    func main() {
        conn, err := grpc.NewClient("localhost:8080", grpc.WithTransportCredentials(insecure.NewCredentials()))
        if err != nil {
            log.Fatalf("did not connect: %v", err)
        }
        defer conn.Close()
        client := pb.NewGreeterClient(conn)

        name := "John Doe"
        if len(os.Args) > 1 {
            name = os.Args[1]
        }

        callSayHello( client, name )
    }

    func callSayHello(client pb.GrpcServiceClient, name string) {
        ctx, cancel := context.WithTimeout(context.Background(), time.Second)
        defer cancel()

        res, err := client.SayHello(ctx, &pb.HelloRequest{Name: name})
        if err != nil {
            log.Fatalf("Failed to called: %v", err)
        }
        log.Printf("%v", res)
    }
    ```

## Conclusion

gRPC and Go together provide a powerful combination for building high-performance, scalable web services. By leveraging the strengths of both, you can create efficient and reliable applications that are easy to maintain and extend.

Link to demo repo: [Github.com](https://github.com/Aamjit/go-and-grpc)
