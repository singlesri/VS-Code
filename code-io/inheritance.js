class Animal {
    legs;
    tail;

    constructor(legs, tail){
        this.legs = legs;
        this.tail = tail;
    }

    display(){
        console.log(this.legs);
        console.log(this.tail);
    }
}

class Human extends Animal {
    nationality;
}

let anime = new Animal (2,false);
anime.display();

let goms = new Human(4, false);
console.log(goms);
