// prende la data attuale e restituisce un oggetto
let formatDate = () => {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  
  // creazione del oggetto date personalizzato
  let dataObject = {'day':day, 'month': month, 'year': year};
  return dataObject;
}

// prende un oggetto ritorna una stringa
let printDate = (objectDate) => {
  let unionDate = (objectDate.day + '-' + objectDate.month + '-' + objectDate.year);
  return unionDate;
}



let e = formatDate()
//ritorna una oggetto, cosi se vogliamo andare a fare i controlli ad es con il mese attuale - scadedenza si può
console.log(typeof(e));
console.log(e);
// 

console.log(printDate(e));
