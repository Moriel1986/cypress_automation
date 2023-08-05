/// <reference types="cypress" />



describe('DemoBlaze Test', () => {
    beforeEach(() => {cy.visit('https://www.demoblaze.com/')
    })
  
    it('Clicks on About Us Top Navigation Button', () => {
        cy.get("a").contains("About us").click();
        //cy.wait(2000);
        //cy.clearCookies();
        cy.contains('About us').should("be.visible");

      
      })
    })

  