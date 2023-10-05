import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

When('I type First name', () => {
    cy.get('[name="first_name"]').type('John')
})

When('I type Last name', () => {
    cy.get('[name="last_name"]').type('Doe')
})

When('I type Email address', () => {
    cy.get('[name="email"]').type('john.doe@example.com')
})

When('I type a comment message', () => {
    cy.get('textarea[name="message"]').type('/g/collecta20&_p=1089706')
})

When('I click on Submit button', () => {
    cy.get('[type="submit"]').click()
})

Then('I should presented by a successfull submission of contact us message', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!')
})

Then('I should presented by a unsuccessfull submission of contact us message', () => {
    cy.get('body').contains('Error: Invalid email address')
})

When('I type specific First name {string}', (firstname) => {
    cy.get('[name="first_name"]').type(firstname)

})
When('I type specific Last name {string}', (lastname) => {
    cy.get('[name="last_name"]').type(lastname)
})
When('I type specific Email address {string}', (email) => {
    cy.get('[name="email"]').type(email)
})
When('I type specific comment message {string} and number {int}', (message, number) => {
    cy.get('textarea[name="message"]').type(message + " " + number)
})

When('I type first name {word} and last name {string}', (firstname, lastname) => {
    cy.get('[name="first_name"]').type(firstname)
    cy.get('[name="last_name"]').type(lastname)
})

When('I type {string} and {string}', (email, comment) => {
    cy.get('[name="email"]').type(email)
    cy.get('textarea[name="message"]').type(comment)
})

When('I should presented with {string}',(message)=>{
    
})