import text from "../pageObjectModel/textVerification"
import url from "../../fixtures/pageUrl.json"

describe('text Verification',()=>{
    it('Verify Text',()=>{
        cy.visit(url.textVerificationOrangeHRMUrl)
        // text verification
        text.getTextLoc().should('have.text','Login')
    })
    
         // it function to identify test
         it('text Verification Scenario 2', function (){
            // test step to launch a URL
            cy.visit(url.textVerificationUrl)
            // identify element
            text.getTextLocGmail().then((e)=>{
               //method text to obtain text content
               const t = e.text()
               expect(t).to.contains('Sign')
            })
 })
})