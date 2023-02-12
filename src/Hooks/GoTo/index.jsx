export function gotoHome(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'

    })
}

export function gotoAbout(){
    let About = document.getElementById('about__section')
    About.scrollIntoView({behavior: 'smooth', block: 'start'});
}

export function gotoTecnologies(){
    let Tecnologies = document.getElementById('tecnologies__section')
    Tecnologies.scrollIntoView({behavior: 'smooth', block: 'start'});
}