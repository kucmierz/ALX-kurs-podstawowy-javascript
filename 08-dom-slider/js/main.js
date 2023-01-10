const myImages = [
    'https://cdns-images.dzcdn.net/images/artist/6ff9de6478cd22bfba30b279d72ea980/500x500.jpg',
    'https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&w=900',
    'https://ucarecdn.com/01292099-b782-4b74-a05e-f902be3feecd/',
    'https://www.turn-on.de/media/cache/article_images/media/cms/2018/06/Der-Hobbit-picture-alliance-Everett-Collection-92908060-.jpg?356188'
];

const imgSlider = document.querySelector('img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const body = document.querySelector('body');
let imageIndex = 0;

const laodImage = () => {
    imgSlider.setAttribute('src', myImages[imageIndex]);
    console.log(imageIndex);
}

const prevImage = () => {
    if (imageIndex > 0) {
        imageIndex--;
        laodImage();
    }
}
const nextImage = () => {
    if (imageIndex < myImages.length - 1) {
        imageIndex++;
        laodImage();
    }
}

body.addEventListener('load', laodImage(myImages[0]));
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// document.onload = laodImage(myImages[0]);