class Assertions{
getUsernameField()
{
    return cy.get('[placeholder="Username"]')
}
getPasswordField()
{
    return cy.get('[name="password"]')
}
getSubmitButton()
{
    return cy.get('[type="submit"]')
}
getElementFromMenu()
{
    return cy.get('[class="oxd-main-menu"] li>a>span')
}
getCheckBox()
{
    return cy.get('[class="oxd-table-header"]>div>div:nth-child(1) input')
}

}
const assertions=new Assertions()
export default assertions