import {TshareIcons, DwIcons, LightbenderIcons , LensIcons } from './IconFiles'
import ImgFiles from './ImgFiles.js'

let ProjectFiles = [
  {
    id: "dw",
    mainImg: ImgFiles.dw.main,
    primaryText:"Democracy Works",
    secondaryText: "Python scripts empowering millions of Americans to vote",
    isVideo:false,
    youtubeId:"HnL_CLqbVvE",
    icons: DwIcons,
    projectLink:"https://github.com/andyKlenzman/VIP-Data-Scripts",
    bodyText:[
        "The Voting Information Project (VIP) is an initiative I worked on at Democracy Works that helps voters find information about their elections with open-source tools. As the election approached, I worked directly with election administrators to receive, review, and approve the most up-to-date information on where and when to vote. Once approved, the data was made available on the Google Civic Information API, which is used by millions of people each election cycle.",
        "As a Data & Outreach fellow for Democracy Works, I was responsible for collecting and formatting data to be sent to Google. I identified that a lot of the data entry we were doing could be automated, and wrote python scripts to pull data from Google Sheets, transform it with pandas, and return it formatted for Google in another sheet. One of these scripts cut down data entry time by 80%.",
        "Working on the VIP initiative allowed me to gain insight into working in multiple departments within a technology company, including web development, product design, data management, and QA. I collaborated with the Google team to read, test, and update bug reports, including reading JSON data from API requests in Chrome developer tools. This Project allowed me to showcase my skills in data management and automation."
    ],
    nextProjectId:"tshare",
    prevProjectId:"experiments",
    nextProjectText:"Tshare",
    prevProjectText:"Experiments",
    isMenu: false
  },
  {
    id: "tshare",
    mainImg: ImgFiles.tshare.main,
    primaryText:"Tshare",
    secondaryText: "Full stack web app fusing technology and fashion",
    isVideo:true,
    youtubeId:"mEkV2QVh-1k",
    icons: TshareIcons,
    projectLink:"https://tshare.family/",
    bodyText:[
        "Tshare is a web application that empowers users to control the function of a QR code printed on their shirt. The app is designed to offer a wide range of features including playing games, cracking jokes, announcing messages, and setting up dates.",
        "I developed the idea, designed the user interface, built the web application and wrote all of the server code. I used Google's Firestore database to store user data and the app communicates with the API, which runs on NodeJS servers using the Express server framework.",
        "As a personal project, I have built Tshare twice, with each version bringing improvements to the user experience. In this last build, I focused on refining the app's purpose and building it to be more scalable and maintainable. While I am currently in the process of this latest build, I have learned a great deal about software development, and I am now looking to build it again with some further improvements. These include a restructured data architecture and better state management to make the app more efficient. With the lessons of my previous builds, I'm excited for this one to be the best one yet!"
    ],
    nextProjectId:"lightbender",
    prevProjectId:"dw",
    nextProjectText:"Lightbender",
    prevProjectText:"Democracy Works",
    isMenu: false
  },
  {
    id: "lightbender",
    mainImg: ImgFiles.lightbender.main,
    primaryText:"Lightbender",
    isVideo:true,
    youtubeId:"HnL_CLqbVvE",
    secondaryText: "Mobile app for lightshows controlled by your body",
    icons: LightbenderIcons,
    projectLink:"https://github.com/andyKlenzman/Lightbender",
    bodyText:[
        "Lightbender is a cutting-edge React Native app that encourages people to dance in the comfort of their own home. Using advanced computer vision techniques, the app transforms users' dance movements into dynamic light patterns on an LED strip. The app features multiple modes for transforming movement data and allows users to edit and replay their lightshows to create unique and mesmerizing effects that sync up with their music.",
        "I developed Lightbender with the goal of addressing the lack of dance venues during the COVID-19 pandemic. Dancing is an important outlet for fun, exercise, and self-expression, and I wanted to create a tool that would make it easy for people to continue dancing safely from home. I initially built the app using Python and C++ Arduino, but found that the UI was cumbersome and difficult to use. I subsequently decided to rebuild the app using a modern stack of technologies, including React Native, Redux, Node.js, MongoDB, and native computer vision modules. This new version of the app includes a simple and intuitive UI, on-the-go usage, and file sharing capabilities between users.",
        "My primary focus while building Lightbender was to create an application that is easy to use and visually stunning. By utilizing computer vision, React Native, and other technologies, I was able to create an app that can run on a mobile device and translate user's movement into mesmerizing light patterns. Additionally, I have added functionalities like editing and replaying lightshows to give users more creative freedom and file sharing capabilities to encourage community engagement. Check it out!"
    ],
    nextProjectId:"experiments",
    prevProjectId:"tshare",
    nextProjectText:"Experiments",
    prevProjectText:"Tshare",
    isMenu: false
  },
  {
    id: "experiments",
    mainImg: ImgFiles.experiments.main,
    primaryText:"Experiments",
    secondaryText: "Small projects that keep my coding skills sharp",
    isVideo:false,
    youtubeId:"",
    icons: [],
    projectLink:"",
    bodyText:[
        "these",
        "are",
        "paragraphs"
    ],
    nextProjectId:"dw",
    prevProjectId:"lightbender",
    nextProjectText:"Democracy Works",
    prevProjectText:"Lightbender",
    isMenu: true
  },

];


export let TinyProjectFiles = [
  {
    primaryText:"Snapchat Lenses",
    secondaryText: "Javascript and Lens Studio to make filters promoting mental health",
    icons: LensIcons,
    isVideo:false,
    isImg: true,
    youtubeId:"HnL_CLqbVvE",
    img:"",
    
    projectLink:"https://github.com/andyKlenzman/VIP-Data-Scripts",
    bodyText:"The Voting Information Project (VIP) is an initiative I worked on at Democracy Works that helps voters find information about their elections with open-source tools. As the election approached, I worked directly with election administrators to receive, review, and approve the most up-to-date information on where and when to vote. Once approved, the data was made available on the Google Civic Information API, which is used by millions of people each election cycle.",
    nextProjectId:"tshare",
    prevProjectId:"experiments",
    nextProjectText:"Tshare",
    prevProjectText:"Experiments",
    isMenu: false
  },
]

export default ProjectFiles;
