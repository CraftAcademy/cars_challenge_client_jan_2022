describe("Visitor can view a collection of cars ", () => {
  
  before(() => {
    cy.intercept("GET", "**/api/lux-cars", {
      fixture: "lux_cars_index_response.json",
    }).as("carsIndex");

    cy.visit("/");
  });

  it("is expected to make a GET request to luxury cars endpoint", () => {
    cy.wait("@carsIndex").its("request.method").should("eq", "GET");
  });

  // it("is expected to make a network call with a status 200", () => {
  //   cy.wait("@carsIndex").its("response.statusCode").should("eq", 200);
  // });

  it("is expected to display a list of luxury cars", () => {
    cy.get("[data-cy=lux-cars-list]").children().should("have.length", 3);
  });

  it("is expected to see cars with a brand", () => {
    cy.get("[data-cy=lux-cars-list]").first().should("contain", "Lancia");
  });

  it("is expected to see cars with a price", () => {
    cy.get("[data-cy=lux-cars-list]").first().should("contain", 200000.0);
  });

  it("is expected to see when car list has been created", () => {
    cy.get("[data-cy=lux-cars-list]").first().should("contain", "2022-03-09 18:20");
  });

  it("is expected to see when car list has been updated", () => {
    cy.get("[data-cy=lux-cars-list]").first().should("contain", "2022-03-09 18:25");
  });

});
