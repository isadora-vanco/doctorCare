window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add("scroll");
    }else{
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 1400){
        backToTopButton.classList.add("show");
    }else{
        backToTopButton.classList.remove("show");
    }
}

function openMenu(){
    document.body.classList.add("menu-expanded");
}

function closeMenu(){
    document.body.classList.remove("menu-expanded");
}

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
}).reveal(`#home, 
#home img, 
#home .stats,
#services,
#services header,
#services .cards,
#about,
#about header,
#about .content`);

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight /2;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionEndsAt = sectionTop + sectionHeight;
    
    const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute("id")}]`);

    menuElement.classList.remove("active");
    if(targetLine >= sectionTop && targetLine <= sectionEndsAt){
        menuElement.classList.add("active");
    }
}