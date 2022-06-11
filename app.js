const dropmenu = document.querySelector('.dropmenu');
const dropmenus = document.querySelector('.dropmenus');
const features = document.querySelector('.features');
const company = document.querySelector('.company')
console.log(dropmenu)
console.log(dropmenus)
console.log(features)
console.log(company)


features.addEventListener('click', display)

function display(){
    dropmenu.classList.toggle("display");
dropmenus.classList.remove('display2');
}



company.addEventListener('click', display2)
    function display2(){

        dropmenus.classList.toggle('display2');
        dropmenu.classList.remove('display');
}


