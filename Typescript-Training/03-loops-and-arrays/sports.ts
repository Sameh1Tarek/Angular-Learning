let sportsOne: string[] = ["football","Gollf","Tennis"];

/*for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}*/

for(let tempSport of sportsOne){
    if(tempSport=="football"){
        console.log(`${tempSport} is my fav sport`);
    }else{
        console.log(`${tempSport}`);
    }
}