const { it } = require('mocha');

describe('User register', () => {
    beforeEach(() => {
        //cy.visit('https://alura-fotos.herokuapp.com'); 
        cy.visit("/") //definimos a base url em cypress.config.js
    })

    it('check validation messages', () => {
        cy.contains('a', 'Register now').click(); //verificando se existe um elemento "a" e se nesse elemento está escrito "Register now"
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        
    })

    it('check invalid email message', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('duda');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('check invalid password message', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('check low case for user message', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type("InvalidUser");
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    
})