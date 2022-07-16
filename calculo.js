function Calcula1() {
    var v1 = document.getElementById('QNH').value;
    var v2 = document.getElementById('ELEVATION').value;
    var res = document.getElementById('res');
    var t = (parseFloat(v1) / 101325);
    if (v1 == null )
alert("Insira um Valor");

    console.log(t);
    var x = Math.pow(t, 0.19026309) * (-1) + 1;
    console.log(x);
    var y = ((288.15 / 0.0065)*x + parseFloat(v2))/288.15;
    console.log(y);
    var z = 1-0.0065 * y ;  
    console.log(z);
    var w =  101325 * Math.pow(z,5.25588);
    console.log(w);
    res.value = w;
}
function Calcula2() {
    var v11 = document.getElementById('AC').value;
    var v21 = document.getElementById('el2').value;
    var res2 = document.getElementById('res2');
    var v22= 1- 0.0065*(parseFloat(v11)+parseFloat(v21))/288.15;
    console.log(res2.value);
    res2.value= 101325 * Math.pow(v22, 5.25588);
}

