let listItems = document.querySelectorAll('.item');
let proximo = document.getElementById('proximo');
let anterior = document.getElementById('anterior');
let count = listItems.length //3
let active = 0
proximo.onclick = () =>{
    let activeOld = document.querySelector('.item.active')
    activeOld.classList.remove('active')
    active = active >= count - 1 ? 0 : active + 1
    listItems[active].classList.add('active')
}

anterior.onclick = () =>{
    let activeOld = document.querySelector('.item.active')
    activeOld.classList.remove('active')
    active = active <= 0 ? count - 1 : active - 1
    listItems[active].classList.add('active')

}
