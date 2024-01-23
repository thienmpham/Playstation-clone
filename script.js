let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');


// Image gallery 
document.addEventListener('click', e => {
    const imageGallery = e.target.closest('.image-gallery-items')
    const isImage = e.target.matches('.images');
    const currentImage = e.target.closest('.image-gallery-items');
    if(!isImage) return;
    if(isImage) {
        imageGallery.classList.add('outline');
        imageGallery.classList.add('active');
    }
    // Closes out all gallery items except current one 
    document.querySelectorAll('.image-gallery-items').forEach(image => {
        if( image === currentImage) return
        image.classList.remove('outline');
        image.classList.remove('active');
    })

    
    
})
window.addEventListener('load', () => {

    let allItems = document.querySelectorAll('.image-gallery-items');
        allItems.forEach((obj, index) => {
            setTimeout(() => {
                obj.classList.toggle('outline');
                obj.classList.toggle('active');
                console.log(index)
            }, 2000 * (index + 1));

            // setTimeout(() => {
            //     obj.classList.remove('active');
            //     obj.classList.remove('outline')
            //     console.log('removed')
            // }, 2000 * (index + 1));

    });
    allItems.classList.remove('active')
})
// Top Nav 
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    const isTopNav = e.target.matches('.top-nav');
    // If the click is not a dropdown button and is inside a dropdown menu then do nothing 
 
    if (!isDropdownButton && e.target.closest('[data-dropdown]') && isTopNav !=null) return
    
    // Return nothing / do not close dropdown menu  if top nav is clicked 
    if(isTopNav)return 
    
    let currentDropdown;
    if(isDropdownButton) {
       // Closes dropdown menu and also toggle adds active class to any children of data-dropdown
       currentDropdown = e.target.closest('[data-dropdown]');
       currentDropdown.classList.toggle('active');
   

    }
    
    
    // Closes all of dropdowns except current one 
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active');
        
    })
})

document.addEventListener('click', e => {
    let sonyIcon = document.querySelector('.top-nav-sony-icon');
    let isButton = e.target.closest('.top-nav-category-item');
    let allButton = document.querySelectorAll('.top-nav-category-item')
    let name = document.querySelectorAll('.category-name');
    let image = document.querySelectorAll('.category-image')
    let dropdown = document.querySelectorAll('.top-nav-dropdown-menu');

        if (isButton.classList.contains('active')){

            sonyIcon.classList.add('active');
            name.forEach(names => {
                names.classList.add('active');
            })

            image.forEach(images => {
                images.classList.add('resize');
            })
            
            dropdown.forEach(dropdowns => {
                dropdowns.classList.remove('transition');
            })

        }  
        else {
            sonyIcon.classList.remove('active');
            name.forEach( names => {
                names.classList.remove('active');
            })

            image.forEach (images => {
                images.classList.remove('resize');
            })
            
            dropdown.forEach(dropdowns => {
                dropdowns.classList.add('transition'); 
            })

            
        }

        
})

document.addEventListener('click', e => {
    const isSearch = e.target.matches('#search-img');
    
    // If click is not search button and is inside of dropdown menu then do not do anything
    if(!isSearch && e.target.closest('.dropdown-menu-search')!=null)return

    let dropDown = document.querySelector('.dropdown-menu-search');
    let overlay = document.querySelector('.overlay');
    if(isSearch){ 
        dropDown.classList.toggle('active');
        overlay.classList.add('active');
    }
    
    // Close dropdown menu if clicked outside 
    if(!isSearch){
        dropDown.classList.remove('active');
        overlay.classList.remove('active');
    }

})

// Changes top nav bar fixed position based on 
// position of scrollbar
addEventListener('scroll', e => {
    let topNav = document.querySelector('.top-nav');
    let scroll = window.scrollY;
    if (scroll > 40) {
        topNav.classList.add('fixed');
    }
    else {
        topNav.classList.remove('fixed');
    }
})

