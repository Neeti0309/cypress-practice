class LoginPage {
    visit() {
      cy.visit('https://example.cypress.io')
    }
  
    clickCommands() {
      cy.contains('Commands').click()
    }
  
    assertUrl() {
      cy.url().should('include', 'commands')
    }
  }
  
  export const loginPage = new LoginPage()
  