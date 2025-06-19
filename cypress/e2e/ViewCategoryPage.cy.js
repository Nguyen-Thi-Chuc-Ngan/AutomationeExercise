/// <reference types="cypress" />
describe('Test Case 18: View Category Products', () => {

    it('View Category Page', () => {
        cy.visitHomePage();

        cy.get('.left-sidebar .panel-group').should('be.visible');
           
        cy.contains('Women').click();
        cy.contains('Dress').click();
        cy.get('.features_items h2').should('contain', 'Women - Dress Products');
        

        cy.contains('Men').click();
        cy.contains('Tshirts').click();

        cy.get('.features_items h2').should('be.visible').and('contain.text', 'Men - Tshirts Products');
    });    

});