
function Car(obj) {
    this.brand = obj.brand;
    this.model = obj.model;

    this.getBrand = function() {
        console.log("The manufacturer is: " + this.brand);
    };

    this.getModel = function () {
        console.log("The model is: " + this.model);
    }
}

var telsa = new Car({brand: 'Tesla', model: 'S'});
telsa.getBrand();
// The manufacturer is: Tesla 
telsa.getModel();
// The model is: S
var camaro =  new Car({brand: 'Chevy', model: 'Camaro'});
camaro.getBrand();
// The manufacturer is: Chevy 
camaro.getModel();
// The model is: Camaro

