class Dropdown{
getDrpDwnMenu()
{
    return cy.get('[class="dropdown-menu-lists"]')
}
}
const drpdwn=new Dropdown()
export default drpdwn