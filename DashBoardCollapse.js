describe ("DashBoardRedirect",() => {
    it("Checks For Proper Dashboard Behavior",() => {
        cy.visit('https://docs.cypress.io')

        cy.contains("Dashboard").dblclick()

    })
})