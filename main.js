import Pages from "./pages/pages.js";

function clearBody() {
  document.body.innerHTML = "";
}

Pages.addPage();
Pages.addPage(true);
Pages.addPage();
