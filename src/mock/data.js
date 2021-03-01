import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nimesh Madusanka', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my protfolo', // e.g: Welcome to my website
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
  paragraphOne: 'I am Nimesh Madusanka who completed SE specialized degree at SLIIT. I used JavaScript, Typescript, Java, Python, Dart, and PHP programming languages. I lead my Research team when did the Foodzy Research Project. So, I have worked under pressure, handle changes and improve good communicational skills. I like to learn new things and quickly adapt to the working environment.',
  paragraphTwo: 'I have more than two years of experience in business development process and freelancing projects. I have done an 8th-month intern in Wijeya Digital Media and more than two years of freelancing experience at Apex IT Solutions. At the moment, I have handled industrial, Research, Assessment, and Documentary projects under Web, Mobile, and Desktop Applications. In the project section, a few of them are added.',
  paragraphThree: 'If you want to download my resume, please click the bellow button',
  resume: 'https://drive.google.com/file/d/1Blob2YLtQZ7_AA4kMSjLaB7hpCctbJEL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Subscription.lk',
    info: 'Subscription.lk is online newspaper ordering site in wijeya newspapers. User can order news papers provide relevant details and payments.',
    info2: 'Used technologies are codeigniter Framework, Payment gateway, HTML 5, CSS, PHP, Bootstrap 4, and MYSQL Database.',
    url: 'https://www.subscription.lk/',
    repo: 'https://github.com/NimeshMadusanka', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Health Food Network',
    info: 'Healthy Food Network (Foodzy) is a research project in which users can actively contribute to health promotions. This is a mobile application users can share their consumer food images. Users get healthy suggestions, instructions, and information.',
    info2: 'Used technologies are Python, CNN, TensorFlow, Keras, Scikit learn , React Native front end with expo, Firebase Database, and Heroku algorithm APIs',
    url: 'https://expo.io/@nimesh_madusanka/projects/foodzy',
    repo: 'https://github.com/NimeshMadusanka/foodzy-research', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Computer Science Quiz',
    info: 'The quiz website is a learning platform for computer science. It provides multiple-choice questions with answers and scores.  Users can learn new things quickly throw the quiz.',
    info2: 'Used technologies are React framework, Typescript, CSS, opentdb API',
    url: 'http://computer-science-quiz.cf/',
    repo: 'https://github.com/NimeshMadusanka/cs-quiz', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'project4.png',
    title: 'Q4C Shop',
    info: 'Q4C Shop is an online shopping site which user can buy their preferred product. Users have to provide shipping details before doing the payments.',
    info2: 'Used technologies are React framework, React redux, Email.js, Google login, JSON Webtoken, Java Script, Bootstrap 4, Cloudinary, Paypal getway, Rest API back end, Express JS, Mongo DB Database',
    url: 'http://computer-science-quiz.cf/',
    repo: 'https://github.com/NimeshMadusanka/q4c-shop', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'project5.png',
    title: 'Q4C News AI',
    info: 'Q4C News AI is a news reading platform using Alen AI. It provides the latest Daily news. Users can search and read throw the voice commands.',
    info2: 'Used technologies are React framework, React redux, Email.js, Google login, JSON Webtoken, Java Script, Bootstrap 4, Cloudinary, Paypal getway, Rest API back end, Express JS, Mongo DB Database',
    url: 'https://q4c-news-ai.ga',
    repo: 'https://github.com/NimeshMadusanka/q4c-news-ai', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'project6.png',
    title: 'Technical Blog site',
    info: 'This is the blog site in which I share my knowledge with the IT community. I discuss more trending topics related to full-stack developers in 2021.',
    info2: 'Used technologies are Typescript, Next.js, react, SCSS, Ghost backend',
    url: 'https://technical-blog.ga/',
    repo: 'https://github.com/NimeshMadusanka/technical-blog', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'project7.png',
    title: 'Hotel Booking Site',
    info: 'Vinark is a hotel booking website that includes five villas. Users can search and booking Villas with their relevant needs.',
    info2: 'Used technologies are codeigniter Framework, HTML 5, CSS, PHP, Bootstrap 4, and MYSQL Database.',
    url: 'https://winark.000webhostapp.com/',
    repo: 'https://github.com/NimeshMadusanka', // if no repo, the button will not show up
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
      url: 'https://www.apex-solutions.ga/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/Q4C-Solutions-102340038380957',
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
