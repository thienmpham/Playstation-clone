let topNavCategoryItem = document.querySelector('.top-nav-category-item');
let topNavCategoryContainer = document.querySelector('.top-nav-category-container');

let allImageItems = document.querySelectorAll('.image-gallery-items');

// On page load add class active and outline to first image gallery item
document.addEventListener('load', loadFirstItem());
function loadFirstItem() {
    
    let firstImageItem = allImageItems[0];
    firstImageItem.classList.add('active', 'outline')
    console.log(firstImageItem)
}
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




let allItems = document.querySelectorAll('.image-gallery-items');

// How to stop a loop on click 
// 1. Create loop with setInterval 
//// a. Create function that adds outline and active 

let setLoop;
function setActive() {
    let i = 0;
     setLoop = setInterval(function (){
        // Creates a local refrence of i 
        let currentItem = allItems[i];
        currentItem.classList.add('outline', 'active');
            // Set a timeout to remove outline and active after 
            setTimeout(function(){
                currentItem.classList.remove('outline', 'active');
            }, 5000)
        // increments i 
        i++;
        if (i === allItems.length){
            i = 0;
        }
        
    }, 5000)
}
setActive();


// 2. Create a function with clearInterval to stop the loop 
function stopLoop() {
    document.addEventListener("click", e => {
    const isImage = e.target.matches('.images');
    if(isImage){
            console.log('Stop loop!');
            clearInterval(setLoop);
    }
  })
}
stopLoop();





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
 let topNavItems = document.querySelectorAll('.top-nav-category-item');

 for( i=0; i < topNavItems.length; i++) {
    topNavItems[i].addEventListener('click', e => {
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
}

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


// slider gallery 

// On page load add class active and outline to first slider item
document.addEventListener('load', loadFirstSliderItem());

function loadFirstSliderItem() {
    let sliderItems = document.querySelectorAll('.slider-items');
    let nextButton1 = document.querySelector('#slider-main-button-1');
    let firstSliderItem = sliderItems[0];
    let miniButtons = document.querySelectorAll('.mini-buttons');
    firstSliderItem.classList.add('active', 'outline')
    miniButtons[0].classList.add('highlight')
    console.log(firstSliderItem);
    nextButton1.classList.add('opacity');
}
function addEventListenerList() {
    
    let sliderArrayItems = Array.from(document.querySelectorAll(".slider-items"));
    let index = 0;
    
        document.addEventListener('click', e => {
            let sliderImage = e.target.closest('.slider-items-images-container')
            let button1 = document.querySelector('#slider-main-button-1');
            let currentSliderItem = e.target.closest('.slider-items');
            let button2 = document.querySelector('#slider-main-button-2');
    
            let currentButton = e.target.closest('.slider-main-button-items');
            let allBtn = document.querySelectorAll('.slider-main-button-items.outline');
            let amount =  -index * 40;
            let allSlider = document.querySelectorAll('.slider-items-images-container');
            let allSliderArray = Array.from(allSlider);

            let descriptionArray = document.querySelectorAll('.slider-item-description');


            let miniButtons = document.querySelectorAll('.mini-buttons');
            let miniButtonsArray = Array.from(miniButtons);
            let currentMiniButton = e.target.closest('.mini-buttons')

            let sliderWrapper = document.querySelector('.slider-wrapper');

            
            // let miniButtonIndex = 0;

            if(currentMiniButton){
                // miniButtonIndex = miniButtonsArray.indexOf(currentMiniButton);
                index = miniButtonsArray.indexOf(currentMiniButton);
                currentMiniButton.classList.add('highlight')
                console.log(index)
                sliderArrayItems[index].classList.add('outline', 'active',);

                document.querySelectorAll('.slider-items.active').forEach(click => {
                    if (click ===  sliderArrayItems[index]) return
                    click.classList.remove('active', 'outline');  
                })        
            }

            
        

            // Removes all class highlight except for currentMiniButton
            document.querySelectorAll('.mini-buttons').forEach(mini => {
            if (mini === currentMiniButton ) return
               

            if((mini && currentMiniButton) || sliderImage){
                mini.classList.remove('highlight');
            }
            })

  

            if(sliderImage){
                currentSliderItem.classList.add('active');
                currentSliderItem.classList.add('outline');
                index = sliderArrayItems.indexOf(currentSliderItem);
                console.log(index); 
                miniButtonsArray[index].classList.add('highlight'); 
            }


            
            // Weird bug with sliderImage event listener click activating at same time as 
            // button1 or button2 click so !sliderImage in if statement is needed
    
            // 1st next button 
            if(button1 && !sliderImage && (e.target.id === 'slider-main-button-1' || e.target.id ==='arrow-1') && index > 0) {
                index = index - 1;
                sliderArrayItems[index].classList.add('outline', 'active',);
                sliderArrayItems[index + 1].classList.remove('outline', 'active');
                miniButtonsArray[index + 1]. classList.remove('highlight')
                console.log('1st');
                miniButtonsArray[index].classList.add('highlight'); 

                for(i=0; i < allSliderArray.length; i++) {
                    allSliderArray[i].style = `transform: translateX(${amount}%); transition: transform 0.7s ease;`;
                    descriptionArray[i].style = `transform: translateX(${amount}%); transition: transform 0.7s ease;`;
                }
       
               
            }
            // 2nd next button
            if(button2 && !sliderImage && (e.target.id === 'slider-main-button-2' || e.target.id ==='arrow-2') && index < 9) {
                index = index + 1;
                sliderArrayItems[index].classList.add('outline', 'active');
                sliderArrayItems[index - 1].classList.remove('outline', 'active');
                console.log('2nd');
                miniButtonsArray[index].classList.add('highlight'); 
                miniButtonsArray[index - 1]. classList.remove('highlight')



                for(i=0; i < allSliderArray.length; i++) {
                    allSliderArray[i].style = `transform: translateX(${amount}%); transition: transform 0.7s ease;`;
                    descriptionArray[i].style = `transform: translateX(${amount}%); transition: transform 0.7s ease;`;

                }
               
                
            }
            if((sliderImage || currentMiniButton) && (amount > -300) && index !== 0 && index !== 8) {
                for(i=0; i < allSliderArray.length; i++) {
                    allSliderArray[i].style = `transform: translateX(${amount}%); transition: transform 0.7s ease;`;
                    descriptionArray[i].style = `transform: translateX(${amount}%); transition: transform 0.7s ease;`;

                }
                
             
         
            }

            if (index === 1 || index === 2){ 
                for(i=0; i < allSliderArray.length; i++) {
                    allSliderArray[i].style = `transform: translateX(-40%); transition: transform 0.7s ease;`;
                    descriptionArray[i].style = `transform: translateX(-40%); transition: transform 0.7s ease;`;
                }
            }

            if( index === 7 || index === 6){ 
                for(i=0; i < allSliderArray.length; i++) {
                    allSliderArray[i].style = `transform: translateX(-280%); transition: transform 0.7s ease;`;
                    descriptionArray[i].style = `transform: translateX(-280%); transition: transform 0.7s ease;`;

                }
            }
            
            if (index >= 4 ){
                allSliderArray.style =  'transform: translateX(-40%)';
                descriptionArray.style =  'transform: translateX(-40%)';
            }

            // Lower opacity of next buttons
            if(index === 0){
                button1.classList.add('opacity');
                for(i=0; i < allSliderArray.length; i++) {
                    allSliderArray[i].style = `transform: translateX(0); transition: transform 0.7s ease;`;
                    descriptionArray[i].style = `transform: translateX(0); transition: transform 0.7s ease;`;
                }
            }
            if(index === 8){
                button2.classList.add('opacity');
                for(i=0; i < allSliderArray.length; i++) {
                    allSliderArray[i].style = `transform: translateX(-310%); transition: transform 0.7s ease;`;
                    descriptionArray[i].style = `transform: translateX(-310%); transition: transform 0.7s ease;`;

                }
            }
           
            if(button1.classList.contains('opacity') && index > 0){
                button1.classList.remove('opacity');
            }
            if(button2.classList.contains('opacity') && index < 8){
                button2.classList.remove('opacity');
            }
            
           if(currentButton){
            currentButton.classList.add('outline', 'active');
            
           }
            allBtn.forEach(click => {
                if (click === currentButton) return
                click.classList.remove('outline');
            })

            // Closes every gallery except current one 
        document.querySelectorAll('.slider-items.active').forEach(click => {
            if (click === currentSliderItem || button1 && !sliderImage ) return
            click.classList.remove('active', 'outline');
        })
        })
        
}
addEventListenerList();

function gameGalleryMouseOver() {
    let gameGallery = document.querySelectorAll('.game-gallery-items');
    let gameGalleryArray = Array.from(gameGallery);
    for( let i=0; i < gameGalleryArray.length; i++) {
        gameGalleryArray[i].addEventListener('mouseover', (e) => {
            let  currentGameGalleryItem = e.target.closest('.game-gallery-items');
            if(gameGalleryArray){
                for(i = 0; i < gameGalleryArray.length; i++){
                    gameGalleryArray[i].classList.add('opacity');
                }
                currentGameGalleryItem.classList.remove('opacity');
            }
        })
    }
}
gameGalleryMouseOver();

function gameGalleryMouseOut(){
    let gameGallery = document.querySelectorAll('.game-gallery-items');
    let gameGalleryArray = Array.from(gameGallery);
    for( let i=0; i < gameGalleryArray.length; i++) {
        gameGalleryArray[i].addEventListener('mouseout', (e) => {
            if(gameGalleryArray){
                for(i = 0; i < gameGalleryArray.length; i++){
                    gameGalleryArray[i].classList.remove('opacity');
                }
            }
        })
    }
}
gameGalleryMouseOut();

function gameGalleryActive(){
    let buttonChoiceContainer = document.querySelector('.game-gallery-buttons-container');
    let newReleases = document.querySelector('#new-releases-choice');
    let comingSoon = document.querySelector('#coming-soon-choice');

    buttonChoiceContainer.addEventListener('click', e => {
        let currentButtonChoice = e.target.closest('.game-gallery-button-choice');
    
        if (currentButtonChoice){
            console.log(currentButtonChoice)
            currentButtonChoice.classList.add('active');
        }

           // Closes every game gallery except current one 
           document.querySelectorAll('.game-gallery-button-choice.active').forEach(click => {
            if (click === currentButtonChoice) return
            click.classList.remove('active');
            console.log(click)
        })
    })
}
gameGalleryActive();