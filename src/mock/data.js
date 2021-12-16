import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nimesh Madusanka', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description:
    'Professional full stack developer with more than two years of experience in the business development process and freelancing projects. I like to learn new technologies and quickly adapt to the working environment.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nimesh Madusanka',
  subtitle: 'I`m FullStack Developer',
  cta: 'Feather More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a professional full-stack developer with more than two years of experience in the business development process and freelancing projects. I completed SE specialized BSc (Hons) IT Degree at SLIIT. I like JavaScript programming language and use few Javascript frameworks React, React Native, Gatsby, and Next.js. I like to learn new technologies and quickly adapt to the working environment.',
  paragraphTwo:
    'I had worked for three companies since 2018. I did an 8-month intern at Wijeyanewspapers. I worked on several industrial and research projects at Apex IT solutions. Lastly, I worked at SprakLabs and did the Gottamenu web project. At the moment, I have handled industrial, Research, Assessment, and Documentary projects under Web and Mobile Applications. In the project section, a few of them are added.',
  paragraphThree: 'If you want to download my resume, please click the bellow button',
  resume: 'https://drive.google.com/file/d/1Blob2YLtQZ7_AA4kMSjLaB7hpCctbJEL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Capture.PNG',
    title: 'Preassessme',
    info:
      'Gottamenu.app is a US client-based food find application that included physical and Digital menus.',
    info2:
      'Used technologies are Matrial UI, React framework, React redux, Mongo DB, SendGrid, Google login, JWT webtoken, react hooks, Express.js, formik.',
    url: 'https://gottamenu.app/',
    repo: 'https://github.com/NimeshMadusanka', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'Capture.PNG',
    title: 'Gottamenu.app',
    info:
      'Gottamenu.app is a US client-based food find application that included physical and Digital menus.',
    info2:
      'Used technologies are Matrial UI, React framework, React redux, Mongo DB, SendGrid, Google login, JWT webtoken, react hooks, Express.js, formik.',
    url: 'https://gottamenu.app/',
    repo: 'https://github.com/NimeshMadusanka', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Subscription.lk',
    info:
      'Subscription.lk is an online newspaper ordering site in Wijeya newspapers. Users can order newspapers provide relevant details and payments.',
    info2:
      'Used technologies are Boostrap 4, React framework, React redux, Mongo DB, Payment gateway, SendGrid, Google login, JWT webtoken, react hooks, Express.js, formik.',
    url: 'https://www.subscription.lk/',
    repo: 'https://github.com/NimeshMadusanka', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Health Food Network',
    info:
      'Healthy Food Network (Foodzy) is a research project in which users can actively contribute to health promotions. This is a mobile application users can share their consumer food images. Users get healthy suggestions, instructions, and information.',
    info2:
      'Used technologies are Python, CNN, TensorFlow, Keras, Scikit learn , React Native front end with expo, Firebase Database, and Heroku algorithm APIs',
    url: 'https://expo.io/@nimesh_madusanka/projects/foodzy',
    repo: 'https://github.com/NimeshMadusanka/foodzy-research', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Computer Science Quiz',
    info:
      'The quiz website is a learning platform for computer science. It provides multiple-choice questions with answers and scores.  Users can learn new things quickly throw the quiz.',
    info2: 'Used technologies are React framework, Typescript, CSS, opentdb API',
    url: 'http://computer-science-quiz.cf/',
    repo: 'https://github.com/NimeshMadusanka/cs-quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project8.png',
    title: 'Smart Farmer',
    info:
      'Smart Farmer is a mobile application for farmers to selling their harvest and buying Diary Products, wast managed and included consultant services.',
    info2:
      'Used technologies are Expo Camera, Maps, push notification, responsive & platform specific Design , Redux login, react hooks, navigation 5, Firebase Database',
    url: 'https://expo.dev/@nimesh_madusanka/sf',
    repo: 'https://github.com/NimeshMadusanka/foodzy-research', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Q4C Shop',
    info:
      'Q4C Shop is an online shopping site which user can buy their preferred product. Users have to provide shipping details before doing the payments.',
    info2:
      'Used technologies are React framework, React redux, Email.js, Google login, JSON Webtoken, Java Script, Bootstrap 4, Cloudinary, Paypal getway, Rest API back end, Express JS, Mongo DB Database',
    url: 'https://q4c-online-shop.herokuapp.com/',
    repo: 'https://github.com/NimeshMadusanka/q4c-shop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project7.png',
    title: 'Hotel Booking Site',
    info:
      'Vinark is a hotel booking website that includes five villas. Users can search and booking Villas with their relevant needs.',
    info2:
      'Used technologies are codeigniter Framework, HTML 5, CSS, PHP, Bootstrap 4, and MYSQL Database.',
    url: 'https://winark.000webhostapp.com/',
    repo: 'https://github.com/NimeshMadusanka', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.png',
    title: 'Q4C News AI',
    info:
      'Q4C News AI is a news reading platform using Alen AI. It provides the latest Daily news. Users can search and read throw the voice commands.',
    info2:
      'Used technologies are React framework, React redux, Email.js, Google login, JSON Webtoken, Java Script, Bootstrap 4, Cloudinary, Paypal getway, Rest API back end, Express JS, Mongo DB Database',
    url: 'https://q4c-news-ai.ga',
    repo: 'https://github.com/NimeshMadusanka/q4c-news-ai', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project6.png',
    title: 'Technical Blog site',
    info:
      'This is the blog site in which I share my knowledge with the IT community. I discuss more trending topics related to full-stack developers in 2021.',
    info2: 'Used technologies are Typescript, Next.js, react, SCSS, Ghost backend',
    url: 'https://technical-blog.ga/',
    repo: 'https://github.com/NimeshMadusanka/technical-blog', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Let`s Email',
  email: 'madusankan909@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://github.com/NimeshMadusanka',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/sparklabslk',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nimesh-madusanka-605120169/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/NimeshMadusanka',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
