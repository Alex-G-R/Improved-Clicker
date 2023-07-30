# Improved-Clicker
To run this app you need to have some sort of a server.
You can't run it directily from files. 
I personaly would reccomend Live Server (VS code extention)
But there are other options (copied from Stack Overflow - https://stackoverflow.com/questions/52919331/access-to-script-at-from-origin-null-has-been-blocked-by-cors-policy/66951910#66951910?newreg=e180875d1b424d43825b58368bd4b459)

"Looks like you're trying to open the web-page locally (via file:// protocol) i.e. double clicking the .html file.
Unfortunately modules only work via HTTP(s), so all you need to do is use a local web server. Popular choices include:

 - Live Server, a VS Code extension that adds a right-click option to run your pages with a local server.
  
 - Node static server, a simple http server to serve static resource files from a local directory.
   
 - Node live server is easy to install and use:
 ( npm install -g live-server // Install globally via npm )
 ( live-server                // Run in the html's directory)
   
 - Or even shorter and without altering your packages:
 (npx live-server)"
