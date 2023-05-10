
class Checkbox{
    getcheckbox()
    {
        return cy.get('[id="tree-node-home"]')
    }
    getParentMenu()
    {
        return cy.get('[class="oxd-main-menu"]')
    }
    
}
const box=new Checkbox()
export default box