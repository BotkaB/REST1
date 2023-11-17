import { adatLeiro } from "../adatleiro.js";
export default class UrlapView {
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    //létrehozni egy form taget a szülőelemnek,
    this.szuloElem.append(`<form></form>`)
    //klétrehozok egy kapaszkodót a this.formElem
    this.formElem = this.szuloElem.find("form")
    this.htmlOsszerak();

  }

  htmlOsszerak() {
    //for in az adatleiró kulcsain és div label, input
    console.log("valami")
    for (const key in adatLeiro) {

      const element = adatLeiro[key];
      let urlapElem = `  <div class="mb-3">
      <label for="${key}" class="form-label">${element}</label>
      <input type="text" id="${key}" class="form-control" placeholder="${element}">
    </div>`
      console.log("lefut")
      this.formElem.append(urlapElem);

    }
    this.formElem.append(`<button type="submit" class="btn btn-primary">Submit</button>`)

  }
}