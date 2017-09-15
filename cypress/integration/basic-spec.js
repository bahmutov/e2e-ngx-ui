describe("ngx-ui basics", () => {
  beforeEach(() => {
    cy.visit("/", {timeout: 10000})
    cy.contains("Angular Style and Component Library")
  })

  it("loads", () => {})

  context("Forms", () => {
    describe("Inputs", () => {
      it("enters text", () => {
        cy.get('ul.list-reset')
          .contains('li', 'Inputs')
          .find('a')
          .click()
        cy.contains('h3', 'Inputs')
          .should('be.visible')
        const text = 'hello world'
        cy.get('input#input-1')
          .type(text)
          .blur()
        cy.contains(`Output: "${text}"`)
      })
    })
  })
})
