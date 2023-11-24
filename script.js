let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');

console.log(topNavCategoryContainer.childElementCount)


for( let i = 0; i < topNavCategoryContainer.childElementCount; i++) {
topNavCategoryContainer.addEventListener('click', (event) => {
    
    let btnImage = event.target.closest('button').querySelector('.category-image');

    if (btnImage.classList.contains('category-image-open')) {
        btnImage.classList.remove('category-image-open');
        console.log('works!');
    }
    else {
        btnImage.classList.add('category-image-open'); 
    }
})
}



let moveSonyIcon = () => {
    let button = document.querySelector('.top-nav-category-container');
    let open = false;
    let sonyIcon = document.querySelector('.top-nav-sony-icon');
    
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


