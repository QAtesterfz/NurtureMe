class DashboardPage{

    CreateNewCampaign(title,description)
    {
        cy.get('.btn-blue').should('be.visible').should('contain.text','Create New Campaign').click()

        cy.get('.modal-header > h2').should('be.visible').should('contain.text','Create Campaign')

        cy.get(':nth-child(1) > .campaign-field-label').should('be.visible').should('contain.text','Campaign Title')

        cy.get('#campaign-template-title').should('be.visible').clear().type(title)

        cy.get('#campaign-template-prompt').should('be.visible').clear().type(description)

        //save
        cy.get('#campaign-template-save-btn').should('be.visible').should('contain.text','Save & Continue').click()

        //message validation
        cy.get('.toast-message').should('be.visible').should('contain.text','Campaign saved successfully!')


    }
}
export default DashboardPage;