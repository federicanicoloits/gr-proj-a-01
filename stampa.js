let arrayOfProducts = [
  {name: 'pane', id: '001', dateCreation: 1, dateFine: 3, calStatus(){
    let start = this.dateCreation;
    let end = this.dateFine;
    let difference = end - start;
    return difference;
  }, status: 'new'}
]
console.log(arrayOfProducts[0].calStatus());
function statusUpdate(num, dateActual) {
  let apt = arrayOfProducts[num].calStatus();
  if(dateActual<apt && dateActual>arrayOfProducts[num].dateCreation){
    arrayOfProducts[num].status = 'valid';

  } else if(dateActual>=apt){
    arrayOfProducts[num].status = 'expired';
  }
}
statusUpdate(0, 2);
console.log(arrayOfProducts[0].status);
console.log(arrayOfProducts[0].status = 'valid');


