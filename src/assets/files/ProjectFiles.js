import { TshareIcons, DwIcons, LightbenderIcons, LensIcons } from "./IconFiles";
import ImgFiles from "./ImgFiles.js";

let ProjectFiles = [
  {
    id: "dw",
    mainImg: ImgFiles.dw.main,
    primaryText: "Democracy Works",
    secondaryText: "Python scripts empowering millions of Americans to vote",
    isVideo: false,
    youtubeId: "HnL_CLqbVvE",
    icons: DwIcons,
    projectLink: "https://github.com/andyKlenzman/VIP-Data-Scripts",
    bodyText: [
      "The Voting Information Project (VIP) is an initiative I worked on at Democracy Works that helps voters find information about their elections with Google's Civic API. As the election approached, I worked directly with election administrators to receive, review, and approve the most up-to-date information on where and when to vote. Once approved, the data was made available on the API, which is used by millions of people each election cycle.",
      "As a Data Apprentice for Democracy Works, I was responsible for collecting and formatting data to be sent to Google. I identified that a lot of the data entry we were doing could be automated, and wrote python scripts to pull data from Google Sheets, transform it with pandas, and return it formatted for Google in another sheet. One of these scripts cut down data entry time by 80%. I used the webscraping library beautiful soup to expedite our processes as well.",
      "Working on the VIP initiative allowed me to gain insight into working in multiple departments within a technology company, including web development, product design, data science, and QA. I collaborated with the Google team to read, test, and update bug reports, including reading JSON data from API requests in Chrome developer tools. This Project allowed me to showcase my skills in data management and automation, while getting feedback on my code from professionals.",
    ],
    nextProjectId: "tshare",
    prevProjectId: "lightbendermobile",
    nextProjectText: "Tshare",
    prevProjectText: "Lightbender Mobile",
    isMenu: false,
    isButton: true,
  },
  {
    id: "tshare",
    mainImg: ImgFiles.tshare.main,
    primaryText: "Tshare",
    secondaryText: "Full stack web app fusing technology and fashion",
    isVideo: true,
    youtubeId: "mEkV2QVh-1k",
    icons: TshareIcons,
    projectLink: "https://tshare.family/",
    bodyText: [
      "Tshare is a web application that empowers users to control the function of a QR code printed on their shirt. The app is designed to offer a wide range of features including playing games, cracking jokes, announcing messages, and setting up dates.",
      "I developed the idea, designed the user interface, built the web application and wrote all of the server code. I used Google's Firestore database to store user data and the app communicates with the API, which runs on NodeJS servers using the Express server framework.",
      `As a personal project, I have built Tshare twice, with each version bringing improvements to the product's focus and the user experience. In this last build, I focused on refining the app's purpose and building it to be more scalable and maintainable. While I am currently in the process of this latest build, I have learned a great deal about software development, and I am now looking to build it again with some further improvements. These include a restructured data architecture and better state management to make the app more efficient. With the lessons of my previous builds, I'm excited for this one to be the best one yet!`,
    ],
    nextProjectId: "lightbender",
    prevProjectId: "dw",
    nextProjectText: "Lightbender",
    prevProjectText: "Democracy Works",
    isMenu: false,
    isButton: true,
  },
  {
    id: "lightbender",
    mainImg: ImgFiles.lightbender.main,
    primaryText: "Lightbender",
    isVideo: true,
    youtubeId: "HnL_CLqbVvE",
    secondaryText: "Python system for lightshows controlled by computer vision",
    icons: LightbenderIcons,
    projectLink: "https://github.com/andyKlenzman/Lightbender",
    bodyText: [
      "Lightbender was an mixed-media performance project that allowed me to explore the possibilities of combining technology and art. By utilizing advanced computer vision libraries, I was able to create a system that translated dance movements into dynamic light patterns on an LED strip, creating a stunning visual display that was synchronized to the music.",

      "One of the primary goals of the project was to create an engaging and immersive performance art experience, and Lightbender was successful in achieving this goal. The system allowed me to express myself through dance, while also incorporating technology to create a unique and visually stunning display.",

      "Through the development of Lightbender, I was able to gain a deeper understanding of computer vision techniques and their applications in artistic expression. Additionally, the project helped me develop valuable problem-solving skills and the ability to think creatively about the intersection of technology and art.",

      "While the project had its limitations and was not particularly usable beyond its intended purpose as part of the performance, it was an exciting opportunity to push the boundaries of what was possible with technology and explore new avenues for artistic expression. Ultimately, Lightbender was a success in achieving its primary goal of creating an immersive and engaging performance art experience, and inspired a later project to bring Lightbender to mobile platforms.",
    ],
    nextProjectId: "lightbendermobile",
    prevProjectId: "tshare",
    nextProjectText: "Lightbender Mobile",
    prevProjectText: "Tshare",
    isMenu: false,
    isButton: true,
  },
  {
    id: "lightbendermobile",
    mainImg: ImgFiles.lightbendermobile.main,
    primaryText: "Lightbender Mobile",
    secondaryText: "Mobile app for Lightbenders",
    isVideo: false,
    youtubeId: "",
    icons: [],
    projectLink: "https://github.com/andyKlenzman/Nucampsite-Mobile-App",
    bodyText: [
      "I am currently developing a React-Native application that allows users to control LED lights in their environment using the motion sensors in their phone. By sending signals to a Bluetooth-enabled LED light strip, users will be able to control the color, intensity, and pattern of the lights by simply moving their phone.",

      "Inspired by my previous version of Lightbender, this app was developed with the goal of sharing that technology with users as an approachable and unique way to express themselves through light, color, and dance. Whether using the app to control lights in their room or embedded in their clothing, users can create mesmerizing visual displays that are responsive to their movement and mood.",

      "One of my key focuses is simplicity and ease of use. The interface will be designed to be intuitive and user-friendly, allowing users to quickly and easily connect their phone to the LED light strip and start controlling the lights with their movements. The app will also include a variety of pre-programmed light patterns and settings, as well as the ability to create custom light displays.",

      "I think this app has the potential to inspire creativity and self-expression in people of all ages and backgrounds. Whether used for personal enjoyment or as part of a larger artistic project, the app provides a unique and exciting way to explore the intersection of technology and art. Click the button above to see my Github repo track my progress!",
    ],
    nextProjectId: "dw",
    prevProjectId: "lightbender",
    nextProjectText: "Democracy Works",
    prevProjectText: "Lightbender",
    isMenu: false,
    isButton: true,
  },
];

export let ExperimentProjectFiles = [
  {
    primaryText: "Snapchat Lenses",
    secondaryText:
      "Javascript and Lens Studio to make filters promoting mental health",
    icons: LensIcons,
    isVideo: false,
    isImg: true,
    youtubeId: "HnL_CLqbVvE",
    img: "",

    projectLink: "https://github.com/andyKlenzman/VIP-Data-Scripts",
    bodyText:
      "The Voting Information Project (VIP) is an initiative I worked on at Democracy Works that helps voters find information about their elections with open-source tools. As the election approached, I worked directly with election administrators to receive, review, and approve the most up-to-date information on where and when to vote. Once approved, the data was made available on the Google Civic Information API, which is used by millions of people each election cycle.",
    nextProjectId: "tshare",
    prevProjectId: "lightbendermobile",
    nextProjectText: "Tshare",
    prevProjectText: "Lightbender Mobile",
    isMenu: false,
  },
];

export default ProjectFiles;
