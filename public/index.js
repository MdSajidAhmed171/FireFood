const burgur = document.querySelector('#burgur');
const burgur = document.querySelector('#menu');


burgur.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden');
    }
})