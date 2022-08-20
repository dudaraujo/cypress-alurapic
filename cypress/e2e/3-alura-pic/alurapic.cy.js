//const { it } = require("mocha");  NÃO SEI OQ É ISSO, APARECEU DO NADA 


const { it } = require('mocha');
//const { usuarios } = require('../../fixtures/usuarios.json');
import  usuarios  from '../../fixtures/usuarios.json';




describe('UX Home', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })


    it('check login screen message', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage','Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })

   // const usuarios = require('../../fixtures/usuarios.json')
    it.only('check enabled button on login screen', () => {
        cy.get('input[formcontrolname="userName"]').type(usuarios[0].userName);
        cy.get('input[formcontrolname="password"]').type(usuarios[0].password, {log: false});
        cy.get('button,[type="submit"]').should('be.enabled');
    })

    it('check aplication name on login screen', () => {
        cy.contains('a', "ALURAPIC").should('be.visible');
    })

    it('check clickable menu on login screen', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })

}) 