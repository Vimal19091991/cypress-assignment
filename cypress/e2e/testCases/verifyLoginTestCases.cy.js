import loginPage from "../PageObjectModel/locator"
import credentials from "../../fixtures/data.json"
import errormsg from "../../fixtures/errorTestData.json"

describe('login functionality',()=>{
    beforeEach(()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
    })
    

    it('valid username and valid password',()=>{
        
        // enter valid username
        loginPage.getUsernameField2().should('be.visible').and('be.enabled').type(credentials.validusername)
        //enter valid password
        loginPage.getPasswordField2().should('be.visible').and('be.enabled').type(credentials.validpassword)
        //click to login button
        loginPage.getLoginButton2().should('be.visible').and('contain','Submit').click()
    })
    it.only('invalid username and invalid password',()=>{
        
        //enter invalid username
        loginPage.getUsernameField2().should('be.visible').type(credentials.invalidusername)
        // enter invalid password
        loginPage.getPasswordField2().should('be.visible').type(credentials.invalidpassword)
        // click onto submit button
        loginPage.getLoginButton2().should('be.visible').and('contain.text','Submit').click()
         // error message
        //  loginPage.getErrorMessage().should('have.text',errormsg.validate_text_username)
    })
    it('invalid username and valid password',()=>{
        
        //enter invalid username
        loginPage.getUsernameField2().should('be.visible').and('be.enabled').type(credentials.invalidUsername)
        // enter valid password
        loginPage.getPasswordField2().should('be.visible').and('be.enabled').type(credentials.validPassword)
        // click onto submit button
        loginPage.getLoginButton2().should('be.visible').and('contain.text','Login').click()
        // error message
        loginPage.getErrorMessage().should('be.visible').and('have.text',errormsg.validate_text_username)
    })
    it('invalid Credentials (valid username and invalid password)',()=>{
        
        //enter valid username
        loginPage.getUsernameField2().should('be.visible').and('be.enabled').type(credentials.validUsername)
        // enter invalid password
        loginPage.getPasswordField2().should('be.visible').and('be.enabled').type(credentials.invalidPassword)
        // click onto submit button
        loginPage.getLoginButton2().should('be.visible').and('contain.text','Login').click()
        // error message
        loginPage.getErrorMessage().should('be.visible').and('have.text',errormsg.validate_text_password)
    })


    it('invalid Credentials (without username and without password)',()=>{
        // click onto submit button
        loginPage.getLoginButton2().should('be.visible').and('contain.text','Login').click()
          
        // error message for Password field
        loginPage.getErrorMessageForUN2().should('be.visible').and('have.text',errormsg.validate_text_username)

    })
    it('Login with (valid username and without password)',()=>{
        
        // valid username
        loginPage.getUsernameField2().should('be.visible').and('be.enabled').type(credentials.validUsername)
        // click onto submit button
        loginPage.getLoginButton2().should('be.visible').and('contain.text','Login').click()
        // error message for Password field
        loginPage.getErrorMessageForUN2().should('be.visible').and('have.text',errormsg.validate_text_username)

    })
    it('Login with (without username and valid password)',()=>{
        //  valid password
        loginPage.getPasswordField2().should('be.visible').and('be.enabled').type(credentials.validPassword)
        // click onto submit button
        loginPage.getLoginButton2().should('be.visible').and('contain.text','Submit').click()
        // error message for username field
        loginPage.getErrorMessageForUN2().should('be.visible').and('have.text',errormsg.validate_text_username)

    })
    it('Login with (invalid username and without password)',()=>{
        
        // valid username
        loginPage.getUsernameButton().should('be.visible').and('be.enabled').type(credentials.invalidUsername)
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // error message for Password field
        loginPage.getErrormessageFields().last().should('be.visible').and('have.text',errormsg.validate_text_username)

    })
    it('Login with (without username and invalid password)',()=>{
        //  valid password
        loginPage.getPasswordButton().should('be.visible').and('be.enabled').type(credentials.invalidPassword)
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // error message for username field
        loginPage.getErrormessageFields().first().should('be.visible').and('have.text',errormsg.validate_text_username)

    })


})
