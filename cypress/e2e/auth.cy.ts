describe('User Sign-up and Login', () => {
  it('should redirect unauthenticated user to login page', () => {
    cy.visit('/')
    cy.location('pathname').should('equal', '/login')
  })

  it('should redirect unauthenticated user to login page', function () {
    cy.visit('/forms')
    cy.location('pathname').should('equal', '/login')
  })

  it('should allow a visitor to sign-up, login, and logout', function () {
    const userInfo = {
      email: 'demo@dwarves.foundation',
      password: 'Testing@123',
    }

    cy.visit('/')
    cy.get('[name="email"]').type(userInfo.email)
    cy.get('[name="password"]').type(userInfo.password).type('{enter}')
    cy.wait(10000)
    cy.location('pathname').should('equal', '/')
    cy.get('[data-testid="profile-button"]').click()
    cy.get('[data-testid="logout-button"]').click()
    cy.location('pathname').should('equal', '/login')
  })
})
