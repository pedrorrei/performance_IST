function Calcula1() {
    var v1 = document.getElementById('QFE').value;
    var v2 = document.getElementById('el').value;
    var res = document.getElementById('res');
    var x = (parseFloat(v1) / 101325);
    var k = Math.pow(x,0.19026309) * (-1) + 1;
    var y = (288.15 / 0.0065)*k ;
    var z = (y - parseFloat(v2))/ 288.15;
    var t = 1-(0.0065) * z;
    var w =  101325 * Math.pow(t, 5.25588);
    res.value = w;
}
function Calcula2() {
    var v11 = document.getElementById('EL').value;
    var v21 = document.getElementById('PA').value;
    var res2 = document.getElementById('res2');
    var v22 = (1- 0.0065  * ((-1) *parseFloat(v11)+parseFloat(v21))/288.15);
    console.log(res2.value);
    res2.value= 101325 * Math.pow(v22,5.25588);

}
