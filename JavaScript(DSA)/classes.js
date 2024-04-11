class human{
    constructor(){
        this.gender = 'male';
    }


    printgender(){
        console.log(this.gender);
    }
}

class person {
    constructor(){
        this.name = 'Maxx'
    }

    printmyName(){
        console.log(this.name);
    }
}

const person = new person();
person.printmyName();
