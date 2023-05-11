import url from "../../fixtures/pageUrl.json"
import webtables from "../pageObjectModel/webTable"



describe('verify web tables',()=>{
    beforeEach(()=>{
        cy.on('uncaught:exception',()=>{
            return false
        })
    })
    it('web tables',()=>{
        // visit website
        cy.visit(url.webTablesUrl)
          // get table
        webtables.getTable().each(($el ,index,$list)=>{
            // text captured from column
            const t=$el.text()
            if(t.includes('Michael')){
                webtables.getTable().eq(index).next().then((d)=>{
                    const r =d.text()
                    expect(r).to.contains('Doe')
                })

            }

        })
        })
    
})