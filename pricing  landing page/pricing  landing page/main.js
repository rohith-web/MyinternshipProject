const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");
const ultraPrice = document.getElementById("ultra-price");


toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `500Rs<span> / day </span>`;
        proPrice.innerHTML = `2000Rs<span> / week </span>`;
        ultraPrice.innerHTML = `9000Rs <span> / month </span>`;

    }else{
        starterPrice.innerHTML = `1000Rs <span> / day </span>`;
        proPrice.innerHTML = '5000Rs<span> / week </span>'; 
        ultraPrice.innerHTML = `15000Rs<span> / month </span>`;

    }
})
