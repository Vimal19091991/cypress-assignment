describe('API',()=>{
    it('Get API',()=>{
        // API testing for  GET method
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        })
        .then((res)=>{
            expect(res.status).to.equal(200)
            
        })
    })
    // API testing for POST method
    it('Post API',()=>{
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        })
        .then((res)=>{
            expect(res.status).to.equal(201)
            
        })
    })
    it('Put API',()=>{
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                "name": "morpheus",
                "job": "doctor"
            }
        })
        .then((res)=>{
            expect(res.status).to.equal(200)
            
        })
    })
    it('Patch API',()=>{
        cy.request({
            method:'PATCH',
            url:'https://reqres.in/api/users/2',
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        })
        .then((res)=>{
            expect(res.status).to.equal(200)
            
        })
    })
    it.only('Delete API',()=>{
        cy.request({
            method:'DELETE',
            url:'https://reqres.in/api/users/2',
        })
        .then((res)=>{
            expect(res.status).to.equal(204)
            
        })
    })
})