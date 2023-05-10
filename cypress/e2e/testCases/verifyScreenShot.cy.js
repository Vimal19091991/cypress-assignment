import url from "../../fixtures/pageUrl.json"
import cred from "../../fixtures/customCommandData.json"
import shot from "../pageObjectModel/screenShot"



describe('Test for Screenshots and videos',()=>{
    it('screenshot',()=>{
        cy.on('uncaught:exception',()=>{
            return false
        })
        // visit site
        cy.visit(url.datePickerUrl)
        // take screen shot with filename
        cy.screenshot('calenderpageof-demoqa')
        // get screenshot of a logo
        shot.getLogo().screenshot('logo')

    })
    it.only('videos',()=>{
        // visit site
        cy.visit(url.keyboardActionUrl)
        // get login using cutom command
        cy.login(cred.username,cred.password)
        
    })
})