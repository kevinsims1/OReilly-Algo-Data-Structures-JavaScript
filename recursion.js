//Example
function recursive(num){
    if(num <= 0){
        return num
    }else{
        return num * recursive(num - 1)
    }
}

var num = 10

console.log(recursive(num))

function recurse(){
    let counter = 0
    if(counter < 10){
        counter++
        return recursive()
    }else{
        return counter
    }
}
recurse()
