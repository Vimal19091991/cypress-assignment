import drpdwn from "../pageObjectModel/dropDown";
import url from "../../fixtures/pageUrl.json"


describe('test cases for DropDown',()=>{
    it('verify drop down',()=>{
        // get website
        cy.visit(url.dropDownUrl)
        // get dropdown and select value
        drpdwn.getDrpDwnMenu().first().select(1).should('be.visible')
    })
    it('verify drop down2',()=>{
        // get website
        cy.visit(url.dropDownUrl)
        // get dropdown and select value
        drpdwn.getDrpDwnMenu().first().select(2).should('be.visible')
    })
    it('verify drop down3',()=>{
        // get website
        cy.visit(url.dropDownUrl)
        // get dropdown and select value
        drpdwn.getDrpDwnMenu().first().select(3).should('be.visible')
    })
})