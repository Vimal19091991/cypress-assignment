import url from "../../fixtures/pageUrl.json"
import action from "../pageObjectModel/mouseAction"
import url2 from"../../fixtures/pageUrl.json"

describe('mouse actions',()=>{
   
    it('mouse actions test1',()=>{
         // visit to website
         cy.visit(url.mouseActionsUrl)
        // hover on element
        action.getMoreDropdown().should('be.visible').trigger('mouseover')
        // right click on an element
        action.getViewAll().should('be.visible').rightclick()
        // cick on an element
        action.getLogin().click
    })
    it.only('mouse actions test2',()=>{
        // visit to website
        cy.visit(url.mouseActionUrl2)
       // double click on an element
         action.getDoubleClickButtonUrl2().should('be.visible').dblclick()
      //    validate for doubleclick
      action.getValidatedMsgDblClk().should('have.text','You have done a double click')
       

      
   })
   
})
