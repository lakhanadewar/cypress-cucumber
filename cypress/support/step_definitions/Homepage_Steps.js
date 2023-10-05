import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = 'http://www.webdriveruniversity.com/';

Given(`I visit to webdriveruniversity homepage`, () => {
    cy.visit(url)
});

When(`I click on contact us button`, () => {
    cy.get('#contact-us').invoke('removeAttr', 'target').click();
})



