class TitleRatingPage {
  getRateButton = () => cy.findByTestId("rating-button__user-rating__unrated");
  getStarButton = (starsNumber) =>
    cy.findByRole("button", { name: new RegExp(`Rate ${starsNumber}`, "i") });
  getRateButtonModal = () =>
    cy.get("div.ipc-rating-prompt__rating-container > button");

  //-------------------------------------------------------------------

  clickOnRateButton() {
    this.getRateButton().click();
  }

  giveStars(starsNumber) {
    this.getStarButton(starsNumber).click({ force: true });
    this.getRateButtonModal().click({ force: true });
  }
}

export default new TitleRatingPage();
