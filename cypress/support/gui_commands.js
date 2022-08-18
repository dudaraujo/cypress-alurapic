

// Descrevendo o que o comando login tem que fazer ao ser chamado
Cypress.Commands.add('login', (nome, senha) => { //pegando dois parâmetros
    cy.get('input[formcontrolname="userName"]').type(nome); //usando o parâmetro (que vai ser passado lá no arquivo principal)
    cy.get('input[formcontrolname="password"]').type(senha, {log: false});
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('register', (email, nome, usuario, senha) => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(nome);
    cy.get('input[formcontrolname="userName"]').type(usuario);
    cy.get('input[formcontrolname="password"]').type(senha, {log: false}); //a senha não vai mais ser exibida no log 
    cy.contains('button', 'Register').click();
})