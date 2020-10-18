describe ("SearchBarValidResponse",() => {
    it("Checks For Valid Results",() => {
        cy.visit('https://docs.cypress.io')

        cy.get(".ds-input")
            .type("About")
            .should("have.value", "About")
    })
})