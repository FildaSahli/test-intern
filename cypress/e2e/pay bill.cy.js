describe('Login Test', () => {
    it('should log in in successfully with correct credentias',()=>{
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

        // fill in the username and password fields
        cy.get('#Input_UsernameVal').type('angela.garcia');
        cy.get('#Input_PasswordVal').type('123456');

        // Click the submit button
    cy.get('.btn-primary').click();
    cy.url().should('include','https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard');

    describe('Pay Bill', () => {
        beforeEach(() => {
            // Visit the page where the bill is listed or the bill detail page
            cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices');
        });
    
        it('User can pay a bill', () => {
            // Locate and click on the link to navigate to the bill detail page
            cy.get('a[href="/ClaimPortal/InvoiceDetail?EnergyInvoiceId=307"]').click();
    
            // Verify that the bill detail page is loaded
            cy.url().should('include', '/ClaimPortal/InvoiceDetail?EnergyInvoiceId=307');
    
            // Optionally, verify the content or details of the bill if necessary
            // cy.contains('Bill Details').should('be.visible');
            // cy.contains('Total Amount: $100').should('be.visible');
    
            // Click on the button to pay the bill
            cy.contains('Pay Bill').click();
            cy.url().should('include','https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoicePayBill?EnergyInvoiceId=284');
    
            // Optionally, interact with payment input fields if necessary
            cy.get('#Input_HolderName').type('cecil.anderson');
            cy.get('#Input_CardNumber').type('1234567890123456');
            cy.get('#Input_ExpMonth').click(); // Click on the dropdown container
            cy.contains('.dropdown-content', 'January').click(); // Replace 'January' with the desired month

            // Selecting expiration year
            cy.get('#Input_ExpYear').click(); // Click on the dropdown container
            cy.contains('.dropdown-content', '2023').click(); // Replace '2023' with the desired year
            cy.get('#Input_CVV').type('123'); // Typing '123' as the CVV
            cy.get('#Input_Amount').type('100');
    
            // Click on the button to confirm the payment
            cy.contains('Confirm Payment').click();
    
            // Verify that the payment is successful
            cy.contains('Payment Successful').should('be.visible');
    
            // Optionally, verify the updated status of the bill if necessary
            // cy.contains('Status: Paid').should('be.visible');
        });
    });
    


    })
})