import url from "../../fixtures/pageUrl.json"



describe('cross-Origin',()=>{
    it('verify Cross Origin',()=>{
        cy.on('uncaught:exception',()=>{
            return false
        })
        cy.visit(url.originUrl)
        cy.visit(url.origin1Url)
        cy.origin(url.origin1Url,()=>{
            
        })
    })
})