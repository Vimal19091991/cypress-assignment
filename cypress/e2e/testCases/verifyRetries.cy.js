describe('Test case for retries in cypress',()=>{
    beforeEach(()=>{
        cy.on('uncaught:exception',()=>{
            return false
        })
    })
    it('retries',{
        retreis:{
            openmode:1,
        },
    },()=>{
        
        cy.visit("https://demoqa.com/buttons")

    })
})