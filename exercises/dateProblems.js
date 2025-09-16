function daysBetween(date1, date2){
   let dateObject1 =  new Date(date1)
   let dateObject2 = new Date(date2)
   return Math.floor((dateObject2 - dateObject1) / (1000 * 60 * 60 *24))
}

console.log(daysBetween("2025-09-01", "2025-09-05"))