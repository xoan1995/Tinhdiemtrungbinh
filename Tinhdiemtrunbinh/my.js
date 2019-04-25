function Tinhtrungbinh() {
    let x1=document.getElementById('x1').value;
    let x2=document.getElementById('x2').value;
    let x3=document.getElementById('x3').value;
    let xx1 = parseFloat(x1);
    let xx2 = parseFloat(x2);
    let xx3 = parseFloat(x3);
    let Tong = xx1+ xx2 + xx3;
    let kq = Tong/3;
    alert(kq);

}