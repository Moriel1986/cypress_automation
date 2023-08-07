/// <reference types="cypress" />
import selectors from "./selectors.js";



describe('DemoBlaze End 2 End Test', () => {
    beforeEach(() => {cy.visit('https://www.demoblaze.com/')
    cy.clearCookies();
    })
  
    it('Clicks on About Us Top Navigation Button', () => {

        cy.get(selectors.Log_in).click();
        cy.wait(1000);
        cy.get(selectors.Log_in_userName).type(selectors.Username);
        cy.get(selectors.Log_in_password).type(selectors.Password);
        cy.get(selectors.Log_in_Btn).click();
        cy.get(selectors.Phone).click();
        cy.get(selectors.Samsung_galaxy_s6).click();
        cy.get(selectors.AddToCart).click();
        cy.get(selectors.Cart).click();


       

      })
    })

  