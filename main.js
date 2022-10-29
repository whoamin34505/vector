document.querySelector('button').onclick = myClick;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function myClick() {
document.querySelector('.out1').innerHTML = '';
document.querySelector('.out2').innerHTML = '';
document.querySelector('.out3').innerHTML = '';
document.querySelector('.out4').innerHTML = '';
document.querySelector('.out5').innerHTML = '';
document.querySelector('.out6').innerHTML = '';
document.querySelector('.out7').innerHTML = '';
document.querySelector('.out8').innerHTML = '';
var x1 = document.getElementById('x1').value;
var y1 = document.getElementById('y1').value;
z1 = document.getElementById('z1').value;
var x2 = document.getElementById('x2').value;
var y2 = document.getElementById('y2').value;
z2 = document.getElementById('z2').value;
var coordsx = 0;
var coordsy = 0;
var length = 0;
var koren = 0;
var centerx = 0;
var centery = 0;
var centerz = 0;
var center = 0;
var what = 0;
var chlen = 0

if (z1 == 0 && z2 == 0) {
    chlen = 1;
    coordsx = x2 - x1
    coordsy = y2 - y1
    length = Math.abs((coordsx * coordsx)) + Math.abs((coordsy * coordsy))
    koren = Math.sqrt (length)
    centerx = (Number(x1) + Number(x2))/2;
    centery = (Number(y1) + Number(y2))/2;
    center = 'Центр: <b>' + centerx + '; ' + centery + '</b>'
    var coordsv = 'Координаты вектора: <b>' + coordsx + '; ' + coordsy + '</b>'
    var dlin = 'Длина вектора: <b>' + '√' + coordsx + '<sup>2</sup>' + ' + √' + coordsy + '<sup>2</sup>' + ' = ' + length + ' = ' + koren + '</b>'
} else {
    var chlen = 0;
    console.log (z1 + '; ' + z2)
    coordsx = x2 - x1
    coordsy = y2 - y1;
    what = Number(z2) - Number(z1);
    length = Math.abs((coordsx * coordsx)) + Math.abs((coordsy * coordsy)) + Math.abs((what * what))
    koren = Math.sqrt (length)
    centerx = (Number(x1) + Number(x2))/2;
    centery = (Number(y1) + Number(y2))/2;
    centerz = (Number(z1) + Number(z2))/2;
    center = 'Центр: <b>' + centerx + '; ' + centery + '; ' + centerz + '</b>'
    var coordsv = 'Координаты вектора: <b>' + coordsx + '; ' + coordsy + '; ' + what + '</b>'
    var dlin = 'Длина вектора: <b>' + '√' + coordsx + '<sup>2</sup>' + '+ √' + coordsy + '<sup>2</sup>' + ' + ' + '√' + what + '<sup>2</sup>' + ' = ' + length + ' = ' + koren + '</b>'
}
let out1 = coordsv
let out2 = dlin
let out3 = center
let out4 = '<img src="1.png" width=300px style="width: 500px; border: 1px solid #000;border-radius: 10px; box-shadow:5px 5px 10px #2B1015;"></img>'
let out5 = '<img src="2.webp" width=300px style="width: 500px; border: 1px solid #000;border-radius: 10px; box-shadow:5px 5px 10px #2B1015;"></img>'
document.querySelector('.out1').innerHTML = 'Мудрое дерево начало думать';
setTimeout(() => { document.querySelector('.out2').innerHTML = out4; }, 1000);
setTimeout(() => { document.querySelector('.out3').innerHTML = 'Мудрое дерево думает...'; }, 3500);
setTimeout(() => { document.querySelector('.out4').innerHTML = 'МУДРОЕ ДЕРЕВО ПОДУМАЛО!!!'; }, 5000);
setTimeout(() => { document.querySelector('.out5').innerHTML = out5; }, 6500);
setTimeout(() => { document.querySelector('.out6').innerHTML = coordsv; }, 7500);
setTimeout(() => { document.querySelector('.out7').innerHTML = dlin; }, 8500);
setTimeout(() => { document.querySelector('.out8').innerHTML = center; }, 9500);
}
