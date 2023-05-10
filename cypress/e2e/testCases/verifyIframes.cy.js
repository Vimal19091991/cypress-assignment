
import iframe from "../pageObjectModel/iframes"
import 'cypress-iframe'
// import url from "../../fixtures/pageUrl.json"


describe('Test Cases for Iframes',()=>{
    beforeEach(()=>{
        cy.on('uncaught:exception',()=>{
            return false
        })
    })
   
    it('handling iframe',()=>{
        cy.visit("https://webdriveruniversity.com/IFrame/index.html")
        cy.frameLoaded(iframe.getIframe())
        cy.iframe().find('[href="products.html"]').should('have.text','Our Products')
       
        // iframe.getLocatorInsideIframe().should('be.visible').and('contain','Our')
         //Frame Load
        //  cy.frameLoaded(iframe.getIframe1Locator)

    })

})