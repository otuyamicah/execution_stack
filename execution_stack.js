var name = "micah"



function one(){
    var question = "is this "
    console.log(question + " micah")
    two()
}




function two(){
    var statement = "this is "
    console.log(statement + " micah")
    three()
}



function three(){
    var answer = "yes iam "
    console.log(answer + " micah") 
    util()
}


function util(){
    console.log('======================')
    console.log('|== Util was called ==|')
    console.log('======================')
}

one()



