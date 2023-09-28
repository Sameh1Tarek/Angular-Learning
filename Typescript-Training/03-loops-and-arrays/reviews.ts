let reviews: number[] = [2,3,4,5,6];

let totalNum : number = 0;

for(let review of reviews){
    console.log(review);
    totalNum+=review;
}
console.log(`the total number: ${totalNum}`);