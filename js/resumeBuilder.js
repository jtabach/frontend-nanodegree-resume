/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var bio = {
//   name: "Jeff Tabachnick",
//   role: "Front End Engineer",
//   contacts: {
//     mobile: "818 292-0405",
//     email: "jeff.n.tabachnick@gmail.com",
//     github: "jtabach",
//     twitter: "@jtabach",
//     location: "San Francisco"
//   },
//   welcomeMessage: "Hello, my name a Jeff!",
//   skills: ["Hockey", "Snowboarding", "Guitar", "Acting"],
//   biopic: "What?",
//   display: function() {}
// };


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
      work.jobs.map(function(job, i) {
        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        return $(HTMLworkStart).append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
      })
    );
  }
};

work.display();