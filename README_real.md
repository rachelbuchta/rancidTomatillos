# REELZ aka Rancid Tomatillos

## Overview

Reelz is a partner effort completed by Rachel Buchta and Cole Fiscus of the Turing School of Software and Design.
This project focuses on effectively constructing a React application including separating the use of class-based and functional components, retrieving and displaying data data fetched from a Web API, and using Cypress to test all user pathways of our application.

When a user loads this application, they should be presented with a display that includes a prominent app title and a grid of movie posters, each representing an individual movie. Also showing should be a search bar in the upper-left-hand corner to search through movies by title. When a user clicks on an individual movie title, they should be directed to a new page that shows the user additional info about the selected movie including the movie's genre(s), a brief description, trailers, average rating, and more.

Technologies utilized to build this project include React, JavaScript, Sass, and Cypress.

## How to Use and/or Contribute

To add more features to this project, or to simply view the code in action...

Clone this repo (or first fork it and then clone) using `git clone [THIS REPO'S SSH KEY] [OPTIONAL DIRECTORY NAME]`.  
`cd` into that directory.  
Enter `npm start` to run the app or open in your text editor.  

## Additional Features

 Other features not mentioned in the overview include:
 
  - Loading screens taking into account the time to retrieve data from the specified Web APIs.
  - Complete responsiveness across 3 breakpoints ranging from full screen to mobile view.
  - Sorting of movies based on their average rating from either highest to lowest or lowest to highest.
   
## Future Iterations

The first feature we would like to add to the project in the future would be a connected Web API that holds data of imagined users that would be using our app.
This would let us create additional functionality such as allowing a user to favorite and rate the movies that they've seen which would be stored in our connected API via a POST request (along with removing that info via a DELETE request). After that we would also like to see some form of login page that would allow us to show the data (i.e. a user's favorited/rated movies) for multiple users.

