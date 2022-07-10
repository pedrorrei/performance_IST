function Calcula1() {
    var v1 = document.getElementById('QFE').value;
    var v2 = document.getElementById('el').value;
    var res = document.getElementById('res');
    // var x =  parseFloat((101235 * (1- 0.0065 * (((- (parseFloat(v1)) / 101325)**(1/5.25588) + 1)*(288.15 / 0.0065) + (parseFloat(v2)) )/288.15)**5.25588));
    var x = (parseFloat(v1) / 101325)**(1/5.25588) * (-1) + 1;
    var y = (288.15 / 0.0065) - parseFloat(v2);
    var z = (x * y) / 288.15;
    var w =  101235 * ((1-0.0065) * z) ** 5.25588;
   res.value = w;


}
function Calcula2() {
    var v11 = document.getElementById('EL').value;
    var v21 = document.getElementById('PA').value;
    var res2 = document.getElementById('res2');
    console.log(res2.value);
    res2.value= 101235 * (1- 0.0065  * (-1 *parseFloat(v11)+parseFloat(v21))/288.15)^5.25588;
}