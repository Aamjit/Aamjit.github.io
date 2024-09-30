+++
title = 'Deploy your SAP CAP application to any Hosting site'
description = "This blogpost explains few steps on how we can deploy a SAP CAP Project to any hosting platform mainly by making use of Docker images"
image = "/images/posts/deploy-your-sap-cap-application-to-any-hosting-site.png"
date = 2024-08-01T14:39:44+05:30
draft = false
type = "post"
tags = ["sap", "cap", "node.js", "cds"]
showTableOfContents = true
+++

Greetings Readers,

Today, I'm gonna share on how to deploy an SAP CAP project to any hosting platform by making use of Docker Images.

> Readme: Currently I do not have a working solution for deploying it directly without a Docker image, I run into issues while deploying using node. My suggestion is to go with a Docker image, unless you're deploying it to BTP Cockpit.

## Intro to CAPM(Cloud Application Programming Model)

In short, CAP is a framework with a bunch of languages, tools and runtimes, it is mostly used for building Enterprise-grade applications and services

![CAPM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/335bvnnjwvsui2whqjcw.png)

It is a mixed of SAP Techs and other open source tools like node, and even spring from Java, it allows you to set up your own favorite development environment.

On top of all this is the main component, the CDS(Core Data Services) which is where we define and serve all our Data models, and manage the views.

Also let us not forget the Service SDKs for Node or Java which allows us for our favorite language to interact with the CDS environment.

## How we started

Lets take a step back and find out on how I ended up here with this blogpost.

It started out as a simple process of learning how to develop CAP App with NodeJS. As usual, how we all go through, I started with their [official documentation](https://cap.cloud.sap/docs/about/#overview) and read about the most the stuffs like the guides, setup, tools, the SDKs, etc..

So, after a while, I wanted to start a project, so again, I went through their jumpstart documentation, and continued with learning. I did all the stuffs as documented using sample data. Again, I will not go through the whole process but you can kind of figure out. And BOOM!!! DONE,, I had a sample working project, now I want a way to actually host it online and deploy the webservice.

I actually had a hosting platform in-mind - [render.com](http://render.com), but you can choose other platforms if you already have an account like AWS, Azure, etc.. you can choose which one you like, that's not the important part.

The important part is how?? How can we deploy our service online??

You're gonna use this platform to build your project and deploy it online. It sounds easy but a lot of things could go wrong and the host could fail to build your project or deploy it. Let's check out what are some of the things that could go wrong and solve it.

## First try-(Just raw deploy it)

Let us say you already have sourcing like [Github.com](http://Github.com) and you have pushed your changes to you repo, next you go to your favorite hosting platform, you create an app/webservice, you link your repo to the hosting app, you deploy it, and done!! CLOSE IT!! ALT+F4!!

Easy, Right??

But wait, did it deploy?? Did you check the logs??

The answer propably is - _NO!_. This is what I call "_Not being cautious_".

> The error message probably while deploying would be:

```
==> Running 'npm run start'
> CAP-Node-js@1.0.0 start
> cds serve
sh: 1: cds: not found
==> Exited with status 127
```

There is a reason why it failed, if you realize, in order for our app to start, we run the command `cds serve` for production or `cds watch` for development, if you weren't aware about this, and you use `npm run dev` or `npm run start`, that's okay, these are bound to execute `cds serve/watch`, which is configured in your `package.json` file.

That means, we're expecting CDS to run our project and serve it, except that there is no CDS in production. Why??

Once we deploy our app online, our app is actually being run from a virtual system which your cloud provider is using to host your app, and that means that there is a 100% chance that CDS is not installed there.
That is why it couldn't understand CDS command, cause it's not there in the environment system...

In my case also, I installed the `cds-dk` at a global level and couldn't figure out why `cds` was not recognized once I deployed and it failed. In short, its a skill issue.

> My suggestion is to use the Second method noted below.

## Second Try-(Containerization)

After the first try, I went ahead to try with Docker containers, which was something new to me.

Let me introduce Docker, the magical toolbox you wish you had when dealing with software applications. It simplifies the entire process of building, running, managing, and distributing applications.

2 things you need to be aware: Image & Containers.

Shortest description: Image is your recipe & Container is your prepared dish.

-   So, I went for Docker, installed it.
-   Installed Devcontainer extension, in vsCode.
-   Played around a bit(around 2 days).

I did find a great tutorial in [youtube](https://www.youtube.com/playlist?list=PL6RpkC85SLQBHPdfHQ0Ry2TMdsT-muECx) for CAP with Node, that's where I discovered, we can use Docker to deploy a CAP app on any system with Docker.

This requires a bit of Setup which we will go through:

### Installing Docker

-   We need to install Docker Desktop from the [official site](https://www.docker.com/)
-   We will then configure the _Dockerfile_ in our CAP project as follows
-   We will configure it in our root directory.

#### Dockerfile

```
# syntax=docker/dockerfile:1

# setting up our operating system
ARG VARIANT="20"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# Install some generally useful tools particularly for development in devcontainer
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    curl git sqlite3 entr source-highlight

# set user node
USER node

# installation of CDS-DK globally inside the container
# You can choose to ignore this command if you are configuring cds-dk within you dependencies
ARG CAPVER="latest"
RUN npm install -g @sap/cds-dk@$CAPVER

# not necessary
# vi mode everywhere and nicer prompt KTHXBAI
RUN cat <<EOBASHRC >> /home/node/.bashrc
export EDITOR=vi
set -o vi
bind -x '"\C-l": clear'
EOBASHRC

RUN echo 'export PS1=${PS1/\$ /\\\\n$ }' >> /home/node/.bashrc

# Go to our directory where we will store our codes
WORKDIR /home/node

# Copy your SAP CAP project files(current path of Dockerfile) into the container path "./home/node/"
COPY . /home/node/

# # # Install dependencies (needed)
# it will neglect the packages for devDependencies
RUN npm install --omit=dev

# Start your CAP application
CMD ["npm", "start"]

# Important for exposing our service
EXPOSE 4004
```

#### .devcontainer.json

```

{
	"name": "Our CAP Project",
	"build": {
		"dockerfile": "Dockerfile",
		"args": {
			"VARIANT": "20"
		}
	},
	"customizations": {
		"vscode": {
			"extensions": [
				"sapse.vscode-cds",
				"dbaeumer.vscode-eslint",
				"humao.rest-client",
				"qwtel.sqlite-viewer",
				"mechatroner.rainbow-csv"
			]
		}
	},
	"forwardPorts": [4004],
	"remoteUser": "node"
}
```

And lastly, an important file

#### .dockerignore

```
.vscode
node_modules
package-lock.json
```

Why `.dockerignore` ?? We only need the necessary files and folders.

-   We basically do not need `node_modules` as we will be running `RUN npm install --omit=dev` from the `Dockerfile` and it will automatically generate the modules folder.
-   We also don't need `package-lock.json` for the same reason.
-   `.vscode` is only specific to vscode workspace, so remove it while importing.
-   `.devcontainer` if you have, in your project, remove it, in my case my docker configurations were initially stored there, but I had moved it in root path, you can do the same.

The next thing is to build the image, go to your project root directory where `Dockerfile` is present and open a terminal from your local machine:

```
# example: docker build -t <YOUR_IMAGE_NAME> .
$ docker build -t cap-server .
```

Once you hit that, docker will build you image from the Dockerfile, which would look something like this:

![Docker build log](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xgc8diwzxfv1ye4vnru1.png)

Once that is done, you can then run the following docker cmd

```
docker run -t cap-server
```

It would look something like this:

![Docker run log](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pd6ohggxlryryf15k2kg.png)

## error: no database connection error

There might be cases where you find that your service is running and when you try to access a route for viewing the data, you get a "no database connection" error, observe and keep in mind that the area which I highlighted above, might/might not appear in your case.

**What can you do??**

Go to your `package.json` and check if the `@cap-js/sqlite` package is installed under dependencies or `devDependencies`.

This error usually comes if you had configured the mentioned package installed under `devDependencies`, you need to move it under the dependencies object. A simple npm cmd to do that is:

```
npm install --save-prod @cap-js/sqlite
```

This should fix that problem,

Build the docker and run it again, to check it.

_If all is well, this will should work correctly._

## Finally

You can finally save you changes, commit and push to your remote repo.
Re-run the build process on your hosting platform, and keep and eye on the log. Again, if all is well, it should successfully build the app and deploy it.

There is no guarantee that it will always work perfectly for every person, there are always factors that depend on it. If you run into any issues, there is always a community which you can depend upon. Be sure to check out your issue or post a new one in the [SAP Community](https://community.sap.com/) or other developers community.

> Disclaimer: This post is not auto-generated using AI of any sort. So, this post could contain false information which I missed, or was unaware of, Please let me know if such happens.
