
describe('search photos and data', () => {
    
    it.only('search flavios photos', () => {

        //const tempoEsperado = Math.random() * 2000; flaky test

        cy.request({ //fazendo uma requisição do método GET utilizando essa url
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => { // "então, pega a resposta dessa requisição e..."
            expect(res.status).to.be.equal(200) //quando a requisição da foto é 200, quer dizer que é sucesso 
            expect(res.body).is.not.empty  //que o corpo da requisição, seu conteúdo, não venha vazio
            expect(res.body[0]).to.have.property('description') //espero que tenha a propiedade "descrição" no item de posição 0 do array de fotos 
            expect(res.body[0].description).to.be.equal('Farol iluminado')
            //expect(res.duration).to.be.lte(tempoEsperado)  //lte = menor que  flaky test
        })
    })

    it('flavios login', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env() // está pegando o login do flavio no arquivo cypress.env.json
        }).then((res) => {
            expect(res.status).to.be.equal(200) 
            expect(res.body).is.not.empty  
            expect(res.body).to.have.property('id') //conferindo se existe a propriedade id
            expect(res.body.id).to.be.equal(1) //conferindo se o id é 1
            expect(res.body).to.have.property('email') //conferindo se está vindo email
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br') //conferindo se o email é 
        })
    })
})