describe("ngx-ui basics", () => {
  // usually we want to start from nothing
  // and reload the page before each test
  // but for the component library we can
  // load the page once and exercise each component
  before(() => {
    cy.visit('/')
    cy.get('.page-loader')
      .should('not.be.visible', {timeout: 20000})
  })

  it("loads", () => {
    cy.contains("Angular Style and Component Library")
  })

  context("Forms", () => {
    describe("Inputs", () => {
      // a few helper functions to access elements
      // without copying selectors again and again
      const gotoInputs = () => {
        cy.get('ul.list-reset')
          .contains('li', 'Inputs')
          .find('a')
          .click()
        cy.contains('h3', 'Inputs')
          .should('be.visible')
      }

      const getFirstInput = () =>
        cy.get('ngx-input[name="input1"]')

      const getFirstInputBox = () =>
        getFirstInput()
          .find('input#input-1')

      beforeEach(gotoInputs)

      it("enters text", () => {
        const text = 'hello world'
        getFirstInputBox()
          .type(text)
          .blur()
        cy.contains(`Output: "${text}"`)
      })

      it('underlines active input', () => {
        const getUnderline = () =>
          getFirstInput()
            .find('.ngx-input-underline .underline-fill')

        // reset active input box
        getFirstInputBox().click().blur()
        getUnderline()
          .should('have.attr', 'style', 'width: 0%;')

        // when we click on the input box
        // it underlines it
        getFirstInputBox().click()
        getUnderline()
          .should('have.attr', 'style', 'width: 100%;')
      })
    })
  })
})
