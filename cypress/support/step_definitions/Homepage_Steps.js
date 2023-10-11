import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page-objects/Base_PO";
const basePage = new Base_PO();
// const url = 'http://www.webdriveruniversity.com/';

Given(`I visit to webdriveruniversity homepage`, () => {
    // cy.visit(url)
    basePage.navigate("/");
});

When(`I click on contact us button`, () => {
    cy.get('#contact-us').invoke('removeAttr', 'target').click();
})

When('I click on login button', () => {
    // cy.get('#login-portal').invoke('removeAttr', 'target').click()
    cy.clickOpenInSameTab('#login-portal');
})

