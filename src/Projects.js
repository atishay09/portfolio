import candyImg from "../src/Assets/Images/candycrush.png";
import todoListImg from "../src/Assets/Images/todolist.png";
import musicPlayerImg from "../src/Assets/Images/musicplayer.png";
import weatherAppImg from "../src/Assets/Images/weatherweb.png";
import covidAppImg from "../src/Assets/Images/covidtracker.png";

export const Project = [
    {
        name: "ToDo List",
        link: "https://atishay09.github.io/TODOLIST/",
        id: '1',
        desc: "This is to do list application just like Google Notes. In this you can write whatever you want to do anyday or tasks you want to perform. You can also use this to keep your short notes at local storage you can delete tasks after the work is done and add as many tasks as you want.",
        date: '11 Feb 2022',
        tech: 'html, css, react js',
        role: 'frontend',
        img: todoListImg,
    },
    {
        id: '2',
        img: candyImg,
        name: 'candy burst',
        desc: "This is a game just like Candy Crush, In this game user is given 20 moves he can swap the candies to burst them but the candies will swap only when, when candies make the combinaton of 3 or more candies of same colour either in row or column after 20 successfull moves or swaps you'll get your score.",
        date: '17 Feb 2022',
        tech: 'html, css, react js',
        role: 'frontend',
        link: 'https://atishay09.github.io/Candycrush/'
    },
   
    {
        name: "Music Player",
        link: "https://atishay09.github.io/music-player/",
        id: '3',
        desc: "This is a simple application which plays music you can change the song play and pause the song with the help of buttons inside this.",
        date: '19 jan 2022',
        tech: 'html, css, react js',
        role: 'frontend',
        img: musicPlayerImg
    },
    {
        name: "Weather App",
        link: "https://atishay09.github.io/Weather-web-app/",
        id: '4',
        desc: "This is weather web application which tells about the weather condition of a City. You can manually search any city to know about its weather condition.",
        date: '22 jan 2022',
        tech: 'html, css, react js',
        role: 'frontend',
        img: weatherAppImg
    },
    {
        name: "Live Covid-19 Tracker",
        link: "https://atishay09.github.io/covid-19-tracker/",
        id: '5',
        desc: "This application was designed to keep the track of covid-19. It tells about the active covid-19 cases total recovered patients and many more details.",
        date: '24 jan 2022',
        tech: 'html, css, react js',
        role: 'frontend',
        img: covidAppImg
    },
]