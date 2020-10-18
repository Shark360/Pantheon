describe ("SearchBarWeird",() => {
    it("Checks For Gibberish",() => {
        cy.visit('https://docs.cypress.io')

        cy.get(".ds-input")
            .type("¯\\_(ツ)_/¯ ")
    })
})