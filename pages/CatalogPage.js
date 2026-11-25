export class CatalogPage {
  constructor(page) {
    this.page = page;
  }

  async search(query) {
    // BEGIN
    const searchInput = this.page.getByPlaceholder('Search');
    await searchInput.fill(query);
    // END
  }

  async selectBrand(brand) {
    // BEGIN
    const checkbox = this.page.getByRole('checkbox', { name: brand, exact: true });
    await checkbox.check();
    // END
  }

  async openProduct(name) {
    // BEGIN
    await this.page.getByRole('link', { name, exact: true }).click();
    // END
  }

  async nextPage() {
    // BEGIN
    await this.page.getByRole('link', { name: 'Next' }).first().click();
    // END
  }
}
