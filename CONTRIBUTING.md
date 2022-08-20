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
<h3>Step 4:Setting up development variables</h3>
Now we need to create a .env file which will contain our development variables such as Atlas string(URI) and Twitter Bearer Token for the twitter API.

```console
    $ touch .env
    $ nano .env
```
*You can use any text editor in place of nano.
Now inside the .env file use your development variables as shown below.
Twitter Bearer token can be generated from <a href="https://developer.twitter.com/en/docs/developer-portal">here.</a>
For generation of Atlas URI to connect your database click <a href="https://account.mongodb.com/account/login?n=%2Fv2%2F62f7e246576e344fad111a1c&nextHash=%23clusters">here</a>.
Note: Configuration of .env file need to be done further, this section will be updated soon.
<h3>Step 3:Branch</h3>
To keep your development environment organized, create local branches to hold your work. These should be branched directly off of the main branch.

```console
   $ git checkout -b my-branch -t upstream/main
```

<h3>Step 4:Commit</h3>
<p>It is recommended to keep your changes grouped logically within individual commits. Commits are a great way to help your fellow contributors keep check of the changes you made to the project.</p>

```console
   $ git add my/changed/file
   $ git commit -m "changes-made"
```
<h3>Step 5:Rebase</h3>
<p>Once you have committed your changes, it is a good idea to use git rebase (not git merge) to synchronize your work with the main repository.</p>

```console
   $ git fetch upstream
   $ git rebase upstream/main
```
<p>This ensures that your working branch has the latest changes from main.</p>
<h2>Testing</h2>
<p>Bug fixes and features should always come with tests.</p>
<p>Before submitting your changes in a pull request, always run the full test suite. To run the tests:</p>

```console
   $ npm run test
```
<p>Make sure the linter does not report any issues and that all tests pass. Please do not submit patches that fail either check.</p>

<h3>Push</h3>
<p>Once your commits are ready to go -- with passing tests and linting -- begin the process of opening a pull request by pushing your working branch to your fork on GitHub.</p>

```console
   $ git push origin my-branch
```

:tada:Enjoy!! Your work is done. Go and upload your amazing PR now..:+1:
