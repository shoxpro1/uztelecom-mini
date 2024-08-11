const icon = document.querySelector('.icon')
const iconn = document.querySelector('.iconnn')
const ic = document.querySelector('.ic')


ic.addEventListener('click', () => {
    if(iconn.classList.contains('iconnew')){
        iconn.classList.remove('iconnew')
        ic.classList.remove('icnew')
        icon.className = 'fa-regular fa-message icon'
    } else {
        iconn.classList.add('iconnew')
        ic.classList.add('icnew') 
        icon.className = 'fa-solid fa-x'
    }
})