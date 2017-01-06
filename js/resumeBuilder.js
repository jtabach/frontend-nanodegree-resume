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
work.display();

function replaceHolder(value, helper, placeholder) {
  var placeholder = placeholder || "%data%";
  return helper.replace(placeholder, value);
}