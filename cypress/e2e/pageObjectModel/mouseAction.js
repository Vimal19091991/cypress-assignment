class Mouseactionpage{

    getMoreDropdown()
    {
        return cy.get('[class="exehdJ"]')
    }
    getViewAll()
    {
        return cy.get('[class="_1YokD2 _2GoDe3"]>div>div>div[class="_2JQgSY"]>div>div[class="_30kJiF"]>[class="_2KpZ6l _3dESVI"]')
    }
    getLogin()
    {
        return cy.get('[class="_1_3w1N"]')
    }
    getDoubleClickButton()
    {
        return cy.get('[id="doubleClickBtn"]')
    }

    // locators for DEMOQA===============================================>>>>>>>>>>>>>>>>>>>>>>>>>>>

    
    getDoubleClickButtonUrl2()
    {
        return cy.get('[id="doubleClickBtn"]')
    }
    getValidatedMsgDblClk()
    {
        return cy.get('[id="doubleClickMessage"]')
    }

}
const action=new Mouseactionpage()
export default action
