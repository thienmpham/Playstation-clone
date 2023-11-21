let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');

topNavCategoryContainer.addEventListener('click', (event) => {
    let btnImage = event.target.closest('button').querySelector('.category-image');
    btnImage.classList.toggle('category-image-open'); 
    
    // let sonyIcon = event.target.closest('button').querySelector('.top-nav-sony-icon'); 
    // sonyIcon.classList.toggle('top-nav-sony-icon-open');
})

let moveSonyIcon = () => {
    let button = document.querySelector('.top-nav-category-container');
    let open = false;
    let sonyIcon = document.querySelector('.top-nav-sony-icon')
    
    button.addEventListener('click', () => {
        if(open) {
            sonyIcon.className = 'top-nav-sony-icon open';
        } else {
            sonyIcon.className = 'top-nav-sony-icon';
        }

        open = !open;
    })

}

 moveSonyIcon();
