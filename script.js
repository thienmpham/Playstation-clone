let arrowUp = () => {
    let button = document.querySelector('.top-nav-category-container');
    let category1 = document.querySelector('#category1');
    let open = false;
    
    console.log(category1);
    
    button.addEventListener('click', () => {
        if(open){
            category1.className = 'category-image open';
        } else {
            
            category1.className = '.category-image';
        }

        open = !open;
    });

}

arrowUp();



    
