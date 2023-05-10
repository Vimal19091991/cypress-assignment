class Screenshot{
    getLogo()
    {
        return cy.get('[src="/images/Toolsqa.jpg"]')
    }
}
const shot=new Screenshot()
export default shot