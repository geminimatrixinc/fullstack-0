
const hasFreeShipping = order =>
        Object.values(order).reduce((a, b) => a + b) > 50;


        function hasFreeShipping(order) {
            var total = 0;
            for (key in order) {
                total +=order[key];
            }
            
            return total >=50;
        }


hasFreeShipping({ "Masks": 5.99, "HDMI Cable": 15.99 }) 
// false

hasFreeShipping({ "XBOX Series X": 599.99 }) 
//true

hasFreeShipping({ "Cards": 5.99, "Books": 25.99, "Yoga Mat": 20.00}) 
// true

