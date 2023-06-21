var outputscreen=document.getElementById('inputField')

function display(num){
    outputscreen.value=outputscreen.value+num
}

function clearAll(){
    outputscreen.value=""
}

function erase(){
    outputscreen.value=outputscreen.value.slice(0,-1)
}

function calculate(){
    outputscreen.value = eval(outputscreen.value)
}
