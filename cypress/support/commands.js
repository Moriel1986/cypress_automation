// commands.js
import selectors from "../e2e/selectors.js";


    Cypress.Commands.add('login', (username, password) => {
        cy.get(selectors.Log_in_userName).type(username);
        cy.get(selectors.Log_in_password).type(password);
        cy.get(selectors.Log_in_Btn).click();
  });

    Cypress.Commands.add('addItemToCart', (productName) => {
    cy.contains('.card-title', productName)
      .siblings('.card-text')
      .find('button')
      .click();
  });
  
    Cypress.Commands.add('assert_homepage_elements', () => {
        cy.get(selectors.Home).should('contain.text', "Home");
        cy.get(selectors.Contact).should('contain.text', "Contact");
        cy.get(selectors.About_us).should('contain.text', "About Us");
        cy.get(selectors.Cart).should('contain.text', "Cart");
        cy.get(selectors.Log_in).should('contain.text', "Log in");
        cy.get(selectors.Sign_up).should('contain.text', "Sign up");
        cy.get(selectors.Previous).should('contain.text', "Previous");
        cy.get(selectors.Next).should('contain.text', "Next");
        cy.get(selectors.Categories).should('contain.text', "CATEGORIES");
        cy.contains(selectors.Phones).should('contain.text', "Phones");
        cy.contains(selectors.Laptops).should('contain.text', "Laptops");
        cy.contains(selectors.Monitors).should('contain.text', "Monitors");
  });

    Cypress.Commands.add('assert_login_modal', () => {
        cy.get(selectors.Login_text).should('contain.text', "Log in");
        cy.get(selectors.Username_text)
        .should('contain.text', "Username");
        cy.get(selectors.Password_text)
        .should('contain.text', "Password");
        cy.get(selectors.Close_Btn)
        .should('contain.text', "Close");
        cy.get(selectors.Log_in_Btn)
        .should('contain.text', "Log in");
});

    // Cypress.Commands.add('apiRequest', ({ method, url, body, headers = {} }) => {
    //   return cy.request({
    //     method,
    //     url: `${Cypress.env('apiUrl')}${url}`,
    //     body,
    //     headers: {
    //       Authorization: `Bearer ${Cypress.env('authToken')}`,
    //       ...headers,
    //     },
    //     failOnStatusCode: false,
    //   })

    Cypress.Commands.add('apiRequest', ({ method, url, body, headers = {} }) => {
      return cy.request({
        method,
        url,
        body,
        headers,
        failOnStatusCode: false, // prevent tests from failing on non-2xx statuses
})
})
      
  

  