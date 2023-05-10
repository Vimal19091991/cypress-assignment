import contact from "../pageObjectModel/contactUsForm"
import cred from "../../fixtures/formData.json"

describe('contact us form',()=>{
    beforeEach(()=>{
        // cy.visit("https://webdriveruniversity.com/")
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })
   it ('successfully submit the form with valid data',()=>{
        // contact.getContactLink().first().invoke('removeAttr','target').click()
        // enter valid first name
        contact.getFieldFirstName().should('be.enabled').and('be.visible').type(cred.firsrName)
          // enter valid last name
          contact.getFieldLastName().should('be.enabled').and('be.visible').type(cred.lastName)
          //enter valid email
          contact.getFieldEmail().should('be.enabled').and('be.visible').type(cred.email)
        //  enter comments
          contact.getFieldComment().should('be.enabled').and('be.visible').type(cred.comments)
              //click to submit button
          contact.getButtonSubmit().should('be.visible').and('contain','SUBMIT').click()
        //   assert success message
        contact.getSuccessfullMsg().should('contain.text','Thank You for your Message!')

    })
    it('Reset the all the  fields',()=>{
        
        // enter valid first name
        contact.getFieldFirstName().should('be.enabled').and('be.visible').type(cred.firsrName)
          // enter valid last name
          contact.getFieldLastName().should('be.enabled').and('be.visible').type(cred.lastName)
          //enter valid email
          contact.getFieldEmail().should('be.enabled').and('be.visible').type(cred.email)
        //  enter comments
          contact.getFieldComment().should('be.enabled').and('be.visible').type(cred.comments)
              //click to reset button
          contact.getButtonReset().should('be.visible').click()
     
    })
    it.only('submit with invalid data',()=>{
        // contact.getContactLink().first().invoke('removeAttr','target').click()
        // enter valid first name
        contact.getFieldFirstName().should('be.enabled').and('be.visible').type(cred.invalidFirsrName)
          // enter valid last name
          contact.getFieldLastName().should('be.enabled').and('be.visible').type(cred.invalidLastName)
          //enter valid email
          contact.getFieldEmail().should('be.enabled').and('be.visible').type(cred.invalidEmail)
        //  comments field is empty
              //click to submit button
          contact.getButtonSubmit().should('be.visible').and('contain','SUBMIT').click()
    })

})