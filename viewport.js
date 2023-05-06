const elemento = document.querySelector(' .servicios');

function viewPort(elem){
    const rect = elem.getBoundingClientRect();
    return( 
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=  (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function scroll(){
    if( viewPort(elemento)){
        elemento.classList.add('aparecer');
        removeEventListener('scroll', scroll);
    }
}
window.addEventListener(' scroll ', scroll);