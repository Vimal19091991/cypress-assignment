class KeyboardActions{
    getUsernameField()
    {
        return cy.get('[placeholder="Username"]')
    }
    getPasswordField()
    {
        return cy.get('[name="password"]')
    }
    getSubmitButton()
    {
        return cy.get('[type="submit"]')
    }
    getLastElement()
    {
        return cy.get('[class="oxd-text oxd-text--p orangehrm-copyright"]')
    }
}
    const action=new KeyboardActions()
    export default action
