var bio = {
  name: "Jeff Tabachnick",
  role: "Front End Engineer",
  contacts: {
    mobile: "818 292-0405",
    email: "jeff.n.tabachnick@gmail.com",
    github: "jtabach",
    twitter: "@jtabach",
    location: "San Francisco, CA"
  },
  welcomeMessage: "Hello, my name a Jeff!",
  skills: ["JavaScript", "HTML", "CSS", "React"],
  biopic: "images/fry.jpg",
  display: function() {
    $('#header').prepend(replaceHolder(this.name, HTMLheaderName)
      .concat(replaceHolder(this.role, HTMLheaderRole))
    ).append(replaceHolder(this.biopic, HTMLbioPic)
      .concat(replaceHolder(this.welcomeMessage, HTMLwelcomeMsg))
      .concat(HTMLskillsStart)
    );
    $("#skills").append(
      this.skills.map(function(skill, i) {
        return replaceHolder(skill, HTMLskills);
      })
    );
    $('#topContacts, #footerContacts').append(replaceHolder(bio.contacts.mobile, HTMLmobile)
      .concat(replaceHolder(this.contacts.email, HTMLemail))
      .concat(replaceHolder(this.contacts.github, HTMLgithub))
      .concat(replaceHolder(this.contacts.twitter, HTMLtwitter))
      .concat(replaceHolder(this.contacts.location, HTMLlocation))
    );
  }
};

var projects = {
  projects: [{
      title: "GroupFFL",
      dates: "January 2015 - Present",
      description: "Social medai platform for fantasy football",
      images: ['images/197x148.gif']
    },
    {
      title: "Nifty Sort",
      dates: "January 2015 - Present",
      description: "Data Visualization for comparing products by unique variables",
      images: ['images/197x148.gif', 'images/197x148.gif']
    }
  ],

  display: function() {
    $('#projects').append(
      this.projects.map(function(project, i) {
        return $(HTMLprojectStart)
          .append(replaceHolder(project.title, HTMLprojectTitle)
            .concat(replaceHolder(project.dates, HTMLprojectDates))
            .concat(replaceHolder(project.description, HTMLprojectDescription))
            .concat(project.images.map(function(image,i) {
              return replaceHolder(image, HTMLprojectImage);
            }))
          );
      })
    );
  }
};

var education = {
  schools: [{
      name: "Cal Poly",
      location: "San Luis Obispo, CA",
      degree: "Bachelor of Science",
      majors: ["Architectural Engineering"],
      dates: "September 2012 - June 2015",
      url: "http://www.calpoly.edu/"
    },
    {
      name: "Coding House",
      location: "Fremont, CA",
      degree: "NA",
      majors: ["Computer Science"],
      dates: "January 2015 - April 2015",
      url: "http://jefftabachnick.com/"
    }
  ],
  onlineCourses: [{
    title: "Front End Developer Nanodegree",
    school: "Udacity",
    dates: "September 2016 - Present",
    url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }],
  display: function() {
    $('#education').append(
      this.schools.map(function(school, i) {
        return $(HTMLschoolStart)
          .append(replaceHolder(school.name, HTMLschoolName)
            .replace('#', school.url)
            .concat(replaceHolder(school.degree, HTMLschoolDegree))
            .concat(replaceHolder(school.dates, HTMLschoolDates))
            .concat(replaceHolder(school.location, HTMLschoolLocation))
            .concat(replaceHolder(school.majors, HTMLschoolMajor))
          );
      })
    ).append(HTMLonlineClasses).append(
      this.onlineCourses.map(function(course, i) {
        return $(HTMLschoolStart)
          .append(replaceHolder(course.title, HTMLonlineTitle)
            .concat(replaceHolder(course.school, HTMLonlineSchool))
            .concat(replaceHolder(course.dates, HTMLonlineDates))
            .concat(replaceHolder(course.url, HTMLonlineURL))
          );
      })
    );
  }
};

var work = {
  jobs: [{
      employer: "Udacity",
      title: "Front End Engineer",
      location: "Mountain View, CA",
      dates: "Currently Employed",
      description: "Super Awesome"
    },
    {
      employer: "Holland Construction",
      title: "Associate Project Manager",
      location: "Denver, CO",
      dates: "June 2015 - December 2015",
      description: "Not as awesome"
    }
  ],
  display: function() {
    $("#workExperience").append(
      this.jobs.map(function(job, i) {
        return $(HTMLworkStart)
          .append(replaceHolder(job.employer, HTMLworkEmployer)
            .concat(replaceHolder(job.title, HTMLworkTitle))
            .concat(replaceHolder(job.location, HTMLworkLocation))
            .concat(replaceHolder(job.dates, HTMLworkDates))
            .concat(replaceHolder(job.description, HTMLworkDescription))
          );
      })
    );
  }
};

bio.display();
projects.display();
education.display();
work.display();
$('#mapDiv').append(googleMap);
initializeMap();

function replaceHolder(value, helper, placeholder) {
  placeholder = placeholder || "%data%";
  return helper.replace(placeholder, value);
}