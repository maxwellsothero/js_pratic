let timer;
let d = new Date();

    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);

 let h;
 let m;
 let s;
 let c;

 let hrs = '00';
 let mts = '00';
 let sec = '00';
 let cet = '00';

 function relogio2(){
    let d1 = new Date();
    let hh = d1.getHours();
    let mm = d1.getMinutes();
    let ss = d1.getSeconds();

    let txt1 = hh+':'+mm+':'+ss;
    document.querySelector('#tempo1').innerHTML = txt1;

} 
function relogio(){
   
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    c = d.getMilliseconds() /10;

    let txt = h+':'+m+':'+s+':'+c;
    document.querySelector('#tempo').innerHTML = txt;
    d.setMilliseconds( d.getMilliseconds() + 10 );

}
let bit = 0;
function startcounter(){
    
    if(bit === 0){
        timer = setInterval(relogio,10);
        bit = 1;
    }   
}
function stopcounter(){
    clearInterval(timer);
    bit =0;
}
function limpar(){
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);

    h = '0';
    m = '0';
    s = '0';
    c = '0';

    let txt = h+':'+m+':'+s+':'+c;

    document.querySelector('#tempo').innerHTML = txt;

}
function inciaRelogio(){
    timer = setInterval(relogio2,1000);
}