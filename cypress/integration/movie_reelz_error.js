// describe('Movie Reelz', () => {
//   beforeEach(() => {
//     cy.fixture('movieData.json')
//       .then((movies) => {
//         cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//           statusCode: 404,
//           body: movies
//         })
//       })
//     cy.visit('http://localhost:3000');
//   })

// it('should show an error page for a bad fetch response', () => {

// })

// // it('should show a page not found redirect for a bad path', () => {

// // })
// })