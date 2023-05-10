class dragDrop
{
    getDraggble()
    {
        return cy.get('[id="draggable"]')
    }
    getDropable()
    {
        return cy.get('[id="droppable"]')
    }


}
const drdp=new dragDrop()
export default drdp
