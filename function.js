// date object is declared as constant
const d = new Date().toLocaleString();
// variables for reference for canvas
var cnv = document.getElementById("canvas");
var ctx = cnv.getContext("2d");

function showDate(){
    document.getElementById('date').innerHTML= d;
}
