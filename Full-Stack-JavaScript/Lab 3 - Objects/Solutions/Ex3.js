
// factory pattern
function product(name, price) {
    var o = new Object();
    o.name = name;
    o.price = price
    o.getInfo = function() {
        console.log("The item: " + o.name + " costs: " + o.price);
    }
    return o;
}

var apples = product('apples', 25);
apples.getInfo();
// The item: apples costs: 25

var soda = product('soda', 2);
soda.getInfo();
// The item: soda consts: 2



