/* eslint-disable no-undef */

describe("Todo tests", () => {
  it("should display empty state message", () => {
    cy.visit("http://localhost:8080");
  });

  it("should add todo", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[type="text"]').type("new todo{enter}");
    cy.get(".todo-list").contains("new todo").should("be.visible");
    cy.get(".todo-list").find(".todo-item").should("have.length", 2);
  });

  it("should delete todo", () => {
    cy.visit("http://localhost:8080");
    cy.get(":nth-child(1) > button").click();
    cy.get(".empty-state-message")
      .contains(
        "Nothing left in the list. Add a new not todo in the input above."
      )
      .should("be.visible");
  });
});
