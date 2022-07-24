# Purpose
This project is to create a HTTP server and a simple webpage to conduct the calculation of the circumference of Sun.
To start and access to this project, please refer to the steps below.



# Steps to start the project
1. Open both "get-PI-frontend" and "get-PI-backend" in separated windows of any IDE (eg. Visual Studio Code).

# For "get-PI-frontend"
2. In the terminal, run "npm i" to install the packages.
3. After the installation, run "npm start" to run the project as a client-side webpage on local.
4. A local webpage with title of "Calculator of Sun Circumference" will be opened up on the browser (eg. Chrome).


# For "get-PI-backend"
5. In the terminal, run "npm i" to install the packages.
6. After the installation, run "nodemon index.js" to run a HTTP server on local.
7. Now, the HTTP server is running on port 5000.


8. On browser, users can get the value of Pi and circumference of Sun by clicking the buttons provided.
9. API will be fired to request the most accurate Pi value from server. 



# Further explanation (technical)
First API: "/pi-value-v1", the formula is obtained from this link:
http://ajennings.net/blog/a-million-digits-of-pi-in-9-lines-of-javascript.html

Second API: "/pi-value-v2", calculates PI value based on the Taylor series from above link,
I figured out the patterns and translated them into JavaScript code.


# Limitations
1. Getting PI value one decimal point at a time is not feasible because fractional calculations give a lot of decimal points.
2. To achieve the effect that is wanted in the task, we'll have to produce PI value with many decimal points first and then trim the decimal places to whatever we desire, but that might affect accuracy.


# GitHub repo links
1. get-PI-frontend: https://github.com/Hmin25/get-PI-frontend
2. get-PI-backend: https://github.com/Hmin25/get-PI-backend
