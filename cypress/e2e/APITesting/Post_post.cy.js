describe('POST /posts', () => {
  it('should create a new post', () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    cy.apiRequest({ method: 'POST', url: '/posts', body: newPost }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.include(newPost)
    })
  })
})

  
  