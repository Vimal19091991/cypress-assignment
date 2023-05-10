import loginPage from "../PageObjectModel/locator"
import cred from "../../fixtures/example.json"
import data from "../../fixtures/testData.json"
import credentials from "../../fixtures/data.json"




describe('login Functionality',()=>{
    beforeEach(()=>
     { 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     })

    it('valid Credentials',()=>{
        
        //enter valid username
        loginPage.getUsernameButton().should('be.visible').and('be.enabled').type(cred.validUsername)
        // enter valid password
        loginPage.getPasswordButton().should('be.visible').and('be.enabled').type(cred.validPassword)
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // check tittle after login
        cy.title().should('eq','OrangeHRM')

    })
    it('invalid Credentials (invalid username and invalid password)',()=>{
        
        //enter invalid username
        loginPage.getUsernameButton().should('be.visible').and('be.enabled').type(cred.invalidUsername)
        // enter invalid password
        loginPage.getPasswordButton().should('be.visible').and('be.enabled').type(cred.invalidPassword)
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // error message
        loginPage.getErrorMessage().should('be.visible').and('have.text','Invalid credentials')
    })
    it('invalid Credentials (invalid username and valid password)',()=>{
        
        //enter invalid username
        loginPage.getUsernameButton().should('be.visible').and('be.enabled').type(cred.invalidUsername)
        // enter valid password
        loginPage.getPasswordButton().should('be.visible').and('be.enabled').type(cred.validPassword)
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // error message
        loginPage.getErrorMessage().should('be.visible').and('have.text','Invalid credentials')
    })
    it('invalid Credentials (valid username and invalid password)',()=>{
        
        //enter valid username
        loginPage.getUsernameButton().should('be.visible').and('be.enabled').type(cred.validUsername)
        // enter invalid password
        loginPage.getPasswordButton().should('be.visible').and('be.enabled').type(cred.invalidPassword)
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // error message
        loginPage.getErrorMessage().should('be.visible').and('have.text','Invalid credentials')
    })


    it('invalid Credentials (without username and without password)',()=>{
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // error message for username field
        loginPage.getErrormessageFields().first().should('be.visible').and('have.text',data.validate_text)
        // error message for Password field
        loginPage.getErrormessageFields().last().should('be.visible').and('have.text',data.validate_text)

    })
    it('Login with (valid username and without password)',()=>{
        
        // valid username
        loginPage.getUsernameButton().should('be.visible').and('be.enabled').type(cred.validUsername)
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // error message for Password field
        loginPage.getErrormessageFields().last().should('be.visible').and('have.text',data.validate_text)

    })
    it('Login with (without username and valid password)',()=>{
        //  valid password
        loginPage.getPasswordButton().should('be.visible').and('be.enabled').type(cred.validPassword)
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // error message for username field
        loginPage.getErrormessageFields().first().should('be.visible').and('have.text',data.validate_text)

    })
    it('Login with (invalid username and without password)',()=>{
        
        // valid username
        loginPage.getUsernameButton().should('be.visible').and('be.enabled').type(cred.invalidUsername)
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // error message for Password field
        loginPage.getErrormessageFields().last().should('be.visible').and('have.text',data.validate_text)

    })
    it('Login with (without username and invalid password)',()=>{
        //  valid password
        loginPage.getPasswordButton().should('be.visible').and('be.enabled').type(cred.invalidPassword)
        // click onto submit button
        loginPage.getSubmitButton().should('be.visible').and('contain.text','Login').click()
        // error message for username field
        loginPage.getErrormessageFields().first().should('be.visible').and('have.text',data.validate_text)

    })

    // it("login with valid username and valid password",()=>{
    //     cy.visit("https://practicetestautomation.com/practice-test-login/")
    //     // enter valid username
    //     loginPage.getUsernameField2().should('be.visible').and('be.enabled').type(credentials.validusername)
    //     //enter valid password
    //     loginPage.getPasswordField2().should('be.visible').and('be.enabled').type(credentials.validpassword)
    //     //click to login button
    //     loginPage.getLoginButton2().should('be.visible').and('contain','Submit').click()
    // })
    
})