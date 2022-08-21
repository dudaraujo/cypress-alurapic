const { it } = require('mocha');

describe('User login', () => {
    beforeEach(() => {

        cy.visit('https://alura-fotos.herokuapp.com');

    //interceptando o que a api retona pra simula um erro
        //cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', { 
            //stausCode: 400
       // }).as('stubPost') //dando nome pra esse intercept 
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
        //validado a popup de alerta
    //     cy.on('window:alert', (str) => { 
    //         expect(str).to.equal('Invalid user name or password')
    //     }) 
    // })

    it('check valid user login', () => {
        //passando as variáveis de ambiente 
        //Comando criado, passando parametros
        cy.login(Cypress.env('userName'), Cypress.env('password')); 
        //pedindo para esperar enquanto a API está sendo interceptada 
       // cy.wait('@stubPost') 
        cy.contains('a', '(Logout)').should('be.visible');
    })
    
    it('check invalid user login', () => {
        //passando o parametro para o comando criado em gui_commands
        cy.login('invaliduser', '12345'); 
         //validado a popup de alerta
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        }) 
    })

    //pegando os arrays com todos os usuários
    const usuarios = require('../../fixtures/usuarios.json'); 
    //para cada usuário que está no array, eu realizo o teste a seguir. (Comando personalizado)
    usuarios.forEach(usuario => { 

        it('check register new user' + usuario.userName, () => {
            //pegando cada informação do array de usuario, e passando ela por parametro para gui_commands
            cy.register(usuario.email, usuario.fullName, usuario.userName, usuario.password); 
        }
    )})


})