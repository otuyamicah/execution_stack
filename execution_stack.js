var name = "micah"



function one(){
    var a = "is this "
    console.log(a + " micah")
    two()
}




function two(){
    var b = "are you "
    console.log(b + " micah")
    three()
}



function three(){
    var c = "where is "
    console.log(c + " micah") 
    util()
}


function util(){
    console.log('======================')
    console.log('|== Util was called ==|')
    console.log('======================')
}

one()



