api-viewer
==========

This is a simple generic viewer for displaying a glossary for an API or a DSL. It is a single page web application written using [angular.js](http://angularjs.org/), [jquery](http://jquery.com/) and [bootstrap](http://twitter.github.com/bootstrap/). 

An example of a configured viewer is available [here](http://plasma147.github.com/api-viewer/).

Configuration
------------------
This viewer is configured through the config.js file. The following options are available:

    //The name of this api: Used in title and Navbar
    var apiName = "Animal Creation Language API";

    //The description of this api: Provides a textual description of this api (The html for this is not escaped)
    var apiDescription = "A glossary for the elements of this <strong>" +apiName+ "</strong> are below";

    //The type of this api: This will be displayed as the main page	 header
    var apiType = "Animals:";

    //The location of the data file
    var dataLocation = "animals.json";

Data
------------------
The data file that is used by this viewer is a json resource that contains a map of Sections to Command objects. A Section is just a simple label that can be asssociated with a group of Commands. 

A Command may be mapped to multiple Sections but this must be represented in the data file.

A Command element consists of the following fields:
* *Expression*: The identifier of the Command 
* *Example* : An example that triggers the Command
* *description* : An explanation of how to use the Command and the action that it performs

An example of a complete data file is: 

    {
    	"Mammals": [
    	    {
    	    "expression": "Dog name=\"<name>\" age=\"<ageInYears>\"",
    	    "example": "Dog name=\"Rex\" age=\"4\"",
    	     "description": "Creates a new (slightly smelly) four-legged friend."
    	    },
    	    {
    	    "expression": "Cat name=\"<name>\" age=\"<ageInYears>\"",
    	    "example": "Cat name=\"Timothy\" age=\"17\"",
    	    "description": "Creates a new four-legged friend that belongs on broadway."
    	    }
    	],
    	"Reptiles": [
        	{
        	"expression": "new Crocodile(\"<name>\")",
        	"example": "new Crocodile(\"Sam\")",
        	"description": "Creates a new <strong>SCARY!</strong> Crocodile with the given name."
        	}
    	]
    }
