class Iframe{
    getIframe()
    {
        return cy.get('[id="frame"]')
    }
    getOurProductLink()
    {
        return cy.get('[href="products.html"]')
    }

}
const iframe= new Iframe()
export default iframe