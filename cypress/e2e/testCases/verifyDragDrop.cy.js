import drdp from "../pageObjectModel/dragDrop";
import url from "../../fixtures/pageUrl.json"

describe('drag and drop',()=>{
    it('verify drag N drop',()=>{
        // visit website
        cy.visit(url.dragDropUrl)
        // get drag element
        drdp.getDraggble().trigger('mousedown',{which:1})
        // get drop element
        cy.wait(3000)
        drdp.getDropable().trigger('mouseup').trigger('mousemove')
        // drag and drop
        
        
    })
})