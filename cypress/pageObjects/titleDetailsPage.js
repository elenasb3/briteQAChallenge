class TitleDetailsPage {
  getPhotosButton = () => cy.findByTestId("hero__photo-link")
  getGalleryButton = () =>
    cy.findByTestId("mv-gallery-button")
  getIMDbRatingButton = () =>
    cy.findAllByTestId("hero-rating-bar__aggregate-rating__score").first();

  //-------------------------------------------------------------------

  clickOnIMDBRatingButton() {
    this.getIMDbRatingButton().click({ force: true });
  }

  goToPhotosSection() {
    this.getPhotosButton().click();
    this.getGalleryButton().click();
  }
}

export default new TitleDetailsPage();
