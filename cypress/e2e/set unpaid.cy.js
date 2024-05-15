describe('Login Test', () => {
    it('should log in in successfully with correct credentias',()=>{
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

        // fill in the username and password fields
        cy.get('#Input_UsernameVal').type('charles.estevez ');
        cy.get('#Input_PasswordVal').type('123456');

        // Click the submit button
    cy.get('.btn-primary').click();
    cy.url().should('include','https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard');
   
    describe('New request', () => {
            cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')


describe('Set Invoice to Unpaid', () => {
    beforeEach(() => {
        // Visit the page containing the list of invoices
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices');
    });

    it('User can set an invoice to unpaid', () => {
        // Find the invoice item by its data-id or other unique identifier
        it('User can click the link to navigate to the invoice detail page', () => {
            cy.get('#InvoiceDetailEnergyInvoice').click();
    
            // Click the "Set Unpaid" button
            cy.get('.set-unpaid').click();
            cy.visit ('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')
        });

        // Verify that the invoice status has been changed to "unpaid"
        cy.get('.invoice-item[data-id="123"] .invoice-status').should('have.text', 'Unpaid');

        // Alternatively, if there's a confirmation message
        cy.contains('Invoice status set to unpaid').should('be.visible');
    });
});


    })
})
})