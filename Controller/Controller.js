import DataService from "../Model/DataService.js";
import TablaView from "../View/Táblázat/TablaView.js";
class Controller{
constructor(){
   this.dataService=new DataService();

   this.dataService.getData("adatok.json",this.megjelenit);
}
megjelenit(list){
    console.log(list)
    //példányosítjuk a view-t Táblázatot
    new TablaView(list, $(".adatok"))
}
}
export default Controller
