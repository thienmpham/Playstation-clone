let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');

console.log(topNavCategoryContainer.childElementCount)


for( let i = 0; i <= topNavCategoryContainer.childElementCount; i++) {
topNavCategoryContainer.addEventListener('click', (event) => {
    
    let btnImage = event.target.closest('button').querySelector('.category-image');
    let openImage = document.querySelector('.category-image-open');

    if (btnImage.classList.contains('category-image-open')) {
        btnImage.classList.remove('category-image-open');

    }
    else {
        try {
        // If an element is already open, close it
            openImage.classList.remove('category-image-open');
            console.log(category-image-open);
        }
        catch (error){
        }
        // Add .category-image-open if btnImgae does not contain .category-image-open
        btnImage.classList.add('category-image-open'); 
    }
})

}



let iconEffect = () => {
    let button = document.querySelector('.top-nav-category-container');
    let item = document.querySelector('.top-nav-category-item');
    let open = false;
    let sonyIcon = document.querySelector('.top-nav-sony-icon');
    
    button.addEventListener('click', () => {
        if(!open) {
            sonyIcon.className = 'top-nav-sony-icon open';
            button.classList.add('top-nav-category-fontsize')

        } else {
            sonyIcon.className = 'top-nav-sony-icon';
            button.classList.remove('top-nav-category-fontsize')
        }

        open = !open;
    })

}

 iconEffect();



