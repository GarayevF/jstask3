let inp1 = document.getElementById('bir');
let inp2 = document.getElementById('iki');
let inp3 = document.getElementById('uc');
let res = document.getElementById('res');
let fh1 = document.getElementById('firsth1');
let sh1 = document.getElementById('secondh1');

res.onclick = function(){
    if(Check()){
        fh1.innerHTML = "Ümumi məbləğ : " + (Number(inp1.value)+(Number(inp1.value)*Number(inp2.value)/100)).toFixed(2);
        sh1.innerHTML = "Aylıq ödəniş : " + ((Number(inp1.value)+(Number(inp1.value)*Number(inp2.value)/100))/Number(inp3.value)).toFixed(2);
    }else{
        fh1.innerHTML = "Inputlari duzgun daxil edin";
        sh1.innerHTML = "";
    }
}


function Check(){
    if (inp1.value != '' && inp2.value != '' && inp3.value != '' &&
        inp1.value != null && inp2.value != null && inp3.value != null && 
        !isNaN(Number(inp1.value)) && !isNaN(Number(inp2.value)) && !isNaN(Number(inp3.value))) {
        return true;
    } else {
        return false
    }
}

