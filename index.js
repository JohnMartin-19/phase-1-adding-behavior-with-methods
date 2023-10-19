// Your code here
class cat{
    constructor(name,sex){
        this.name = name
        this.sex = sex
    }
    speak(){
        console.log(` ${this.name} says meow!`)
    }
}
let puss = new cat('Garfiled','male')
puss.speak()

class dog{
    constructor(name,sex){
        this.name = name
        this.sex = sex
        
    }
    speak(){
        console.log(` ${this.name} warns bark! bark!!`)
    }
}
let doggi = new dog('mutina','male')
doggi.speak()


class bird{
    constructor(name,sex){
        this.name = name
        this.sex = sex
    }
    speak(){
       
        if(bird.sex = 'male'){
            console.log(` ${this.name} says Im the man!`)
        } else {
            console.log(` ${this.name} says quack! quack!`)
        }
    }
}
let dush = new bird('parrot','male')
dush.speak()