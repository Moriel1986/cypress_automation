/// <reference types="cypress" />
import selectors from "./selectors.js";
import '../support/commands.js';




describe('DemoBlaze End 2 End Test', () => {
    beforeEach(() => {cy.visit('https://www.demoblaze.com/')
    cy.clearCookies();
    })
  
    it('Clicks on About Us Top Navigation Button', () => {

      // Assert Elements on the homepage 
        cy.assert_homepage_elements();


      // User signs in and adds samsung phone to cart 
        cy.get(selectors.Log_in).click();

        cy.wait(1000);
  
        // Assert Elements on the modal
        cy.assert_login_modal();

        // User Signs in 
        cy.login(selectors.Username, selectors.Password);
        cy.contains(selectors.Phones).click();
        cy.get(selectors.Samsung_galaxy_s6).click();
        cy.get(selectors.AddToCart).click();
        cy.get(selectors.Cart).click();

        // User Deletes item from Cart

        cy.get(selectors.Delete_Btn).should("contain.text", "Delete").click();
        cy.get(selectors.Delete_Btn).should("not.exist");

        cy.get(selectors.About_us).should('contain.text', 'About Us');
        //cy.get(selectors.About_us_text)
        //.should('contain.text', 'We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.');


       

      })
    })

  