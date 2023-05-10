import url from "../../fixtures/pageUrl.json"
import nav from "../pageObjectModel/navigation"

describe('test for navigation',()=>{
    it('validate Navigation',()=>{
        // get website
        cy.visit(url.navigationUrl)
        cy.on('uncaught:exception',()=>{
            return false
        })
        // click on any element
        cy.wait(3000)
        nav.getClickElement().first().click()
        cy.wait(3000)
        // go back to home page
        cy.go('back')
        cy.wait(3000)
        // again move to next page
        cy.go('forward')
        // refresh page
        cy.reload()



    })
})