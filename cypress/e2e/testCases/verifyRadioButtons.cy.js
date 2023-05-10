import btn from "../pageObjectModel/radioButton"
import url from "../../fixtures/pageUrl.json"

describe('check radio Button functionality',()=>{
    it('verify radio button',()=>{
        cy.on('uncaught:exception',()=>{
            return false
        })
        // visit site
        cy.visit(url.radioButtonUrl)
        // select radio button 
        btn.getRadioBtn().first().should('be.visible').click()
        // assert 
        btn.getPassMsg().should('have.text','You have selected Yes')
        // select radio button 
        btn.getRadioBtn().last().should('be.visible').click()
         // assert 
         btn.getPassMsg().should('have.text','You have selected Impressive')
    })
})