
describe('search photos and data', () => {
    
    it.only('search flavios photos', () => {

        // Flaky test
        //const tempoEsperado = Math.random() * 2000; 

        cy.request({ 
            //fazendo uma requisição do método GET utilizando essa url
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'

        // "então, pega a resposta dessa requisição e..."
        }).then((res) => { 
            //quando a requisição da foto é 200, quer dizer que é sucesso 
            expect(res.status).to.be.equal(200) 
            //que o corpo da requisição, seu conteúdo, não venha vazio
            expect(res.body).is.not.empty  
            //espero que tenha a propiedade "descrição" no item de posição 0 do array de fotos 
            expect(res.body[0]).to.have.property('description') 
            expect(res.body[0].description).to.be.equal('Farol iluminado')
            //expect(res.duration).to.be.lte(tempoEsperado)  //lte = menor que  flaky test
        })
    })

    it('flavios login', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            // pegando o login do flavio no arquivo cypress.env.json
            body: Cypress.env() 
        }).then((res) => {
            expect(res.status).to.be.equal(200) 
            expect(res.body).is.not.empty  
            //conferindo se existe a propriedade id
            expect(res.body).to.have.property('id') 
            //conferindo se o id é 1
            expect(res.body.id).to.be.equal(1) 
            //conferindo se está vindo email
            expect(res.body).to.have.property('email') 
            //conferindo se o email é... 
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br') 
        })
    })
})