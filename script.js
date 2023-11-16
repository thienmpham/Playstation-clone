let topNavCategoryContainer = document.querySelector('.top-nav-category-container');

topNavCategoryContainer.addEventListener('click', (event) => {
    let btn = event.target.closest('button');

    if( !btn) return; // return nothing if event.target is not inside any button
    



})

let arrowMove = () => {

}


let arrowUp = () => {
    let button = document.querySelector('.top-nav-category-container');
    let category = document.querySelector('.category-image');
    let open = false;
    let sonyIcon = document.querySelector('.top-nav-sony-icon')
    
    button.addEventListener('click', () => {
        if(open) {
            category.className = 'category-image open';
            sonyIcon.className = 'top-nav-sony-icon open';
        } else {
            category.className = '.category-image';
            sonyIcon.className = 'top-nav-sony-icon';

        }

        open = !open;
    });

}

arrowUp();



    
