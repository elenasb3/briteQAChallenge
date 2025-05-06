class TitlePhotosPage {
  getFilterButton = () =>
    cy.findByRole("button", { name: /open filter prompt/i });
  getPersonFilterDropDown = () => cy.findByText("More people");
  getPersonSelectDropdown = () => cy.get("#Person-filter-select-dropdown");
  getPhotosList = () => cy.findAllByTestId("image-gallery-image");
  getCloseModalButton = () =>
    cy.findByRole("button", { name: /close prompt/i });

  //-------------------------------------------------------------------
  
  filterPhotosByActor(actorName) {
    this.getFilterButton().click();
    this.getPersonFilterDropDown().click({ force: true });
    this.getPersonSelectDropdown()
      .find("option")
      .contains(new RegExp(`^${actorName} \\(\\d+\\)$`))
      .then(($option) => {
        const optionValue = $option.val();
        this.getPersonSelectDropdown().select(optionValue);
      });
    cy.wait(1000); // this could be improved with an intercept
    this.getCloseModalButton().click();
  }
  clickOnPhotoByIndex(index) {
    this.getPhotosList()
      .eq(index - 1)
      .click({ force: true });
  }
}

export default new TitlePhotosPage();
