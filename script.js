let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');


// for ( let i = 0; i <= topNavCategoryContainer.childElementCount; i++) {
//     let iconEffect = () => {
//         // let button = document.querySelector('.top-nav-category-button');
        
//         let sonyIcon = document.querySelector('.top-nav-sony-icon');

//         document.addEventListener('click', (event) => {
//             let btnImage = event.target.closest('button').querySelector('.category-image');
//             let button = event.target.matches('top-nav-category-button');
        

//             if(btnImage.classList.contains('category-image-open')) {
//                 sonyIcon.className = 'top-nav-sony-icon open';
//                 button.classList.add('top-nav-category-fontsize');
                

//             } else {
//                 sonyIcon.className = 'top-nav-sony-icon';
//                 button.classList.remove('top-nav-category-fontsize');
            
//             }
//         })

//     }
// iconEffect();
// }




document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    
    // If the click is not a dropdown button and is inside a dropdown menu then do nothing 
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !=null) return

    let currentDropdown;
    let sonyIcon = document.querySelector('.top-nav-sony-icon');
    if(isDropdownButton) {
       // Closes dropdown menu and also toggle adds active class to any children of data-dropdown
       currentDropdown = e.target.closest('[data-dropdown]');
       currentDropdown.classList.toggle('active');

    
       sonyIcon.classList.add('active');
       

    }
    
    
    // Closes all of dropdowns except current one 
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active');
        
        if(!dropdown.classList.contains('active')) {
            sonyIcon.classList.remove('active');
        }
        
    })
})

