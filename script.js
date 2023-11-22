let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');
console.log(topNavCategoryContainer.length)

topNavCategoryContainer.addEventListener('click', (event) => {
    if (!topNavCategoryItem.classList.contains('category-container-open')) {  // Added to hide dropdown if clicking on the one already open
        for ( let i = 0; i < topNavCategoryContainer.length; i++ ) {
          topNavCategoryItem[i].classList.remove('category-container-open');
        }
      }

    let btnImage = event.target.closest('button').querySelector('.category-image');
    btnImage.classList.toggle('category-image-open'); 
    
    // let sonyIcon = event.target.closest('button').querySelector('.top-nav-sony-icon'); 
    // sonyIcon.classList.toggle('top-nav-sony-icon-open');
})

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


