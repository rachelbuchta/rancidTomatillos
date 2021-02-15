describe('Movie Reelz', () => {
  beforeEach(() => {
    cy.fixture('movieData.json')
      .then((movies) => {
        cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 201,
          body: movies
        })
      })
    cy.visit('http://localhost:3000')
  })

  it('Should be able to visit the page and render all movies', () => {
      cy.get('.moviesContainer').children('.cardContainer').children('.movieCard')
      cy.url().should('include', '/')
  })

  it('Should have an movie poster image pertaining to that movie', () => {
    cy
      .get('.movieCard').children('.movieLink').find('img').should('have.attr','src').should('include','https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  })

  it('Should show the rounded number of stars beneath that movie poster that is modified from that movie\'s rating', () => {
    cy.get('.cardContainer:first').children('.stars').children().should('have.length', 6)
  })

  it('Should show only movies that match the text entered in the search bar', () => {
    cy
      .get('.search').type('Mul').get('.cardImage').invoke('attr', 'alt').should('contain', 'Mulan')
  })

  it('Should be able to click a single movie, all movies disappear and are navigated to a new page that displays that single movies details and trailer', () => {
    cy.fixture('movieData.json')
    .then((movie) => {
      cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
        statusCode: 201,
        body: movie
      })
    })
    .then((videos) => {
       cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
        statusCode: 201,
        body: videos
      })
    })
      cy.get('.movieCard:first').click()
      cy.get('.main').children('.backdrop', '.detailsWrapper')
        .get('.videoContainer').children('iframe')
      cy.url().should('include', '694919')
  })

  it('Should return to home page view showing all movies when the exit button is clicked', () => {
    cy
      .get('.movieCard:first').click()
      .get('.detailsContainer').children('.btnWrapper')
      .get('.cancelImg').click()
      cy.url().should('include', '/')
  })
})

describe('Loading Pages', () => {
  
  it('Should show a loading page when waiting for data to be retrieved from an outside source', () => {
  cy.fixture('movieData.json')
      .then((movies) => {
        cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 201,
          body: movies,
          delay: 5000
        })
        cy.get('.loadingScreen')
      })
  })
})

describe('Error Pages', () => {
  it('Should render 404 error page', () => {
      cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404
    })
  cy.visit('http://localhost:3000')
 })
 
it('Should render 500 error page', () => {
      cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
  cy.visit('http://localhost:3000')
 })
 
})



