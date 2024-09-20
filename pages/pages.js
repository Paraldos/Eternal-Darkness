export default class Pages {
  static addPage(landscape = false) {
    const body = document.body;
    const newPage = document.createElement("div");
    newPage.classList.add("page");
    if (landscape) {
      newPage.classList.add("page__landscape");
    }
    body.appendChild(newPage);
  }
}
