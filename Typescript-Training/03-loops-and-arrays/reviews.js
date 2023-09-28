var reviews = [2, 3, 4, 5, 6];
var totalNum = 0;
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var review = reviews_1[_i];
    console.log(review);
    totalNum += review;
}
console.log("the total number: ".concat(totalNum));
