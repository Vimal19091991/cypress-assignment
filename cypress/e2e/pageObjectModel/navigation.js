class Nav{
    getClickElement()
    {
        return cy.get('[class="avatar mx-auto white"]')
    }
}
const nav = new Nav()
export default nav