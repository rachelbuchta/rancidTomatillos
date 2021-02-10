beforeEach(() => {
  cy.visit('http://localhost:3000');



  cy.fixture('movieData.json')
    .then((movies) => {
      cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 201,
        body: movies.movies
      })
    })
})

describe('Movie Reelz', () => {
  it('Should be able to visit the page and render all movies', () => {
    cy
      .get('.moviesContainer').children('.movieCard');
      cy.url().should('include', '/')
  })

  it('Should be able to click a single movie, all movies disapear and are navigated to a new page that displays that single movies details and trailer', () => {
    cy.get('.movieCard:first').click()
    cy.fixture('movieData.json')
    .then((movies) => {
      cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
        statusCode: 201,
        body: movies.movies
      })
    })
      cy.url().should('include', '694919')
  })

  it('Should display a section containing movie details, a trailer and a backdrop image related to that movie', () => {
    cy
      .get('.movieCard:first').click()
      .get('.main').children('.backdrop', '.detailsWrapper')
      .get('.videoContainer').children('iframe')
      cy.url().should('include', '/694919')
    
  })

  it('Should return to home page view showing all movies when the exit button is clicked', () => {
    cy
      .get('.movieCard:first').click()
      .get('.detailsContainer').children('.btnWrapper')
      .get('.cancelImg').click()
      cy.url().should('include', '/')
  })
})

