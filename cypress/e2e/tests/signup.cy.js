describe('User Signup flow for automationexcrcise website', () => {
  beforeEach(() =>{
    cy.visit('https://automationexercise.com/login')
  });

 it('should allow a user to sign up successfully', () => {
    // Fill in the signup form
   cy.get('[data-qa="signup-name"]').type('neeti mishra')
   cy.get('[data-qa="signup-email"]').type('sharma.niti03@gmail.com');

    //Submit the form
  cy.get('[data-qa="signup-button"]').click();

    //assertion after signup
     cy.url().should('include', '/signup');
     cy.contains('Enter Account Information').should('be.visible');
   });

  })