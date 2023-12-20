let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');


document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    const isTopNav = e.target.matches('.top-nav');
    // If the click is not a dropdown button and is inside a dropdown menu then do nothing 
 
    if (!isDropdownButton && e.target.closest('[data-dropdown]') && isTopNav !=null) return
    
    // Return nothing/ do not close dropdown menu  if top nav is clicked 
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
