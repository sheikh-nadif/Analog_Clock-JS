const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    
   let d = new Date();
   let htime = d.getHours();
   let mtime = d.getMinutes();
   let stime = d.getSeconds();

let hrotation = 30 * htime + mtime/2;
let mrotation = 6 * mtime;
let srotation = 6 * stime; 

hr.style.transform = `rotateZ(${hrotation}deg)`;
mn.style.transform = `rotateZ(${mrotation}deg)`;
sc.style.transform = `rotateZ(${srotation}deg)`;

} ,1000 )