import url from "../../fixtures/pageUrl.json"
import option from "../pageObjectModel/dynamicDropDown"

describe('dynamic drop down',()=>{
    it('validate dynamic dropdown',()=>{
        // visit site
        cy.visit(url.dynamicDropDownUrl)
        // enter value to be search
        option.getSearchInputField().type('mobile')
          // wait for some time
        cy.wait(3000);
       // iterate through the suggested options
       option.getSearchInputField().each(($el, index, $list) => {
        // condition matching check
        if($el.text() =="mobile"){
           // click() on that option for selection
          cy.wrap($el).click();
        }
     })
        // assertion to check if correct option is selected
        option.getSearchInputField().should("have.value","mobile");

    })

    
     


})