

// Descrevendo o que o comando login tem que fazer ao ser chamado
//pegando dois parâmetros
Cypress.Commands.add('login', (nome, senha) => { 
    //usando o parâmetro (que vai ser passado lá no arquivo principal)
    cy.get('input[formcontrolname="userName"]').type(nome); 
    cy.get('input[formcontrolname="password"]').type(senha, {log: false});
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('register', (email, nome, usuario, senha) => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(nome);
    cy.get('input[formcontrolname="userName"]').type(usuario);
    //a senha não vai mais ser exibida no log 
    cy.get('input[formcontrolname="password"]').type(senha, {log: false}); 
    cy.contains('button', 'Register').click();
})