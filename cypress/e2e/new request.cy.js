describe('Login Test', () => {
    it('should log in in successfully with correct credentias',()=>{
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

        // fill in the username and password fields
        cy.get('#Input_UsernameVal').type('nancy.martin');
        cy.get('#Input_PasswordVal').type('123456');

        // Click the submit button
    cy.get('.btn-primary').click();
    cy.url().should('include','https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard');
   
    describe('New request', () => {
            cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')

                // Click the New Request button to open the form
                cy.get('#ListInvoices_NewInvoice button').click();
                cy.url().should('include','https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=0');

                  // Fill out the form fields
        cy.get('#Input_InvoiceNumber').type('cecil.anderson');
        cy.get('#Input_PeriodStartDate').type('2024-05-15T10:00');
        cy.get('#Input_PeriodEndDate').type('2024-09-15T10:00');
        cy.get('#Input_Amount').type('100');

        // Submit the form
        cy.get('button[type="submit"]').click();
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')



    });
});
        })



