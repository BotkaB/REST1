export default class DataService {
    constructor(){
}

getData(vegpont, callback){
    axios.get(vegpont)
  .then(function (response) {
    // handle success
   
    callback(response.data.irok);
  })
  .catch(function (error) {
    // handle error
  })
  .finally(function () {
    // always executed
  });
}

postData(){}

putData(){}

delete(){}
}