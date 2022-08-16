//const { it } = require("mocha");  NÃO SEI OQ É ISSO, APARECEU DO NADA 

const { it } = require('mocha');




describe('User register and login', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
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
    

    it.only('check home message', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage','Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })

}) 