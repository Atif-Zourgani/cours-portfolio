const sections = document.querySelectorAll('.sectionContainer');
const articles = document.querySelectorAll('.articleContainer');
const buttonCloseModals = document.querySelectorAll('.ButtonCloseModal');

function openCloseModals(articleEvent){
    for (let i = 0; i < articles.length; i++){
        if(!articles[i].classList.contains('displayNone')){
            articles[i].classList.remove('articlesOn');
            articles[i].classList.add('articlesOff');
            setTimeout(function() {
                articles[i].classList.add('displayNone');
                articles[i].classList.add('articlesOn');
                articles[i].classList.remove('articlesOff');
            }, 900);
            if(i == articleEvent){
                return;
            } 
        }
    }
    if(articleEvent === 'closes'){
        return;
    }else{
        articles[articleEvent].classList.toggle('displayNone');
    }
    
}

function elementInCollection(element, collection) {
    return Array.from(collection).some(item => item === element);
}

sections.forEach((section, i) => {
    section.addEventListener('click', () => {
        openCloseModals(i);
    });
});

buttonCloseModals.forEach((button, i) => {
    button.addEventListener('click', function() {
        openCloseModals(i)
    });
});

window.addEventListener('click', (e)=>{
    const clickedElement = e.target;

    const isOutsideCollections = !elementInCollection(clickedElement, articles) && !elementInCollection(clickedElement, sections);

    if (isOutsideCollections) {
        openCloseModals('closes');
    }
})