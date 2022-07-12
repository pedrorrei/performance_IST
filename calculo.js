function Calcula1() {
    var v1 = document.getElementById('QNH').value;
    var v2 = document.getElementById('ELEVATION').value;
    var res = document.getElementById('res');
    var t = (parseFloat(v1) / 101325);
    var x = Math.pow(t, 0.19026309) * (-1) + 1;
    var y = ((288.15 / 0.0065)*x + parseFloat(v2))/288.15;
    var z = (1-(0.0065 * z);           
    var w =  101235 * Math.pow(z,5.25588);
    res.value = w;
}
function Calcula2() {
    var v11 = document.getElementById('AC').value;
    var v21 = document.getElementById('el2').value;
    var res2 = document.getElementById('res2');
    var v22= 1- 0.0065*(parseFloat(v11)+parseFloat(v21))/288.15;
    console.log(res2.value);
    res2.value= 101235 * Math.pow(v22, 5.25588);
}

