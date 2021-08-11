var names = ['micah', 'john', 'musa'];
console.log(names[0])


const ghtyey = ['first', 'second', 'third']
console.log(ghtyey[2]);

var year =  new Array('1990', '1991', '1992');
console.log(year[2]);



var barbers =['micah', 'abdul', 'sadiq']
barbers.push('hossana', 'johnbosco')
barbers.unshift('gabe', 'frankline')
// barbers.pop()
// barbers.shift('gabe')
barbers[2] = "maluabuchukwu"
barbers[0] = "gabrel"
// barbers[4] = "4"
console.log(barbers.indexOf("sadiq"))

// if (barbers.indexOf("sadiq") === -1) {
//     console.log("does not Exist");
    
// } else {
//     console.log("Exist")
    
// }

// barbers.indexOf("sadiq") === -1  ? console.log("does not exist") : console.log("exist");
console.log(barbers.indexOf("sadiq") === -1  ? "does not exist" : "exist");
