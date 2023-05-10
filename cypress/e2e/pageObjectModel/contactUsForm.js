class Contact{
    getContactLink(){
        return cy.get('[class="section-title"]')
    }
    getFieldFirstName()
    {
        return cy.get('[name="first_name"]')
    }
    getFieldLastName()
    {
        return cy.get('[name="last_name"]')
    }
    getFieldEmail()
    {
        return cy.get('[name="email"]')
    }
    getFieldComment()
    {
        return cy.get('[name="message"]')
    }
    getButtonSubmit()
    {
        return cy.get('[type="submit"]')
    }
    getButtonReset()
    {
        return cy.get('[type="reset"]')
    }
    getSuccessfullMsg()
    {
        return cy.get('[id="contact_reply"] h1 ')
    }
}
const contact=new Contact()
export default contact