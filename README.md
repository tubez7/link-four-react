# Link-Four

https://link-four.netlify.app

The above link will direct you to the hosted version of this app. This app was built as a personal learning exercise/portfolio project to practise and consolidate my knowledge of building apps in React, experiment with some new technologies, as well as practising CSS UI/UX design and generally building upon my knowledge of JavaScript. It also functions as a prototype-blueprint I hope to adapt and expand upon for a future project I am provisionally planning to build.

The app is hosted as a Progressive Web App, which means it can be installed directly onto a phone, tablet, or any device that supports it and doesn't require an online connection to function once it's been installed. The idea was to make the app mimic a fast, responsive native app as closely as possible whilst still functioning as a normal browser based web application. As the primary function of the app from the user perspective is to play a fun, fast, responsive game of "Four in a Row" that can be taken and played anywhere, developing the app as a PWA was a core design principle.

As a Mobile-First designed app, the UI/UX has also been implemented to display adaptively to suit a range of mobile devices, both in landscape and portrait aspect ratios, as well as on larger screens such as desktop PCs and TVs. The principle that drove the design of the app was that the game should be able to be played in an optimal way by as many people as possible, on any device they happen to have access to.

In its current build, the hosted app represents the Minimum Viable Product. It will allow you to play the game whilst also keeping track of the current game stats and player information. The Info section of the app functions as a portfolio/resume for my software developer profile as well as providing links to some of my extra curricular activities. The code can easily be adapted and the icons and branding can easily be swapped out from the ones I have borrowed (from my own band) to make the app's themes customisable for any potential brand or organsiation.

Whilst I have detailed potential updates I wish to include in the future, building the app to this point has been an incredible learning experience. As someone who only wrote their first line of code a little over 12 months ago, I didn't expect to get anywhere near as far as I have done, nor was I sure exactly what was achievable, so I'm incredibly happy that I was able to build a fully functional working game that can be installed as a PWA. I expected the project to be a rewarding and educational, but ultimately unsuccessful, endeavour that would show me exactly where the limits of my knowledge and current abilities fall short. Instead it has inspired me to find out how much further I could potentially take it, by continuing to learn and building upon what I've learned from overcoming the challenges it took to get this far. 


## Future Updates
Beyond basic small refinements to the UI/UX, some of the features I hope to research and learn before incorporating into more advanced builds of this app include:
 - icon/CSS animations and transitions
 - implementation of optional sound effects which can be toggled by the user
 - a range of, potentially user customisable, colour themes and icons
 - non-local PvP functionality, potentially through web-socket technology
 - AI implementation allowing a user to play a single player game against the app

 NB - Please check the bottom of this readme for details of features added to the latest build.


## Tech Stack
The app was bootstrapped with Create React App. I utilised Email.js for the email functionality on the contact form in the Contact section and made use of Material UI's TextareaAutoSize component to replace the native HTML equivalent. The Lodash cloneDeep method was also utilised as a helper function.
<br>
<br>

### Node version & dependencies
```
Node.js: v18.12.1
emailjs/browser: 3.10.0
mui/base: 5.0.0-alpha.112
testing-library/jest-dom: 5.16.5
testing-library/react: 13.4.0
lodash: 4.17.21
react: 18.2.0
react-dom: 18.2.0
react-router-dom: 6.4.3
react-scripts: 5.0.1
web-vitals: 2.1.4
```

## Set-up & Local Installation 

### Fork and clone the project
Fork the repo and clone the forked repo on your computer by running the following command from your chosen local directory:
```
$ git clone /github-project-url/
``` 

### Install dependencies
From the root directory of the project run the following command: 
```
$ npm install
``` 

### View the App on a Local Server
From the root directory of the project run the command:
```
$ npm start
``` 

### Create a Production Build
From the root directory of the project run the command:
```
$ npm build
``` 
<br>

## Other Projects

Please visit https://github.com/tubez7 to see other projects I have worked on, or check out some apps I have built in the past using the links below:

NC NEWS: https://richard-nc-news.netlify.app \
NC NEWS API: https://nc-news-api.cyclic.app/api \
TREMOLO - THE SOCIAL APP FOR MUSICIANS: https://tremolo-project.netlify.app

 \
Thanks for stopping by! 

<br>

## Completed Updates
 - Added animations to various UI components (09/01/2023).