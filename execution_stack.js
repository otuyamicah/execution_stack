var name = "micah"



function one(){
    var x = "is this "
    console.log(x + " micah")
    two()
}




function two(){
    var y = "are you "
    console.log(y + " micah")
    three()
}



function three(){
    var z = "where is "
    console.log(z + " micah") 
    util()
}


function util(){
    console.log('======================')
    console.log('|== Util was called ==|')
    console.log('======================')
}

one()



