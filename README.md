# spring-boot-angular7-maven

Wanna run Angular 7 under Spring Boot?  With a "java -jar" deployment?
Start here.

# Features
* Spring Security enabed by default.
* running ```java -jar backend/target/backend-0.0.1-SNAPSHOT.jar``` launches both Angular 7 and Spring Boot under Tomcat 9.0.16 on port 8090.
* Includes Maven wrapper (mvnw and mvnw.cmd) that will auto-install Maven for you.
* Frontend (Angular) and Backend (Spring Boot) code is separated into folders named ```frontend``` and ```backend```.
* Includes .gitignore that keeps node_modules and other boilerplate stuff from showing up in git.
* Client-side testing isn't enabled.
* Thanks to [this githubber](https://github.com/swathisprasad). This code started as a fork of [this project](https://github.com/swathisprasad/spring-boot-angular6-maven-project)....but I've since cut the ties.

# Step 01: Install npm and Angular 7 CLI

Make sure npm and the Angular 7 CLI are installed.
You can install these by following everything up to and including "Step 1" in the [Angular Quick Start](https://angular.io/guide/quickstart)


# Step 02: Build and Launch

After you download/clone this repo, build the project like this:

```./mvnw clean install```

...which will create this:

```backend/target/backend-0.0.1-SNAPSHOT.jar```

Then to run: 

```cd backend```

...and either this:

```../mvnw spring-boot:run```

or this:

```java -jar target/backend-0.0.1-SNAPSHOT.jar```


# Getting Started
Once you get the ```Completed initialization in N ms``` message, navigate to ```localhost:8090``` in your browser.
Spring Security is enable by default, so every time you stat the app you'll be presented with screenshot below.  The user is just "user" and the pw is in the stdout log.  For mor details, check [here](https://www.websparrow.org/spring/spring-security-how-to-change-default-username-and-password) or [here](https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/html/boot-features-security.html).


![Spring Security Logon](https://user-images.githubusercontent.com/175773/52928769-0bf67680-3307-11e9-86aa-9574700ddf3b.png)




Once you log in successfully, you'll see this:

![Bare bones Angular 7](https://user-images.githubusercontent.com/175773/52928834-5b3ca700-3307-11e9-969c-529b1667e12a.png)


# Versions
Versions I used:
```
npm version:
6.8.0

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 7.3.1
Node: 11.7.0
OS: darwin x64
Angular: 
... 

Package                             Version
-------------------------------------------------------------
@angular-devkit/architect           0.13.1
@angular-devkit/build-angular       0.13.1
@angular-devkit/build-optimizer     0.13.1
@angular-devkit/build-webpack       0.13.1
@angular-devkit/core                7.3.1
@angular-devkit/schematics          7.3.1
@angular/animations                 7.2.5
@angular/cli                        7.3.1
@angular/common                     7.2.5
@angular/compiler                   7.2.5
@angular/compiler-cli               7.2.5
@angular/core                       7.2.5
@angular/forms                      7.2.5
@angular/http                       7.2.5
@angular/language-service           7.2.5
@angular/platform-browser           7.2.5
@angular/platform-browser-dynamic   7.2.5
@angular/platform-server            7.2.5
@angular/router                     7.2.5
@ngtools/webpack                    7.3.1
@schematics/angular                 7.3.1
@schematics/update                  0.13.1
rxjs                                6.4.0
typescript                          3.3.3
webpack                             4.29.4

```


