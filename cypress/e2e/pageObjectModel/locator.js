class Login{

//locators for URL: OrangeHRM
    getUsernameButton(){
        return cy.get("[placeholder='Username']")
    }

    getPasswordButton(){
        return cy.get("[placeholder='Password']")
    }

    getSubmitButton(){
        return cy.get("[type='submit']")
    }
    getErrorMessage(){
        return cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
    }
    getErrormessageFields(){
        return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
    }

    // Locators for URL:practicetestautomation
    getUsernameField2(){
        return cy.get('[name="username"]')
    }
    getPasswordField2(){
        return cy.get('[name="password"]')
    }
    getLoginButton2(){
        return cy.get('[class="btn"]')
    }
    getErrorMessageForUN2(){
        return cy.get('[id="error"]')
    }
    getErrorMessageForPS2(){
        return cy.get('[class="show"]')
    }
    // locator for checkboxes for URL:OrangeHRM 
    getcheckbox()
    {
    return cy.get('[class="oxd-icon bi-check oxd-checkbox-input-icon"]')
    }
   
}
const loginPage= new Login()
export default loginPage