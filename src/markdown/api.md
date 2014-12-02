#Society Pro API
##General
We have an API that is served from Society Pro. With Society Pro running, navigate a browser to http://localhost:38000/api for the API root.

##API Testing
###Apiary
The full API specification and documentattion can be found on [Apiary](http://docs.slapichannels.apiary.io/).

###Google Test
The primary API testing is completed during unit testing.

###Postman
REST client testing is completed with [Postman](http://getpostman.com). ([documentation](http://www.getpostman.com/docs))

####Test Location
Postman test collections (i.e. SoProAPI.json.postman_collection) and test environments (i.e. SocietyPro.postman_environment) are located in the test/postman subdirectory of the Cambrian-src repository. There is also a UNIX test runner script.

####Importing Test Collections
In the Postman application, select "Import" from the menu toolbar and browse to the collection or drag and drop the collection onto the popup box.

####Exporting Test Collections
In the Postman application, select the collection you wish to export in the left menu drawer. Then, select the "share" icon and "download" as a json file.

####Importing an Environment
In the Postman application, select the environment dropdown to the right of the authentication scheme tabs of the main IDE window. Select "Manage Environments" from the dropdown list, and then click the "Import" button. Then choose the environment file you wish to import.

####Exporting an Environment
In the Postman application, select the environment dropdown to the right of the authentication scheme tabs of the main IDE window. Select "Manage Environments" from the dropdown list. Select the "Download environment" icon in the same row as the environment you wish to export.

####Creating a new request
In the Postman application, press alt+n to clear the request form in the main IDE window. Enter the request URL where directed and select the appropiate request verb from the dropdown list. Optionally, query parameters and headers can be specified for the request. Click the "Tests" button to open the test editor and click the "Add to collection" button to add the request to a new or existing collection.

###Test Automation
Unit and REST client testing is conducted automatically whenever code is checked into the repository. If new test collections and/or environments are created, the batch scripts for Windows CI projects should be changed to run the new files. Results of automated testing may be viewed on the [Continuous Integration Server](http://ci.societypro.org:8080).

