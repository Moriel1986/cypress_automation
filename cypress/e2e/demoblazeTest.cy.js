/// <reference types="cypress" />



describe('DemoBlaze Test', () => {
    beforeEach(() => {cy.visit('https://www.demoblaze.com/')
    cy.clearCookies();
    })
  
    it('Clicks on About Us Top Navigation Button', () => {
        cy.get("a").contains("About us").click();
        cy.wait(2000);
        cy.contains('About us').should("be.visible");
        cy.get("div[id='videoModal'] div[class='modal-footer'] button[type='button']").click();
        cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)").click();

      })
    })

  