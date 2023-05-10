class Radiobutton{
    getRadioBtn()
    {
        return cy.get('[class="custom-control-label"]')
    }
    getPassMsg()
    {
        return cy.get('[class="mt-3"]')
    }
    
}
const btn=new Radiobutton()
export default btn