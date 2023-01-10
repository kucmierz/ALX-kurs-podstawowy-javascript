import { blogPosts } from "./blogpost";
import { ul_element, searchForm, searchInput, btnShowAllPosts } from "./elements";

// Dopisz funkcjonalnosc w JS, ktora bedzie dopisywala blog posty do HTML (samo renderowanie).

// Kazdy obiekt blogposta niech zawiera takie klucze
// poster, title, link, teaser

// Niech kazdy blog post ma inny obrazek i wlasciwosci




const addPost = (postElement) => {
    const newPost = `
    <li class="blogpost">
    <img src="${postElement.poster}">
    <div class="blogpost-content">
        <h4>#${postElement.category}</h4>
        <h2>${postElement.title}</h2>
        <p>${postElement.teaser}</p>
        <a href="${postElement.link}">See more</a>
    </div>
    </li>
    `;
    ul_element.innerHTML += newPost;
}

const showPosts = (posts) => {
    ul_element.innerHTML = '';
    posts.forEach(post => {
        addPost(post);
    })
}

showPosts(blogPosts);

// Stworz nad blogpostami wyszukiwarke po nazwie. Formularz niech zawiera jeden input search oraz button "Go". Po wcisnieciu guzika, przeszukaj blogposty i znajdz te, w ktorych tytul posiada slowo kluczowe

const searchPosts = (event) => {
    event.preventDefault();
    const searchingPhrase = searchInput.value.toLowerCase();
    const results = [];
    blogPosts.forEach(post => {
        if (post.title.toLowerCase().includes(searchingPhrase)) {
            results.push(post);
        }
    })
    showPosts(results);
}

const showAllPosts = () => {
    showPosts(blogPosts);
}

searchForm.addEventListener('submit', searchPosts);
btnShowAllPosts.addEventListener('click', showAllPosts);


// 1. Napisz funkcje o nazwie getUniqueCategories, ktora przyjmuje liste blogpostow i zwraca tablice zawierajaca kategorie.

// getUniqueCategories(blogposts) -> ['Zdrowie', 'Technologia', 'Pieniądze']

const getUniqueCategories = (myPostList) => {
    const categories = [];
    myPostList.forEach(post => {
        if (!categories.includes(post.category)) {
            categories.push(post.category);
        }
    })
    return categories;
}
// console.log(getUniqueCategories(blogPosts));

// 2. Mając tablicę pochodzącą z pierwszego zadania, za pomocą pętli stwórz listę kategorii w HTML

const divFilter = document.querySelector('.filters');

const addFilter = (filterElement) => {
    divFilter.innerHTML += `
        <label>
        <input type="checkbox" id="${filterElement}" class="checkbox"/>
        ${filterElement}
      </label>
    `;
}

const categories = getUniqueCategories(blogPosts);
categories.forEach(category => {
    addFilter(category);
})

// 3*. Obsłuz dzialanie checkboxów. W momencie w którym klikniesz na dany checkbox, mają się pojawić posty z tej kategorii.

const allCheckboxes = document.querySelectorAll('.checkbox');

const filtrHandle = (event) => {
    if (event.target.id !== '' && event.target.type === 'checkbox') {
        let filteredBlogPost = [];
        if (event.target.checked) {
            blogPosts.forEach(post => {
                if (post.category === event.target.id) {
                    filteredBlogPost.push(post);
                }
            })
        } else {
            filteredBlogPost = blogPosts;
        }
        showPosts(filteredBlogPost);
    }

}

const filterPosts = (selected) => { }

divFilter.addEventListener('click', filtrHandle);