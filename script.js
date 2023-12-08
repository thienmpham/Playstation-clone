let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');

console.log(topNavCategoryContainer.childElementCount)


for( let i = 0; i <= topNavCategoryContainer.childElementCount; i++) {
document.addEventListener('click', (event) => {
    
    let btnImage = event.target.closest('button').querySelector('.category-image');
    let openImage = document.querySelector('.category-image-open');
    let btnText = event.target.closest('button').querySelector('.category-name');
    let blueText = document.querySelector('.top-nav-category-blue');
    
    if (btnImage.classList.contains('category-image-open')) {
        btnImage.classList.remove('category-image-open');
        btnText.classList.remove('top-nav-category-blue');

    }
    else {
        try {
        // If an element is already open, close it
            openImage.classList.remove('category-image-open');
            blueText.classList.remove('top-nav-category-blue');
        }
        catch (error){
        }
        // Add .category-image-open if btnImgae does not contain .category-image-open
        btnImage.classList.add('category-image-open'); 
        btnText.classList.add('top-nav-category-blue');
    }
})

}


for ( let i = 0; i <= topNavCategoryContainer.childElementCount; i++) {
    let iconEffect = () => {
        // let button = document.querySelector('.top-nav-category-button');
        
        let sonyIcon = document.querySelector('.top-nav-sony-icon');

        document.addEventListener('click', (event) => {
            let btnImage = event.target.closest('button').querySelector('.category-image');
            let button = event.target.matches('top-nav-category-button');
        

            if(btnImage.classList.contains('category-image-open')) {
                sonyIcon.className = 'top-nav-sony-icon open';
                button.classList.add('top-nav-category-fontsize');
                

            } else {
                sonyIcon.className = 'top-nav-sony-icon';
                button.classList.remove('top-nav-category-fontsize');
            
            }
        })

    }
iconEffect();
}




document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    
    // If the click is not a dropdown button and is inside a dropdown menu then do nothing 
    if (!isDropdownButton && e.target.closest('[]') !=null) return

    let currentDropdown;
    if(isDropdownButton) {
       currentDropdown = e.target.closest('[data-dropdown]');
       currentDropdown.classList.toggle('active');
       console.log('click!');
    }
    
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active');
    })

})