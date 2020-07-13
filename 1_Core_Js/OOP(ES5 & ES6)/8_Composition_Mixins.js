// better replacement of inheretence
// with inheretence we were getting all the properties and method ..which is undisreable

// feature 1
var eating = {
    eat: function(){
        return 'I can eat'
    }
}

// feature 2
var walking = {
    walk: function(){
        return 'I can walk'
    }
}

// feature 3
var talking = {
    talk: function(){
        return 'I can talk'
    }
}

var Rahul = Object.assign({}, eating, walking, talking)
console.log(Rahul.eat())
console.log(Rahul.walk())
console.log(Rahul.talk())

var RoboCop = Object.assign({}, walking, talking)
console.log(RoboCop.walk())
console.log(RoboCop.talk())