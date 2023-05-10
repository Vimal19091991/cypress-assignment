import picker from "../pageObjectModel/datePicker"
import url from "../../fixtures/pageUrl.json"


describe('Date Picker',()=>{
    beforeEach(()=>{
        cy.on('uncaught:exception',()=>{
            return false
        })
    })
    it('verify datepicker',()=>{
        // visit site
       cy.visit(url.datePickerUrl) 
        // Select the date picker element
        picker.getCalender().should('be.visible').click().type('{selectAll}{del}07/05/2023')
        // select month from calender
        picker.getCalenderMonthDD().select('September')
      // select year from calender
        picker.getCalenderYearDD().select('2016')
        // select date from calender
        picker.getCalenderDate().click()
        // assertion
        // picker.getCalender().should('have.text','09/22/2016')
    })
})