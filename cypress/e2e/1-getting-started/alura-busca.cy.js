describe('alura-course-search', () => {
    beforeEach(() => {
        cy.visit('http://www.alura.com.br');
    })

    it('search java course', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome') //searching among all course options
            .should('contain', 'Formação Java e Orientação a Objetos');
    })

})