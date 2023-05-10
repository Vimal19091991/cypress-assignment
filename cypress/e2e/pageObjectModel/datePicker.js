class Datepicker{
    getCalender()
    {
        return cy.get('[id="datePickerMonthYearInput"]')
    }
    getCalenderMonthDD()
    {
        return cy.get('[class="react-datepicker__month-select"]')
    }
    getCalenderYearDD()
    {
        return cy.get('[class="react-datepicker__year-select"]')
    }
    getCalenderDate()
    {
        return cy.get('[class="react-datepicker__day react-datepicker__day--022"]')
    }
}
const picker=new Datepicker()
export default picker