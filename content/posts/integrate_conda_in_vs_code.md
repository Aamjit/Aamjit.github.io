+++
title = 'Intergrate Conda in VS Code'
description = "Let us dive into how we can actually integrate Conda runtime in Vscode"
image = "https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff8uihedut8hcbwma0yg1.png"
date = 2021-11-23T20:08:10+05:30
draft = false
type = "post"
tags = ["python", "vscode", "anaconda"]
+++

First thing is first, make sure you have Python, VS code, Anaconda installed in you system.

**Check for the Python version. Run `python -V` and find out if it is installed or not.**

Do a quick installation of Python extension in VS code.

> Go to the Extensions Tab and search for Python

![Python extension in VS code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f8uihedut8hcbwma0yg1.png)

We now need to set the Python interpreter. The thing about Python interpreters are, for different environment that we create, we can set a different interpreter for that particular environment and sometimes this leads to a lot of confusions for beginners. You might install a version of Python and when running inside an environment it uses another version. This could also cause errors when you use a feature available in one version but not in the other.

**We will set up the Python Interpreter first**

-   **Setting up Python Interpreter**

So we have a few ways of setting up Python Interpreter, you can find it in this [VS code Documentation](https://code.visualstudio.com/docs/python/python-tutorial)

-   Open the command palette with the shortcut `ctrl + shift + P`, inside the input filed type in `Python: Select Interpreter` and hit enter. You should see a few or a list of available Interpreters that you have configured as default or have used in other environments.

![Python Interpreter lists](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uusyo8r27exhoffqo6ma.png)

As you can see here, we have a list of Interpreters with different versions used. In your system, it may differ and you can choose one you need for your current project.

-   Another way is clicking on the `Select Python Interpreter` icon with the warning sign on the **Bottom Left Corner** of the windows.

![Select Python Interpreter](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/urodxab1fzv03o5i3a9t.png)

-   Another way is manually setting Python executable path in you setting.
    To do that, open settings with the shortcut "ctrl + ," and select the `Workspace Tab`.

![Workspace Tab](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oletmqgri22ltl5k1ofo.png)

Type in "Python" in the search bar and you should see an option below where you can configure the settings.json file, click on it.

![settings.json](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vagkn1p3bn7scb3pizjs.png)

There add the path to the interpreter as follows

```
"python.pythonPath": "<path-to-your-interpreter>\\python.exe"
```

**Note:** Adding the above path without selecting the workspace, VS code sets the path to users settings which is default. The workspace allows you to use the interpreter only within your current workspace.

-   Activating Conda environment

Navigate inside your Conda installed files directory, there navigate agin in the scripts directory, there you will find an `activate.bat` file

path for `activate.bat` file should look something like this

```
C:\\<path-to-conda-installation>\\Scripts\\activate.bat
```

The command to start the anaconda prompt in terminal should look something like this:

```
C:\\<path-to-conda-installation>\\Scripts\\activate.bat C:\\<path-to-conda-installation>
```

This will activate the default environment for conda, we can also change the environment

```
conda activate <your-env-name>
```

We need to change our workspace setting in VS, so that we can run conda commands whenever we start a terminal

Go to settings [ctrl + ,] then select **workspace section** . In the search box paste this

```
terminal.integrated.profile.windows
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s8je18zykm86xq5jv430.png)

Go to `edit in setting.json` and add the following

```
{
    "python.pythonPath": "C:\\Users\\user\\Anaconda3\\envs\\django_env\\python.exe",

    "python.terminal.activateEnvironment": true,

    "terminal.integrated.defaultProfile.windows": "Command Prompt"
}
```

Now go back to setting and with same search text, go to the **user section**, Click for `edit in settings.json`

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxwo4ouwonnf8h81skqx.png)

Add the below code once it opens the json file.

```
"python.condaPath": "C:\\Users\\user\\anaconda3\\Scripts\\conda.exe",
"terminal.integrated.defaultProfile.windows": "Command Prompt"
```

This ensures that VS code will default use `command prompt` to run conda.exe` terminal whenever we start terminal in the particular workspace.

That's all, for configuring VS code to intergrate with `conda`.

Happy Coding.
