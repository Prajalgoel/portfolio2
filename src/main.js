import './style.css'

document.querySelector('.homeNav').addEventListener('click', () => {
    document.querySelector('.home').scrollIntoView({
        behavior: "smooth",    
        block : "start",          
        inline: "nearest"
    })
})

document.querySelector('.aboutNav').addEventListener('click', () => {
    document.querySelector('.about').scrollIntoView({
        behavior: "smooth",    
        block : "start",          
        inline: "nearest"
    })
})