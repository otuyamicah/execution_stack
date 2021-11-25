var name = "micah"
var a="Initial"



function one(){
    var question = "is this "
    console.log(question + " micah")
    two()
    console.log(a + "---->")
    a = a + " one called this |"

}




function two(){
    var statement = "this is "
    console.log(statement + " micah")
    three()
    console.log(a + "---->")
    a = a + " two called this |"
}



function three(){
    var answer = "yes iam "
    console.log(answer + " micah") 
    util()
    console.log(a + "---->")
    a = a + " three called this |"
}


function util(){
    console.log('======================')
    console.log('|== Util was called ==|')
    console.log('======================')
    console.log(a + "---->")
    a = a + " util called this"
}

one()



