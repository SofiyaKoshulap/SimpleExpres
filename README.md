# Simple Express server
- When you connect to the server, the output to the console of the current time begins at regular intervals
- Stop output to the console after the specified time and return the current date and time to the user.
- The interval and time interval must be specified when starting the server using environment variables:
  > `$ node server.js -i [console output recurrence interval] -t [time after which the web client message will be displayed]`