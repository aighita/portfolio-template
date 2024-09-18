// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Footer SECTION
const footer = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  show: true,
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  gradientColors2: "#4584ce, #1ad9c0, #ff3b11, #5b59b6, #ff2f7f, #ecf4f1",
  // Image to display as background. If image not found display gradient colors.
  imagineMyWork: "beautiful-pictures-of-nature-hd-1920x1080-wallpaper-preview.jpg",
  firstName: "RAZVAN",
  middleName: "",
  lastName: "NEDAL",
  message: " Storytelling through every shot. ",
  icons: [
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/nedal.ro/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Razvan Nedal",
  imageLink: require("./profile.jpeg"),
  imageSize: 250,
  message: "Freelance Videographer & Photographer at Ned Media Network",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Brands that trusted me",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// BRANDS SECTION
const brands = {
  show: true,
  heading: "Brands that trusted me",
  logos: [], // Get paths to logos from localhost:5000/api/brands with method get.
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message: "I am open to collaborations. Feel free to contact me regarding photosoots/campaigns/music videos: ",
  email: "nedal@nedmedia.com",
};

const contact = {
  show: true,
  heading: "Contact",
  message: "Complete the form below",
}

const musicVideos = {
  show: true,
  heading: "Music Videos",
  message: "",
}

const gallery = {
  show: true, 
  heading: 'My Gallery',
  message: 'Welcome to my work showcase.',
  leftImage: [
    '../gallery/leftImage/poza1.jpg',
    '../gallery/leftImage/poza2.jpg',
    '../gallery/leftImage/poza3.jpg',

  ],
    topRightImage: [
      '../gallery/topRightImage/poza1.jpg',
      '../gallery/topRightImage/poza2.jpg',
      '../gallery/topRightImage/poza3.jpg',
    ],
  bottomRightImage: [
    '../gallery/bottomRightImage/picture1.jpg',
    '../gallery/bottomRightImage/picture2.jpg',
    '../gallery/bottomRightImage/picture3.jpg',
  ],

};

const campaigns = {
  show: true,
  heading: "CAMPAIGNS",
  message: "",
}

const myWork = {
  show: true,
  heading: "MY WORK",
  message: "",
}

const notFound = {
  show: true,
  heading: "404 ERROR - NOT FOUND",
  message: "Sorry.. We can't find the page you're looking for.",
  buttonText: "GO BACK"
}

export { navBar, mainBody, about, repos, getInTouch, brands, contact, musicVideos, gallery, campaigns, myWork, footer, notFound };
