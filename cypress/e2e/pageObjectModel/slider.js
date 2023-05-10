class Slider{
    getSlider()
    {
        return cy.get('[type="range"]')
    }
    getSliderValue()
    {
        return cy.get('[id="sliderValue"]')
    }

}
const slider=new Slider()
export default slider