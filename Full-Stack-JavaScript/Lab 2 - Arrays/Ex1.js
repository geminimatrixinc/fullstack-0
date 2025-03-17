
const buildArray = function(num) {
    var array =  new Array(); //[];

    for(var i=0; i < num; i++) {
        array.push(i);
    }
    return array;
}

buildArray(2);

console.log(buildArray(25));