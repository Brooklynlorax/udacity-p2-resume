
var work = {
    "jobs": [
        {
            "employer": "Marker Design",
            "title": "Web Designer & Project Manager",
            "location": "Brooklyn, NY",
            "dates": "2007-Present",
            "description": "Work with clients to develop, design and manage the creation of websites using html, css and Wordpress content management systems.<br/>Expert with Adobe Creative Suite. Proficient with HTML, CSS, Wordpress, Google Analytics, Trello, Powerpoint. Studying JavaScript, Github, Slack."
        },
        {
            "employer": "CDM",
            "title": "Senior Graphic Designer",
            "location": "New York, NY",
            "dates": "2002-2007",
            "description": "Lead the digital production of marketing materials for 8 brand teams concurrently. Design and create dozens of marketing pieces weekly on often tight schedules and according to strict brand guidelines.<br>This was a fast-paced, high volume role that required organization, time management, daily team interaction and thorough knowledge of design and software."
        },
        {
            "employer": "LLNS",
            "title": "Graphic Media Technician",
            "location": "New York, NY",
            "dates": "1998-2002",
            "description": "Bring visual concepts to life by creating art for 10 pitch campaigns. Work with art and editorial teams to produce detailed ad campaigns. Work on high-intensity launch of 5 new pharmaceutical products."
        }
    ]
}

var bio = {
    "name": "Mike",
    "role": "Front End Web Ninja",
    "contacts": {
        "mobile" : "718-777-8888",
        "email": "brooklynlorax@gmail.com",
        "twitter" : "",
        "github": "brooklynlorax",
        "location": "Brooklyn, NY"
    },
    "welcomeMessage": "Hello. Thanks for considering my skills",
    "skills": [
        "website creation and maintenance",
        "project management",
        "Adobe Creative Suite",
        "prepress",
        "design"
    ],
    "biopic": ""

    //"display": function() {var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
     //$(".work-entry:last").append(formattedLocation);}
};

//Bio display function iterates over the bio contacts object, replaces and appends each key item to the resume. The "if" statement tests to make sure there is data to include in resume
bio.display = function() {
    for (var contact in bio.contacts) {
        if (contact === "mobile") {
        var formattedHTML = HTMLmobile.replace("%data%", bio.contacts[contact]);
        $("#topContacts:last").append(formattedHTML);
        //Appended footer info inside bio contacts section in order to reuse the entire for in loop
        $("#footerContacts:last").append(formattedHTML);
        }
        if (contact === "email") {
        var formattedHTML = HTMLemail.replace("%data%", bio.contacts[contact]);
        $("#topContacts:last").append(formattedHTML);
        $("#footerContacts:last").append(formattedHTML);
        }
        if (contact === "twitter" && bio.contacts[contact].length > 1) {
            console.log(contact.length);
        var formattedHTML = HTMLtwitter.replace("%data%", bio.contacts[contact]);
        $("#topContacts:last").append(formattedHTML);
        $("#footerContacts:last").append(formattedHTML);
        }
        if (contact === "github") {
        var formattedHTML = HTMLgithub.replace("%data%", bio.contacts[contact]);
        $("#topContacts:last").append(formattedHTML);
        $("#footerContacts:last").append(formattedHTML);
        }
        if (contact === "blog") {
        var formattedHTML = HTMLblog.replace("%data%", bio.contacts[contact]);
        $("#topContacts:last").append(formattedHTML);
        $("#footerContacts:last").append(formattedHTML);
        }
        if (contact === "location") {
        var formattedHTML = HTMLlocation.replace("%data%", bio.contacts[contact]);
        $("#topContacts:last").append(formattedHTML);
        $("#footerContacts:last").append(formattedHTML);
        }
    }
}
bio.display();

var education = {
    "schools": [
        {
            "name": "Fullstack Academy of Code",
            "location": "New York, NY",
            "degree": " ",
            "major": "JavaScript Jumpstart",
            "dates": "February-March 2015"
        },
        {
            "name": "General Assembly",
            "location": "New York, NY",
            "degree": "Certificate",
            "major": "Product Management",
            "dates": "2014"
        },
        {
            "name": "University of Delaware",
            "location": "Newark, DE",
            "degree": "BA",
            "major": "English-journalism",
            "dates": "1984-1988"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "Fall 2015 - Spring 2016"
        }
    ]
};


/*var jobs = [
	{
		"employer" : "Marker Design",
		"title" : "Senior Web Designer/Project Manager",
		"location" : "Brooklyn, NY",
		"dates" : "2008 - Present",
		"description" : ""
	},
	{
		"employer" : "CDM",
		"title" : "Senior Graphic Designer",
		"location" : "New York, NY",
		"dates" : "2003-2008",
		"description" : ""
	},
	{
		"employer" : "LLNS",
		"title" : "Senior Graphic Designer",
		"location" : "New York, NY",
		"dates" : "1998-2002",
		"description" : ""
	},
]; */


var projects = {
	"projects" : [
	{
		"title" : "Big Onion",
		"dates" : "2001-present",
		"description" : "Website updates with Wordpress CMS, print production when necessary.",
		"images" : ["http://www.markerdesign.com/udacity/big-onion-sample.png"],
        "url" : "http://www.bigonion.com/"
	},
	{
		"title" : "Carrier and Company",
		"dates" : "2001-present",
		"description" : "Code and update website",
		"images" : ["http://www.markerdesign.com/udacity/carrier-sample.png"],
        "url" : " "
	},
    {   "title" : "My Sweatstyle",
        "dates" : "January - March 2015",
        "description" : "Build Shopify website",
        "images" : ["http://www.markerdesign.com/udacity/sweatstyle-sample.png"],
        "url" : "http://www.mysweatstyle.com/"
    }
	]
};

projects.display = function() {
    for(var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        $(".project-entry:last").append(formattedProjectImage);
    }
}
projects.display();

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
    $("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", "Mike Andres");
    $("#header").prepend(formattedName);


if(bio.skills.length >0) {
      $("#header").append(HTMLskillsStart);
        for(var i=0; i<bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
      }
    }


education.display = function() {
    for (var school in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);

    }

    for (var course in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        console.log(formattedOnlineDates, formattedOnlineSchool, formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
    }
}

education.display();

work.display = function () {
    for(var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerNTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerNTitle);
    var formattedLocations = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocations);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);
  }
}

work.display();

$(document).click(function(loc) {

 });

function locationFinder() {
    var locations = [];
    locations.push(bio.contacts.location);

    for (var school in education.schools) {
        locations.push(education.schools[school].location);
    }
    for (var job in work.jobs) {
        locations.push(work.jobs[job].location);
    }
}

locationFinder();


// Did locationizer() work? This line will tell you!
//console.log(locationizer(work));
/* 1) Write a funcition called locationizer(work_obj). It must take in the work object.
2) locationizer(work_obj) must return an array of the locations in work.
3) You might find that you need to use the array method .push() to add values to the array.


console.log(work.jobs.length);

function locationizer(work_obj) {
    var workLocations = [ ];
    for (var i = 0; i < work_obj.jobs.length; i++) {
       workLocations.push(work_obj.jobs[i].location);
    }
      return workLocations;
}*/

/*$(".main").append(internationalizeButton);

var inName = function(nameString) {
    nameString = nameString.split(" ");
    lastName = nameString[1].toUpperCase();
    finalName = nameString[0] + " " + lastName;
    return finalName;
}
inName("Mike Andres");*/

$("#mapDiv").append(googleMap);
