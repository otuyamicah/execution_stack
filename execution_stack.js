var name = "micah"
var a="Initial"



function one(){
    var question = "is this "
    console.log(question + " micah")
    console.log(a + "---->")
    a = a + " one called this |"
    two()


}




function two(){
    var statement = "this is "
    console.log(statement + " micah")
    console.log(a + "---->")
    a = a + " two called this |"
    three()

}



function three(){
    var answer = "yes iam "
    console.log(answer + " micah") 
    console.log(a + "---->")
    a = a + " three called this |"
    util()

}


function util(){
    console.log('======================')
    console.log('|== Util was called ==|')
    console.log('======================')
    console.log(a + "---->")
    a = a + " util called this"
}

one()



