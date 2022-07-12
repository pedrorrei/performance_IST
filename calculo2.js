function Calcula1() {
       var v1 = document.getElementById('QNH').value;
    var v2 = document.getElementById('QFE').value;
    var res = document.getElementById('res');
    var t = (parseFloat(v2) / 101325);
    var g =  Math.pow(t, 0.19026309) * (-1) + 1;
    var y = (parseFloat(v1)/101325);
    var p = Math.pow(y, 0.19026309) * (-1) + 1;
    var z = (g-p)*(288.15/0.0065);
    res.value = z;


}
function Calcula2() {
        var v11 = document.getElementById('PA').value;
    var v21 = document.getElementById('QNH2').value;
    var res2 = document.getElementById('res2');
    var v12 = (parseFloat(v21)/101325);
    var v13 = Math.pow(v12, 0.19026309) * (-1) + 1;
    var v14 = v13*(288.15/0.0065);
    var x = parseFloat(v11)-v14;
    res2.value = x;

}


function Calcula3() {
       var v111 = document.getElementById('AC').value;
    var v211 = document.getElementById('QFE2').value;
    var res3 = document.getElementById('res3');
       var v212 = (parseFloat(v211)/101325);
    var v213 = Math.pow(v212, 0.19026309) * (-1) + 1;
    var v214 = v213*(288.15/0.0065);

    var xx =  v214- parseFloat(v111);
    res3.value = xx ;


}
   

function Calcula4() {
       var v1111 = document.getElementById('PA2').value;
    var v2111 = document.getElementById('AC2').value;
    var res4 = document.getElementById('res4');
    res4.value = parseFloat(v1111) - parseFloat(v2111);
}
