/* eslint-disable no-undef */
import TextInput from "./TextInput.vue";

describe("<TextInput />", () => {
  it("renders base text input component", () => {
    cy.mount(TextInput);

    cy.get("input").should("have.attr", "placeholder", "Add a new not todo");

    cy.get('input[type="text"]').type("new todo");
    cy.get("input[type=submit]")
      .click()
      .then(() => {
        cy.wrap(Cypress.vueWrapper.emitted()).should(
          "have.property",
          "newTodo"
        );
        expect(Cypress.vueWrapper.emitted().newTodo[0]).to.deep.equal([
          "new todo",
        ]);
      });
  });
});
