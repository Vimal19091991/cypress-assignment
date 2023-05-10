class DynamicDD{
    getSearchInputField()
    {
        return cy.get('[class="_3704LK"]')
    }
    getMyntraSearchField()
    {
        return cy.get('placeholder="Search for products, brands and more"')
    }
}
const option=new DynamicDD()
export default option