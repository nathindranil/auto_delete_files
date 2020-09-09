Auto Delete Files After the specified duration

Technologies used: nodejs, npm for packages, Express js, mongoose, mongodb(for database), Heroku for deploying.

Day1: i) Created a server side file called app.js. This is the entry file. To run it locally use:
            node app.js
         Pre-requisites: node

     ii) Created "views" directory which contains the HTML code for the various web pages

     iii) Installed mongoose-ttl with npm

     iv)  Applied mongoose-ttl to specify dynamic TTL(Time to live) for various documents in the database.

     v) Used mongodb Atlas for database and connected it to our app using the given link.

      vi)  Created a git repo and added the required files.

      vii) Deployed to Heroku using Heroku cli

          Site: intense-stream-94808.herokuapp.com

      viii) Tested with various units of time like milliseconds and minutes

          To provide a duration in seconds convert the specific seconds to milliseconds and write the number in the duration input.
          Eg. To give a duration of 10 seconds write 10000 in duration input

          To provide a duration in minutes write the number followed by "min" in input.
          Eg. For a duration of 30 minutes write 30min in duration.
