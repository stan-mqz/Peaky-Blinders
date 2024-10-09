const form = document.querySelector('.formulario')
const input = document.querySelector('.formulario__campo')
const icon = document.querySelector('.formulario__icono')
const clean = document.querySelector('.formulario__limpiar')

input.addEventListener('input', () => {

    if (input.value !== '') {

        icon.classList.add('hidden')
        clean.classList.remove('hidden')

    } else {

        icon.classList.remove('hidden')
        clean.classList.add('hidden')

    }

})

clean.addEventListener('click', () => {
        input.value = ''
        icon.classList.remove('hidden')
        clean.classList.add('hidden')
})