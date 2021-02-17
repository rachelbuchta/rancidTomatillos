# REELZ aka Rancid Tomatillos
Mod3 Pair Project

## Overview

Reelz is a partner effort completed by [Rachel Buchta](https://github.com/rachelbuchta) and [Cole Fiscus](https://github.com/colefiscus) of the [Turing School of Software and Design](https://turing.io/).
This project focuses on effectively constructing a React application including separating the use of class-based and functional components, retrieving and displaying data data fetched from a Web API, incorporating router to navigate through pages and using Cypress to test all user pathways of our application.

When a user loads this application, they should be presented with a display that includes a prominent app title and a grid of movie posters, each representing an individual movie. Also showing should be a search bar in the upper-right-hand corner to search through movies by title. A sort by ratings drop down menu is on the right so a user can search by highest-to-lowest ratings or lowest-to-highest. When a user clicks on an individual movie title, they should be directed to a new page that shows the user additional info about the selected movie including the movie's genre(s), a brief description, trailers, average rating, and more.

Technologies utilized to build this project include React, React-Router, JavaScript, Sass, and Cypress.

## How to Use and/or Contribute

To add more features to this project, or to simply view the code in action...

1. Clone this repo (or first fork it and then clone) using `git clone [THIS REPO'S SSH KEY] [OPTIONAL DIRECTORY NAME]`.  
2. `cd` into that directory.  
3. Install any necessary dependencies using `npm install`.
4. Enter `npm start` to run the app or open in your text editor.  
5. The app should open automatically, but you can also navigate to `http://localhost:3000/` to view the app as well.

OR visit the live site (here)[]

## Additional Features

 Other features not mentioned in the overview include:
 
  - Loading screens taking into account the time to retrieve data from the specified Web APIs.
  - Complete responsiveness across 3 breakpoints ranging from full screen to mobile view.
  - Sorting of movies based on their average rating from either highest to lowest or lowest to highest.
   
## Future Iterations

The first feature we would like to add to the project in the future would be a connected Web API that holds data of imagined users that would be using our app.
This would let us create additional functionality such as allowing a user to favorite and rate the movies that they've seen which would be stored in our connected API via a POST request (along with removing that info via a DELETE request). After that we would also like to see some form of login page that would allow us to show the data (i.e. a user's favorited/rated movies) for multiple users.

## Project Wins / Challenges

#### Wins

This project was a great intro to using React along with React Router and Cypress as it gave us many more tools we now know how to use in our software development careers. A big win for us was getting better at knowing which methods and state should be passed down as props as opposed to creating more class-basec components.

#### Challenges

We still have more to learn on how to effectively handle and display errors, we could use more reps on using Cypress to test our application and all pathways (including sad paths), and we struggled to deploy an Express server to use alongside our front-end display.

Also challenging was refactoring from conditional rendering to incorporating Router - we think if we focus on using Router from the beginning of a project, that will make the process simpler and cleaner.

#### 
#### Mobile View
![mobileView](https://media.giphy.com/media/8g22yxLGHD2cyzyPxw/giphy.gif)
#### Main View
![mainView](https://media.giphy.com/media/exoBTanHsF18PUYiYB/giphy.gif)

### Links

The link to the spec sheet that guided this project: https://frontend.turing.io/projects/module-3/rancid-tomatillos-v3.html
The link to this repos project board: https://github.com/rachelbuchta/rancidTomatillos/projects/1
