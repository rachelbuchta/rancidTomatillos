beforeEach(() => {
  cy.visit('http://localhost:3000');
})

describe('Movie Reelz', () => {
  it('Should be able to visit the page and render all movies', () => {
      cy.get('.moviesContainer').children('.movieCard');
  })
})