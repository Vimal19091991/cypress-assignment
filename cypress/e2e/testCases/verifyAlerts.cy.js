

import alert from "../pageObjectModel/alertsLocator"
import url from "../../fixtures/pageUrl.json"


describe('Handle Alerts ',()=> {
    beforeEach(()=>{
        cy.on('uncaught:exception',()=>
        {
            return true
        })
    })
       // test case 1
       it('Alert OK',()=>{
       // launch url
       cy.visit(url.demoqaUrlAlerts);
       // click the buton
       alert.getAlertOkButton().click();
       // fire event with method on
       cy.on('window:alert',(t)=>{
      //assertions to check text
       expect(t).to.contains('You clicked a button');
       })
    });

       // test case 2
      it('Alert OK and Cancel(taking cancel option)',()=>{
        // launch url
        cy.visit(url.demoqaUrlAlerts);
        // click the button
        alert.getAlertOkandCancelButton().click();
      // click on Cancel option
      cy.on('window:confirm',(t)=>{
          expect(t).to.contains('Do you confirm action?')
          return false
 })
          // valide text after cancel
         alert.getResultOK().should('have.text','You selected Cancel')
 })

       // test case 3
       it('Alert prompt',()=>{
      // launch url
       cy.visit(url.demoqaUrlAlerts);
      // fire event before opening window
      cy.window().then((win)=>{
      cy.stub(win,'prompt').returns('welcome')
        alert.getAlertPromptButton().click()
   })
  //  validate text after entering text in text field
   alert.getResultForPrompt().should('be.visible').and('have.text','You entered welcome')
});
 
})


