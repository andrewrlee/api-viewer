api-viewer
==========

This is a generic viewer for displaying documentation about an API or DSL. 

An example of the viewer is present [here](http://plasma147.github.com/api-viewer/).

Configuration
------------------
This is configured through config.js. The following options are available:

    //The name of this api: Used in title and Navbar
    var apiName = "Animal Creation Language API";

    //The description of this api: Provides a textual description of this api
    var apiDescription = "A glossary for the elements of this <strong>" +apiName+ "</strong> are below";

    //The type of this api: This will be displayed as a header
    var apiType = "Animals:";

    //The location of the data file
    var dataLocation = "animals.json";

Data
------------------
The data file that is used by this report is a json resource that contains a map of sections to command objects. A section is a label that can be asssociated with a group of commands. 

A command may be mapped to multiple sections but this must be represented in the data file.

A command element consists of the following fields:
* Expression: The expression that executes the command in the language 
* Example : An example that triggers the command
* description : An explanation of how to use the command and the action that it performs

An example of a full data file would be: 

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
