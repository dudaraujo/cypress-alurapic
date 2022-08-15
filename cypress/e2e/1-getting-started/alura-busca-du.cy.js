describe('alura-course-search-du', () => {
    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('search QA course', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('QA');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Carreira QA: processos e automação de testes');
    })
})           