<h1>Contributing to JobiE</h1>
<p>:wave: Hope you enjoy contributing to jobie :+1:</p>
The following is a set of guidelines to help you begin your contribution to the JobiE. If you want to propose any change to this document feel free to propose changes to this document in a pull request.

<h1>Raise an Issue</h1>
<p>Did you find something which can be improved further ?? Feel free to share it <a href="https://github.com/akshatnema/jobie/issues"> here</a>.</p>

<h1>How to Contribute</h1>
<p>Pull requests are the way concrete changes are made to the code, documentation dependencies, and tools contained in the JobiE repository.</p>
<h2>Setting up your local environment</h2>
<h3>Step 1:Fork</h3>
<p>Fork the project on Github and clone your fork locally to your system.</p>

```console
    $ git@github.com:akshatnema/jobie.git
    $ cd jobie  
    $ git remote add upstream https://github.com/akshatnema/jobie.git
    $ git fetch upstream
```
<h3>Step 2:Build</h3>
<p>Now we are ready to build the project , but first of all we need to install NodeJS in our local system.<p>
    
```console
    $ sudo apt install nodejs
```
 (for Debian Based system only)
 <p>Inside the JobiE folder run the following commands to install all the dependencies.<p>
     
```console
    $ cd server
    $ npm install
``` 
(To install all the server side dependencies)
<p>Similarly for the web side use the following commands in the JobiE folder<p>
     
```console
    $ cd web
    $ npm install
```
Note: Configuration of .env file need to be done further, this section will be updated soon.
 

