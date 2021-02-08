beforeEach(() => {
  cy.visit('http://localhost:3000');
})

describe('Movie Reelz', () => {
  it('Should be able to visit the page and render all movies', () => {
    cy.get('.moviesContainer').children('.movieCard');
  })
})

describe('Movie Reelz', () => {
  it('Should be able to click a single movie, all movies disapear and are navigated to a new page that displays that single movies details and trailer', () => {
    cy.get('.movieCard:first').click()
  })
})

describe('Movie Reelz', () => {
  it('Should display a section containing movie details, a trailer and a backdrop image related to that movie', () => {
    cy.get('.movieCard:first').click()
    cy.get('main').children('.backdrop', '.detailsWrapper')
  })
})