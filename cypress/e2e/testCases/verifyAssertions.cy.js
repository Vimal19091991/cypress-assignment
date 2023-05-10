import url from "../../fixtures/pageUrl.json"
import assertions from "../pageObjectModel/assertion"
import cred from "../../fixtures/assertionsData.json"





describe('implicit assertions ',()=>{
    it('apply implicit assertions',()=>{
        // open URL
        cy.visit(url.assertionsUrls)
        // get username field and enter value with assertions
        assertions.getUsernameField().should('be.visible').and('be.enabled').type(cred.username)
         // get password field and enter value with assertions
         assertions.getPasswordField().should('be.visible').and('be.enabled').type(cred.password)
          // get login button and enter value with assertions
        assertions.getSubmitButton().should('be.visible').and('contain','Login').click()
        // get title 
        cy.title().should('eq','OrangeHRM')
        // check length
        assertions.getElementFromMenu().should('have.length',11).and('be.visible')
        //click on admin option
        assertions.getElementFromMenu().each((item)=>{
            if(item.text().includes("Admin")){
                cy.wrap(item).click()
            }
              // asssertion on checkbox
        cy.wait(5000)
        assertions.getCheckBox().check( {force: true}).should('be.checked')
        })
    
    })
    it.only('explicit assertions',()=>{
        cy.visit(url.assertionsUrls)
        let expname='Login'
        assertions.getSubmitButton().then((x)=>{
            let actname=x.text()
            expect(actname).to.contain('Login')
        })

    })
})