

describe('GET /posts', () => {
    it('should retrieve all posts', () => {
        cy.apiRequest({ method: 'GET', url: 'https://jsonplaceholder.typicode.com' }).then((response) => {
        expect(response.status).to.eq(200)
        //expect(response.body).to.be.an('array')
        expect(response.body.length).to.be.greaterThan(0)
      })
    })
  })
  