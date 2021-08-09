function Burger (info){
    
    this.price = info.price;
    this.calories = info.calories;

    this.getPrice = function (){
        return this.price;
    }
    this.getCalories = function() {
        return this.calories
    }

   
    this.addModifier = function(modifier) {
        this.price += modifier.price;
        this.calories += modifier.calories;
        return this
    }

}

const cheese = {
    price: 10,
    calories: 20
};
const salad = {
    price: 20,
    calories: 5
};
const potato = {
    price: 15,
    calories: 10
};
const spice = {
    price: 15,
    calories: 0
};
const mayo = {
    price: 20,
    calories: 5
};

const sizeSmall = {
    type: 'small',
    price: 50,
    calories: 20
};
const sizeMedium = {
    type: 'medium',
    price: 75,
    calories: 30
};

const sizeLarge = {
    type: 'large',
    price: 100,
    calories: 40
};


let burgerSmall = new Burger(sizeSmall);
let burgerMedium = new Burger(sizeMedium);
let burgerLarge = new Burger(sizeLarge);

console.log(burgerLarge.addModifier(spice)) //price: 115, calories: 40
console.log(burgerSmall.addModifier(salad).addModifier(mayo)) //price: 90, calories: 30
