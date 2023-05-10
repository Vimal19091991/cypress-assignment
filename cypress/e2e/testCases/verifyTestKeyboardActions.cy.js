import action from "../pageObjectModel/keyboardActions";
import url from "../../fixtures/pageUrl.json"


describe('Perform Keyboard Action',()=>{
    beforeEach(()=>{
        cy.visit(url.keyboardActionUrl)
    })
    it('Keyboard Actions',()=>{
        // perform  backspace
        action.getUsernameField().type('Admin{backspace}')
        cy.wait(2000)
        // perform  selectall
        action.getUsernameField().type('{selectAll}')
        cy.wait(2000)
        // perform  delete
        action.getUsernameField().type('{del}')
        cy.wait(2000)
        // perform  movetostart
        action.getUsernameField().type('Admin{moveToStart}{del}')
        cy.wait(2000)
        // selectall and delete
        action.getUsernameField().type('{selectAll}{del}')
        // login with valid credentials
        action.getUsernameField().type('Admin')
        action.getPasswordField().type('admin123')
        action.getSubmitButton().click()
        // perform  pagedown
        cy.wait(2000)
        action.getLastElement().first().type('{pageDown}')
        
    })
    it.only('using shift key',()=>{
        action.getUsernameField().click().type('{shift}cypress', {release:false})
        // action.getUsernameField().click().type('{ctrl+A}{release: false}')



    })
})