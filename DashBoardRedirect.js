describe ("DashBoardRedirect",() => {
    it("Checks For Proper Dashboard Behavior",() => {
        cy.visit('https://docs.cypress.io')

        cy.contains("Dashboard").click()
        cy.get('[data-target="sidebar-li-dashboard"] > .sidebar-links > :nth-child(1) > .sidebar-link').click()

        cy.url().should("include","dashboard/introduction")


    })
})