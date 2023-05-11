import fk from "../pageObjectModel/flipkart"
import data from "../../fixtures/dataFlipkart.json"

describe('Test Suite For Flipkart',()=>{
    it('validate test suite',()=>{
        // visit website
        cy.visit('https://www.flipkart.com/')
        // get searchfield and enter to be searched value
        fk.getSearchField().type(data.searchFieldData).should('be.visible')
        // enter for value
        fk.getSearchButton().click()
        // assert for title
        cy.title().should('include',data.titleValue)
        // select price from drop down
        fk.getPriceDropDown().last().select(data.mobilePrice).should('be.visible')
        // select brand
        fk.getBrandName().eq(3).check({force:true})
        // asssert first result text 
        fk.getFirstResultText().first().should('have.text',data.firstResult)
        // assert price
        fk.getFirstResultPrice().first().should('have.text',data.firstResultPrice)
    })
})