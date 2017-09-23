
for(year = 2000; year < 2050; year++){
  let day = new Date(year, 0, 1);
  if(day.getDay() == 0){
    console.log(`В году ${year} 1 января будет в воскресение`)
  }
}
