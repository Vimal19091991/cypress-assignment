class Locator{

      //Locators for ALERTS for  URL: DEMOQA
      getAlertOkButton()
      {
          return cy.get('[id="alertButton"]')
      }
      getAlertOkandCancelButton()
      {
          return cy.get(' [id="confirmButton"]')
      }
      getAlertPromptButton()
      {
          return cy.get('[id="promtButton"]')
      }
      getResultOK()
      {
          return cy.get('[id="confirmResult"]')
      }
      getResultForPrompt()
      {
          return cy.get('[id="promptResult"]')
      }
  
}
const alerts=new Locator()
export default alerts