class Text{

    getTextLoc(){
        return cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
    }
    getTextLocGmail()
    {
        return cy.get('h1#headingText')
    }

}
const text=new Text()
export default text;