import SorView from "./SorView.js";
import FejlecView from "./FejlecView.js";
import {adatLeiro} from "../adatleiro.js";

export default class TablaView{
    #list=[]
    constructor(list, szuloElem){
        this.#list=list;
        szuloElem.append(`<table class="table table-striped">
        <thead></thead>
        <tbody></tbody>
        </table>`)

        this.tbodyElem=szuloElem.find("tbody")
        this.theadElem=szuloElem.find("thead")
        new FejlecView(adatLeiro,this.theadElem)
        this.sorMegjelenit()
    }

    sorMegjelenit(){
//itt példányosítjuk a sort, aNNYI PÉLDÁNYBAN, AHÁNY SOR VAN
        this.#list.forEach((elem, index)=> {
            new SorView(index, elem, this.tbodyElem)
})
    }
}