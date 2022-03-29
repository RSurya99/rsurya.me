// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Rafli Surya Pratama')
  })
})
