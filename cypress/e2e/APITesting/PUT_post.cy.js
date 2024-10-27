describe('PUT /posts/1', () => {
    it('should update an existing post', () => {
      const updatedPost = {
        title: 'updated title',
        body: 'updated body',
        userId: 1,
      }
      cy.apiRequest({ method: 'PUT', url: '/posts/1', body: updatedPost }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.include(updatedPost)
      })
    })
  })
  