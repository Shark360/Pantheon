describe ("RESTFULDelete",() => {
    it("Basic REST Delete command",() => {
        cy
            .request("DELETE", "https://localhost:8888/user/123456")
            expect(response.status).to.eq(200)

    })

})