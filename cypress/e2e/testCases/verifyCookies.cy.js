describe('cookies',()=>{
    it('cookies-OrangeHRM',()=>{
        // get URL
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // set cookie
        cy.setCookie('name','orange')
        // to get a cookie
        cy.getCookie('name')
        //to clear cookie
        cy.clearCookie('name') 
    })

    it('cookies-DemoQA',()=>{
        // get URL
        cy.visit("https://demoqa.com/")
        // set cookie
        cy.setCookie('QA','demo')
        // to get a cookie
        cy.getCookie('QA')
        //to clear cookie
        // cy.clearCookie('QA') 
    })
    it('cookies-amazon',()=>{
        // get URL
        cy.visit("https://www.amazon.in/ref=nav_logo")
        // set cookie
        cy.setCookie('Name','Amazon')
        // to get a cookie
        cy.getCookie('Name')
        //to clear cookie
        // cy.clearCookie('QA') 
    })
})