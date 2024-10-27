describe('DELETE /posts/1', () => {
    it('should delete an existing post', () => {
      cy.apiRequest({ method: 'DELETE', url: '/posts/1' }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })
  