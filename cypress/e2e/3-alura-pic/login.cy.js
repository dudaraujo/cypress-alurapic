const cypress = require("cypress")
//const { forEach } = require("cypress/types/lodash")

describe('User login', () => {
    beforeEach(() => {

        cy.visit('https://alura-fotos.herokuapp.com');
    })

    // it('check valid user login', () => {
    //     cy.get('input[formcontrolname="userName"]').type('flavio');
    //     cy.get('input[formcontrolname="password"]').type('123');
    //     cy.get('button[type="submit"]').click();
    //     cy.contains('a', '(Logout)').should('be.visible');
    // })
    
    // it.only('check invalid user login', () => {
    //     cy.get('input[formcontrolname="userName"]').type('invaliduser');
    //     cy.get('input[formcontrolname="password"]').type('123');
    //     cy.get('button[type="submit"]').click();
    //     cy.on('window:alert', (str) => { //validado a popup de alerta
    //         expect(str).to.equal('Invalid user name or password')
    //     }) 
    // })

    it('check valid user login', () => {
        cy.login('flavio', '123'); //Comando criado, passando paametros
        cy.contains('a', '(Logout)').should('be.visible');
    })
    
    it('check invalid user login', () => {
        cy.login('invaliduser', '12345'); //passando o parametro para o comando criado em gui_commands
        cy.on('window:alert', (str) => { //validado a popup de alerta
            expect(str).to.equal('Invalid user name or password')
        }) 
    })

    const usuarios = require('../../fixtures/usuarios.json'); //pegando os arrays com todos os usuários
    usuarios.forEach(usuario => { //para cada usuário que está no array, eu realizo o teste a seguir. (Comando personalizado)

        it('check register new user' + usuario.userName, () => {
            cy.register(usuario.email, usuario.fullName, usuario.userName, usuario.password); //pegando cada informação do array de usuario, e passando ela por parametro para gui_commands
        }
    )})


})