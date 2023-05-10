import cred from "../../fixtures/customCommandData.json"
import url from "../../fixtures/pageUrl.json"



describe('login with ustom Command',()=>{
    it('login functionality',()=>{
        cy.visit(url.customCommandUrl)
        cy.login(cred.username,cred.password)
    })
})