let sportsOne: string[] = ['Golf','Cricket','Tennis','Swimming'];

// for(let i=0; i<sportsOne.length; i++){
//     console.log(sportsOne[i]);
// }


for(let tempSport of sportsOne){
    if(tempSport == "Swimming")
        console.log(`${tempSport} << my favorite sport`);
    else
        console.log(tempSport);
}