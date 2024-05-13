describe('Login Test', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login');
  });

  it('should display login form', () => {
    // Check if the login form is visible
    cy.get('form').should('be.visible');
  });

  it('should login successfully with correct credentials', () => {
    // Fill in the login form with correct credentials
    cy.get('#Input_UsernameVal').type('nancy.martin');
    cy.get('#Input_PasswordVal').type('123456');
    // Click the submit button
    cy.get('.btn-primary').click();
    cy.url().should('include','https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard');
    
    });

  it('should show error message with incorrect credentials', () => {
    // Fill in the login form with incorrect credentials
    cy.get('#Input_UsernameVal').type('nancymartin');
    cy.get('#Input_PasswordVal').type('123456');
    cy.get('span.heading5.text-neutral-8');
   
  });
});
