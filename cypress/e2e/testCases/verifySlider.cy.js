
import url from "../../fixtures/pageUrl.json"
import slider from "../pageObjectModel/slider"


describe('Slider in Cypress',()=>{
    // Hook method executes before each block
    beforeEach(()=>{
        cy.on('uncaught:exception',()=>{
            return false
        })
      // visit the site
        cy.visit(url.sliderUrl)
    })
    it('validate slider in cypress-1',()=>{
        // Using invoke() to set and get the slider value
        slider.getSlider().invoke('val',60).trigger('input')
        // assert the set value
        slider.getSlider().invoke('val').should('equal', '60')
    })
    
    // it('validate slider in cypress-2',()=>{
    //     //  Using type() to set the slider value
    //     slider.getSlider().type('50').trigger('input')
    //      // assert the set value
    //     slider.getSlider().should('have.value', '50')

    // })
    it('validate slider in cypress-3',()=>{
        // Move the slider thumb to the right by 50%
        slider.getSlider().invoke('val', 50).trigger('change')
        // Get the slider value and assert that it's equal to 50
        slider.getSlider().invoke('val').should('equal', '50')

    })
    it('validate slider in cypress-4',()=>{
        // Move the slider thumb to the left by 25%
        slider.getSlider().scrollTo('left').scrollTo(-25)
        // Get the slider value and assert that it's equal to 25
        slider.getSlider().invoke('val').should('equal', '25')
    })
    // it.only('validate slider in cypress-5',()=>{
    //     // Move the slider thumb to the left by 25%
    //     slider.getSlider().trigger('mousedown',55).trigger('mousemove').trigger('mouseup')
    //     // Get the slider value and assert that it's equal to 25
    //     slider.getSlider().invoke('val').should('equal', '55')
    // })

    
        
    })