import DataService from "../Model/DataService.js";
import TablaView from "../View/Táblázat/TablaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";
class Controller{
constructor(){
   this.dataService=new DataService();

   this.dataService.getData("adatok.json",this.megjelenit);
}
megjelenit(list){
    console.log(list)
    //példányosítjuk a view-t Táblázatot
    new TablaView(list, $(".adatok"))
    new UrlapView($(".urlap"))
}
}
export default Controller
