var bio = {
    "name": "Mike Andres",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "718-777-8888",
        "email": "brooklynlorax@gmail.com",
        "twitter": "",
        "github": "brooklynlorax",
        "location": "Brooklyn, NY"
    },
    //"welcomeMessage": "Hello. Thanks for considering my skills",
    "skills": [
        "website creation and maintenance",
        "project management",
        "Adobe Creative Suite",
        "prepress",
        "design"
    ],
    //"biopic": "",

    //Bio display function iterates over the bio object, replaces and appends each key item to the resume. The "if" statement tests to make sure there is data to include in resume
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }

        //iterates over bio contacts section and appends info into the resume
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
};

var work = {
    "jobs": [{
        "employer": "Marker Design",
        "title": "Web Designer & Project Manager",
        "location": "Brooklyn, NY",
        "dates": "2007-Present",
        "description": "Work with clients to develop, design and manage the creation of websites using html, css and Wordpress content management systems.<br/>Expert with Adobe Creative Suite. Proficient with HTML, CSS, Wordpress, Google Analytics, Trello, Powerpoint. Studying JavaScript, Github, Slack.",
        "url" : "http://www.markerdesign.com/"
    }, {
        "employer": "CDM",
        "title": "Senior Graphic Designer",
        "location": "New York, NY",
        "dates": "2002-2007",
        "description": "Lead the digital production of marketing materials for 8 brand teams concurrently. Design and create dozens of marketing pieces weekly on often tight schedules and according to strict brand guidelines.<br>This was a fast-paced, high volume role that required organization, time management, daily team interaction and thorough knowledge of design and software.",
        "url" : "http://www.cdmny.com/"
    }, {
        "employer": "LLNS",
        "title": "Graphic Media Technician",
        "location": "New York, NY",
        "dates": "1998-2002",
        "description": "Bring visual concepts to life by creating art for 10 pitch campaigns. Work with art and editorial teams to produce detailed ad campaigns. Work on high-intensity launch of 5 new pharmaceutical products.",
        "url" : "http://www.llns.com/"
    }],
    //function appends work section info from work object to resume
    "display": function() {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
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
}

var projects = {
    "projects": [{
        "title": "Big Onion",
        "dates": "2001-present",
        "description": "Website updates with Wordpress CMS, print production when necessary.",
        "images": ["http://www.markerdesign.com/udacity/big-onion-sample.png"],
        "url": "http://www.bigonion.com/"
    }, {
        "title": "Carrier and Company",
        "dates": "2001-present",
        "description": "Code and update website. Build html emails. <br><em>Redesign shown has not yet been launched.</em>",
        "images": ["http://www.markerdesign.com/udacity/carrier-sample.png"],
        "url": "http://www.carrierandco.com"
    }, {
        "title": "My Sweatstyle",
        "dates": "January - March 2015",
        "description": "Build Shopify website",
        "images": ["http://www.markerdesign.com/udacity/sweatstyle-sample.png"],
        "url": "http://www.mysweatstyle.com/"
    }],
    //function iterates over projects and appends them to projects section of resume
    "display": function() {
        for (var project in projects.projects) {
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
};

var education = {
    "schools": [{
        "name": "Fullstack Academy of Code",
        "location": "New York, NY",
        "degree": "Course",
        "majors": "JavaScript Jumpstart",
        "dates": "February-March 2015",
        "url" : "http://www.fullstackacademy.com/jumpstart"
    }, {
        "name": "General Assembly",
        "location": "New York, NY",
        "degree": "Certificate",
        "majors": "Product Management",
        "dates": "Spring 2014",
        "url" : "https://generalassemb.ly/education/product-management"
    }, {
        "name": "University of Delaware",
        "location": "Newark, DE",
        "degree": "BA",
        "majors": "English-journalism",
        "dates": "1984-1988",
        "url" : "http://www.udel.edu/"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "Fall 2015 - Spring 2016",
        "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    //function appends school info to education section on resume
    "display": function() {
        for (var school in education.schools) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        //online section is separate, so this loop adds online courses to eduction section
        for (var course in education.onlineCourses) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school).replace("#", education.onlineCourses[course].url);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            $(".education-entry:last").append(formattedOnlineSchool + formattedOnlineTitle);
            $(".education-entry:last").append(formattedOnlineDates);
        }
    }
};

$("#mapDiv").append(googleMap);