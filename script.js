let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container')

topNavCategoryContainer.addEventListener('click', (event) => {
    let btnImage = event.target.closest('.category-image');
    btnImage.classList.toggle('category-image-open'); 
    // btnImage.classList.toggle('top-nav-sony-icon-open');
    
    
    
})


// let moveArrow = () => {
//     let category = document.querySelector('.category-image');
//     let sonyIcon = document.querySelector('.top-nav-sony-icon');
//     let open = false;

//     if(open) {
//         category.className = 'category-image open';
//         sonyIcon.className = 'top-nav-sony-icon open';
//     } else {
//         category.className = 'category-image';
//         sonyIcon.className = 'top-nav-sony-icon';

//         }

//         open = !open;
// }

// let arrowUp = () => {
//     let button = document.querySelector('.top-nav-category-item');
//     let category = document.querySelector('.category-image');
//     let open = false;
//     let sonyIcon = document.querySelector('.top-nav-sony-icon');
    
//     button.addEventListener('click', () => {
//         if(open) {
//             category.className = 'category-image open';
//             sonyIcon.className = 'top-nav-sony-icon open';
//         } else {
//             category.className = '.category-image';
//             sonyIcon.className = 'top-nav-sony-icon';

//         }

//         open = !open;
//     });

// }

// arrowUp();



    
