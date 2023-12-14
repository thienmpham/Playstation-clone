let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');


document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    
    // If the click is not a dropdown button and is inside a dropdown menu then do nothing 
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !=null) return

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
    let name = document.querySelectorAll('.category-name');
    let image = document.querySelectorAll('.category-image')
    let dropdownImages = e.target.closest('.dropdown-images');

        if (isButton.classList.contains('active')){
            sonyIcon.classList.add('active');
            name.forEach(names => {
                names.classList.add('active');
            })

            image.forEach(images => {
                images.classList.add('resize');
            })

            // dropdownImages.forEach(dropImages => {
            // dropImages.classList.add('active');
            // })
        
        }  
        else {
            sonyIcon.classList.remove('active');
            name.forEach( names => {
                names.classList.remove('active');
            })

            image.forEach (images => {
                images.classList.remove('resize');
            })
        }
})
