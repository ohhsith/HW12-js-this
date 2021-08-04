// перечилсяем размеры 
const small = function small(){
    this.price = 50,
    this.calories = 20
};
const medium = function medium() {
    this.price = 75,
    this.calories = 30
};
const large = function large(){
    this.price = 100,
    this.calories = 40
};
// перечисляем добавки
const cheese = function cheese(){
    this.price + 10;
    this.calories + 20
};
const addSalad = function salad(){
    this.price + 20;
    this.calories + 5
};
const addPotato = function potato(){
    this.price + 15;
    this.calories + 10
};
const addSpicePrice = function spice(){
    this.price + 15;
    this.calories + 0
};
const addMayoPrice = function mayoPrice(){
    this.price + 20;
    this.calories + 5
};



function calculateBill (price, modifies){
    
    this.price = function price(){
        
        if(this.size =='small'){

        };
        if(this.size =='medium'){

        };
        if(this.size =='large'){

        };
    };
    this.modifies = function modifies(){
        
        if(this.modifies =='cheese'){

        };
        if(this.modifies =='salad'){

        };
        if(this.modifies =='potato'){

        };
        if(this.modifies =='spice'){

        };
        if(this.modifies =='mayonez'){

        };
        
    };
    
}

function Hamburger(size, modifies) {

    this.size = size(s){
        if(s =='small'){
            let price = 50;
            let calories = 20;
        };
        if(s =='medium'){
            let price = 75;
            let calories = 30
        };
        if(s =='large'){
            let price = 75;
            let calories = 40
        };
    }
    
                
    
}

let hamburger = new Hamburger('small');

console.log(hamburger())