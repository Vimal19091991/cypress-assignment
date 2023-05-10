class Webtables{

    getTable()
    {
        cy.get('[id="t01"]>tbody>tr>td:nth-child(1)')
    }

}const webtables=new Webtables()
export default webtables