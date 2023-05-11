class Flipkart
{
    getSearchField()
    {
    return cy.get('[class="_3704LK"]')
    }
    getSearchButton()
    {
    return cy.get('[class="L0Z3Pu"]')
    }
    getPriceDropDown()
    {
    return cy.get('[class="_2YxCDZ"]')
    }
    getBrandName()
    {
     return cy.get('[type="checkbox"]')
    
    }
    getFirstResultText()
    {
    return cy.get('[class="_4rR01T"]')
    }
    getFirstResultPrice()
    {
    return cy.get('[class="_30jeq3 _1_WHN1"]')
    }
    


}
const fk=new Flipkart
export default fk