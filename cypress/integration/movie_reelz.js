describe('Movie Reelz', () => {
  beforeEach(() => {
    cy.fixture('movieData.json')
      .then((movies) => {
        cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 201,
          body: movies
        })
      })
    cy.visit('http://localhost:3000');
  })

  it('Should be able to visit the page and render all movies', () => {
      cy.get('.moviesContainer').children('.cardContainer').children('.movieCard');
      cy.url().should('include', '/')
  })

  it('Should have an movie poster image pertaining to that movie', () => {
    cy
      .get('.movieCard').children('.movieLink').find('img').should('have.attr','src').should('include','https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
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

  it('Should return to the home page when the header ticket logo is clicked', () => {
    cy
      .get('.headerLink').children('.headerImg').click()
      cy.url().should('include', '/')
  })
})

describe('Movie Reelz', () => {
  it('Should render 404 error page', () => {
      cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404

    })
  cy.visit('http://localhost:3000');
 })
it('Should render 500 error page', () => {
      cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
  cy.visit('http://localhost:3000');
 })
 
})

// it.only('should show an error page for a bad fetch response', () => {

// })

