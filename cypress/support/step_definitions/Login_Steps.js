const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

let stub;

When('I type a {string} and {string} on login screen', (username, paswword) => {
    cy.get('#text').type(username)
    cy.get('#password').type(paswword)
})

When('I click Login button', () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('#login-button').click()
})

Then('I should presented with alert {string}', (message) => {
    expect(stub).to.have.been.calledWith(message)
})