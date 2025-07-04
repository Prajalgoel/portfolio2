import './style.css'

document.querySelectorAll('.navContent').forEach((content) => {
    content.addEventListener('click', (e) => {
        let title = content.id
        document.querySelector(`.${title}`).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        })
    })
})

async function getProjects() {
    let a = await fetch("/projects/projects.json")
    let response = await a.json()

    // document.querySelector('.projectsContainer').innerHTML = ""

    response.forEach((response) => {
        let div = document.createElement('div')
        div.className = "projectCard border-4 rounded-xl p-4 flex flex-col items-center gap-3 hover:scale-110 hover:bg-white transition-all cursor-pointer"
        div.id = response.name

        div.innerHTML = `
        <img src= "${response.image}" class="w-[350px] h-[200px]" alt="">
        <div class="projectName yellowText text-4xl font-bold text-yellow-300">${response.name}</div>
        <div class="projectLink bg-blue-500 p-3 rounded-lg font-bold text-lg hidden"><a target= "_blank" href="${response.link}">Visit Github</a></div>
        `
        document.querySelector('.projectsContainer').appendChild(div)
    })
}

getProjects()

document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault()
    document.querySelector('form').reset()
})

document.querySelector('.themeSwitch').addEventListener('click', () => {
    if (document.querySelector('.themeSwitchCircle').classList.contains("right-0")) {
        document.querySelector('.themeSwitchCircle').classList.remove("right-0")
        document.querySelector('.themeSwitchCircle').classList.add("left-0")
        document.querySelector('.themeSwitchBar').style.backgroundColor = "grey"
        document.querySelector('.themeName').innerHTML = "Light Mode"
        document.querySelector('.wholecontainer').style.color = "black"
        document.querySelector('.wholecontainer').style.backgroundColor = "white"

    }else{
        document.querySelector('.themeSwitchCircle').classList.add("right-0")
        document.querySelector('.themeSwitchCircle').classList.remove("left-0")
        document.querySelector('.themeSwitchBar').style.backgroundColor = "blue"
        document.querySelector('.themeName').innerHTML = "Dark Mode"
        document.querySelector('.wholecontainer').style.color = "white"
        document.querySelector('.wholecontainer').style.backgroundColor = "#0f172a"
    }
    
})

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.sideBar').style.right = "0"
})

document.querySelector('.cross').addEventListener('click', () => {
    document.querySelector('.sideBar').style.right = "-100%"
})