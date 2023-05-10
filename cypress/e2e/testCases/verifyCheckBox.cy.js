import box from "../pageObjectModel/checkBox"
import url from "../../fixtures/pageUrl.json"
import cred from "../../fixtures/customCommandData.json"


describe('Test for Check Box functionality',()=>{
    it('verify check box',()=>{
        // get url
        cy.visit(url.checkBoxUrl)
        cy.on('uncaught:exception',()=>{
            return false
        })
        // get check box element
        box.getcheckbox().check({force:true}).should('be.checked')
    })
})
        
    