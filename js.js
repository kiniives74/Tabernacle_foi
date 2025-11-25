const  images = document.querySelectorAll('#galery img');
let imgActive = 0;
images[imgActive].classList.add('show');
//masquer de la deuxième images
for(let i=1; i<images.length;i++){

    images[i].classList.add('hidden');
}

//clik sur le bouton suivant

const iv = document.querySelector('#next').addEventListener('click',()=>{

    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive = imgActive + 1;

    if(imgActive >= images.length){

        imgActive = 0;
    }

    images[imgActive].classList.remove('hidden');
    setTimeout(()=>{

        images[imgActive].classList.add('show');
    },300);
    
});




//clik sur le bouton précécent

const prev = document.querySelector('#prev').addEventListener('click',()=>{

    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive = imgActive - 1;

    if(imgActive < 0){

        imgActive = images.length -1;
    }

    images[imgActive].classList.remove('hidden');
    setTimeout(()=>{

        images[imgActive].classList.add('show');
    },300);
    
});