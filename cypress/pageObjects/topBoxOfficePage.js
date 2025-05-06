class TopBoxOfficePage {
  getMoviesList = () => cy.get("li.ipc-metadata-list-summary-item");

  //-------------------------------------------------------------------

  clickOnAMovieByIndex(index) {
    this.getMoviesList()
      .eq(index - 1)
      .find("h3")
      .click({ force: true });
  }
}

export default new TopBoxOfficePage();
