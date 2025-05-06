// #1

describe("PokeAPI - Get berry by ID", () => {
  it("GET berry by valid ID returns expected response", () => {
    cy.request("https://pokeapi.co/api/v2/berry/3").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("id", 3);
      expect(response.body).to.have.property("name", "pecha");
    });
  });

  it("GET berry by invalid ID returns an error", () => {
    cy.request({
      url: "https://pokeapi.co/api/v2/berry/9999",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});

// #2

describe("PokeAPI - Get berry by name", () => {
  it("GET berry by valid name returns expected response", () => {
    cy.request("https://pokeapi.co/api/v2/berry/cheri").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", "cheri");
    });
  });

  it("GET berry by invalid name returns 404", () => {
    cy.request({
      url: "https://pokeapi.co/api/v2/berry/test",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});

// #3

describe("PokeAPI - Get berry by flavor", () => {
  it("GET berry by valid flavor returns expected response", () => {
    cy.request("https://pokeapi.co/api/v2/berry-flavor/sweet").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("name", "sweet");
      }
    );
  });

  it("GET the spicy berry with highest potency", () => {
    cy.request({
      url: "https://pokeapi.co/api/v2/berry-flavor/spicy",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.berries).to.be.an("array").that.is.not.empty;

      const berries = response.body.berries;
      let highestPotencyBerry = berries[0];

      berries.forEach((berry) => {
        if (berry.potency > highestPotencyBerry.potency) {
          highestPotencyBerry = berry;
        }
      });

      cy.log(
        `The spicy berry with highest potency is: ${highestPotencyBerry.berry.name}`
      );

      cy.request({
        url: `https://pokeapi.co/api/v2/berry/${highestPotencyBerry.berry.name}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("object");
        expect(response.body).to.have.property(
          "name",
          highestPotencyBerry.berry.name
        );
        const spicyFlavor = response.body.flavors.find(
          (flavorObj) => flavorObj.flavor.name === "spicy"
        );
        expect(spicyFlavor.potency).to.eq(40);
      });
    });
  });
});
