import familyPhoto from './assets/images/family.jpg';
import uSingImg from './assets/images/uSing.png';
import mymovielistImg from './assets/images/mymovielis.png';
import drwhoImg from './assets/images/drwho.png';
import coupleImg from './assets/images/wife.jpg'
import board from './assets/images/board-pic.jpg'
import league from './assets/images/league-pic.jpg'
import pc from './assets/images/pc-build.jpg'
import shows from './assets/images/shows.jpg'
import chess from './assets/images/chess.png'
import deepThought from './assets/images/deepThought.PNG'
import budgetTracker from './assets/images/budgetTracker.PNG'
import bookLot from './assets/images/booklot.png'

//! Usage names in fab
// html5, css3-alt, js, node, react, bootstrap, 

export const about =
{
    image: [coupleImg, familyPhoto],
    about: 'I am a Full Stack Web Developer from Mesa, Arizona. On August 19th, I will have graduated from a Full Stack Boot Camp taught at the University of Arizona.',
    body: 'I would consider myself a family man and a practical nerd. I have always had an interest in the tech world, whether it is playing video games, building custom computers, or just researching new programs. I find that there are so many puzzles to be explored and solved in tech. I am a firm believer that the quality of work put into a project will equal the quality of the output. For the past 9 years, I have been working at IN-N-OUT Burger. Although I have been blessed to work at such a great company, certain aspects of the job are not aligned with my main priority, my family.',
    family: 'The greatest gift that my current job has given me is my loving and caring wife.  My wife and I have been married for two and a half years. Being the oldest of 8 kids in my family, I always knew that I wanted to have a big family. We have two adorable kids. An overly energetic boy named Samuel Joseph (SJ), who is almost 2 years old, and a 6 month old girl named Charlotte. They are one of the main reasons why I have began this journey into the world of coding. They are my motivation, pride, and joy in this world.',
    hobbies: [board,league,pc,shows, chess]
};

export const projects =
[
        {
            title: 'Deep Thoughts',
            image: deepThought,
            description: 'This is a simple social media full stack application. Where users can create thoughts, add reaction to thoughts, and also add friends to their friend list.',
            repo: 'https://github.com/jbryant4/deep-thoughts',
            app: 'https://jbryant-deep-thoughts.herokuapp.com/',
            usage: ['html5','css3-alt', 'js', 'node', 'react']
        },
        {
            title: 'BookLot',
            image: bookLot,
            description: 'A simple book search and save full stack application. This application was a refractor job. The task was to refractor the database from RESTful API to Graphql',
            repo: 'https://github.com/jbryant4/BookLot',
            app: 'https://jbryant-booklot.herokuapp.com/',
            usage: ['html5','css3-alt', 'js', 'node', 'react']
        },
        {
            title: 'uSing',
            image: uSingImg,
            description: 'An application to find our favorite songs/artists as well as their bio, lyrics and next events.',
            repo: 'https://github.com/jbryant4/uSing',
            app: 'https://jbryant4.github.io/uSing/',
            usage: ['html5','css3-alt', 'js', 'bootstrap']
        },
        {
            title: 'myMovieList',
            image: mymovielistImg,
            description: 'As a user, I want to be able to create, compare and like custom movie lists; made by multiple users, so that I can see what everyone has been watching during quarantine.',
            repo: 'https://github.com/jbryant4/myMovieList',
            app: 'https://mymovielistapp.herokuapp.com/',
            usage: ['html5','css3-alt', 'js', 'bootstrap']
        },
        {
            title: 'Budget Tracker',
            image: budgetTracker,
            description: 'A simple PWA app that allows the user to track their budget with offline functionality.',
            repo: 'https://github.com/jbryant4/budget-tracker',
            app: 'https://jbryant-budget-tracker.herokuapp.com/',
            usage: ['html5','css3-alt', 'js', 'node', 'bootstrap']
        },
        {
            title: 'Whovian Quiz',
            image: drwhoImg,
            description: 'A simple javascript time game quiz with an alien twist',
            repo: 'https://github.com/jbryant4/timed-quiz',
            app: 'https://jbryant4.github.io/timed-quiz/',
            usage: ['html5','css3-alt', 'js']
        }
    ];

export const contact = {
    github: 'https://github.com/jbryant4',
    linkedIn: 'https://www.linkedin.com/in/joseph-bryant-927335206/',
    resume: 'https://drive.google.com/file/d/1rkX3HvzZXRONy-jKBmOHPTzUR_-QXJiR/view?usp=sharing',
    email: "bryantc0der@gmail.com"
};

export const skills = [
    {
        category:'Front End',
        skills: ['React', 'Handlebars', 'HTML', 'CSS', 'JavaScript', 'ES6', 'JQuery', 'Bootstrap', 'Materialize', 'Foundation']
    },
    {
        category:'API Creation and Implementation',
        skills: ['Web APIs', 'Third-Party APIs', 'Server-Side APIs', 'RESTful APIs', 'GraphQL']
    },
    {
        category:'Node.js',
        skills: ['NPM packages','inquire','jest', 'Other packages']
    },
    {
        category:'Server Creation and Utilization',
        skills: ['Express.js', 'Heroku', 'MongoDB Atlas','Insomnia']
    },
    {
        category:'Databases',
        skills: ['MySQL - Sequalize', 'MongoDB - Mongoose', 'CRUD operations', 'MySQL workbench']
    },
    {
        category:'Coding paradigms',
        skills: ['Object Oriented Programing (OOP)', 'Test Driven Development (TDD)', 'Object-Relational Mapping (ORM)', 'Object-Document Mapping (ODM)']
    },
    {
        category:'Source Control',
        skills: ['Git', 'GitHub']
    },
    {
        category:'Others',
        skills: ['PWA', 'MERN']
    },
   
]