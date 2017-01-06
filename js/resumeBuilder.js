/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  name: "Jeff Tabachnick",
  role: "Front End Engineer",
  contacts: {
    mobile: "818 292-0405",
    email: "jeff.n.tabachnick@gmail.com",
    github: "jtabach",
    twitter: "@jtabach",
    location: "San Francisco"
  },
  welcomeMessage: "Hello, my name a Jeff!",
  skills: ["Hockey", "Snowboarding", "Guitar", "Acting"],
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
        return replaceHolder(skill, HTMLskills)
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

var education = {
  schools: [
    {
      name: "Cal Poly",
      location: "San Luis Obispo",
      degree: "Bachelor of Science",
      majors: ["Architectural Engineering"],
      dates: "September 2012 - June 2015",
      url: "http://www.calpoly.edu/"
    },
    {
      name: "Cal Poly2",
      location: "San Luis Obispo",
      degree: "Bachelor of Science",
      majors: ["Architectural Engineering"],
      dates: "September 2012 - June 2015",
      url: "http://www.calpoly.edu/"
    }
  ],
  onlineCourses: [
    {
      title: "Front End Developer Nanodegree",
      school: "Udacity",
      dates: "September 2016 - Present",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      title: "Front End Developer Nanodegree2",
      school: "Udacity",
      dates: "September 2016 - Present",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  display: function() {
    $('#education').append(
      this.schools.map(function(school, i) {
        return $(HTMLschoolStart)
          .append(replaceHolder(school.name, HTMLschoolName)
            .concat(replaceHolder(school.degree, HTMLschoolDegree))
            .concat(replaceHolder(school.dates, HTMLschoolDates))
            .concat(replaceHolder(school.location, HTMLschoolLocation))
            .concat(replaceHolder(school.majors, HTMLschoolMajor))
          )
      })
    ).append(HTMLonlineClasses).append(
      this.onlineCourses.map(function(course, i) {
        return $(HTMLschoolStart)
          .append(replaceHolder(course.title, HTMLonlineTitle)
          .concat(replaceHolder(course.school, HTMLonlineSchool))
          .concat(replaceHolder(course.dates, HTMLonlineDates))
          .concat(replaceHolder(course.url, HTMLonlineURL))
        )
      })
    );
  }
}

var work = {
  jobs: [
    {
      employer: "Udacity",
      title: "Front End Engineer",
      location: "Mountain View",
      dates: "Currently Employed",
      description: "Super Awesome"
    },
    {
      employer: "AUdacity",
      title: "Front End Engineer",
      location: "Mountain View",
      dates: "Currently Employed",
      description: "Super Awesome"
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
education.display();
work.display();

function replaceHolder(value, helper, placeholder) {
  var placeholder = placeholder || "%data%";
  return helper.replace(placeholder, value);
}