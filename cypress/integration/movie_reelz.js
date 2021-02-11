describe('Movie Reelz', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Should be able to visit the page and render all movies', () => {
    cy.fixture('movieData.json')
      .then((movies) => {
        cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 201,
          body: movies.movies
        })
      })
        .get('.moviesContainer').children('.movieCard');
        cy.url().should('include', '/')
  })

  it('Should have an movie poster image pertaining to that movie', () => {
    cy
      .get('.movieCard').children('.movieLink').find('img').should('have.attr','src').should('include','https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  })

  it('Should be able to click a single movie, all movies disappear and are navigated to a new page that displays that single movies details and trailer', () => {
    cy.get('.movieCard:first').click()
    cy.fixture('movieData.json')
    .then((movies) => {
      cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
        statusCode: 201,
        body: movies.movie
      })
    })
    .then((videos) => {
       cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
        statusCode: 201,
        body: videos
      })
    })
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
      .get('.headerLink').children('').click()
      cy.url().should('include', '/')
  })

// it('should show an error page for a bad fetch response', () => {

// })

// it('should show a page not found redirect for a bad path', () => {

// })

})
