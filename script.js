var i = 0
const arr = []
var sum = 0
var countnum = document.getElementById("countnum")
var savepoints = document.getElementById("savepoints")
var totalentries = document.getElementById("totalentries")

function inc() 
{
    i += 1
    countnum.innerText = i
}
function dec()
{
    if(i == 0){
        i == 0
    }
    else{
        i -= 1
        countnum.innerText = i
    }
    
}
function save()
{
    savepoints.textContent += countnum.innerText + ' - '
    if(countnum.innerText != null){
        arr.push(Number(countnum.innerText))
    }
    for(var k = 0; k < arr.length; k++){
        sum += arr[k]
    }
    totalentries.innerText = sum
    sum = 0
    countnum.innerText = 0
    i = 0
}