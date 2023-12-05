let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');

console.log(topNavCategoryContainer.childElementCount)


for( let i = 0; i <= topNavCategoryContainer.childElementCount; i++) {
topNavCategoryContainer.addEventListener('click', (event) => {
    
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


for( let i = 0; i <= topNavCategoryContainer.childElementCount; i++) {
    let iconEffect = () => {
        let button = document.querySelector('.top-nav-category-container');
        let sonyIcon = document.querySelector('.top-nav-sony-icon');

        button.addEventListener('click', (event) => {
            let btnImage = event.target.closest('button').querySelector('.category-image');
        

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




