

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg'),
      listFilm = document.querySelector('.promo__interactive-list'),
      formInput = document.querySelector('.add'),
      checkbox = formInput.querySelector('[type="checkbox"]'),
      input = formInput.querySelector('.adding__input');
      



function deleteAdv(arr){
    arr.forEach(item => {
        item.remove();
    });
}
function makeChange(){
    genre.textContent = 'драма';
    bg.style.backgroundImage = 'url("img/bg.jpg")';
}
function sortArr(arr){
    arr.sort();
}

function createFilm(film, parent){
    parent.innerHTML = '';
    sortArr(movieDB.movies);
    film.forEach((item, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
        </li>   
        `;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () =>{
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createFilm(movieDB.movies, listFilm);
        });
    });
}



formInput.addEventListener('submit', (e) => {
    e.preventDefault();

    let newFilm = input.value;
    const check = checkbox.checked;

    if(newFilm ){
        if(newFilm.length > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
        
        }
            movieDB.movies.push(newFilm);
            createFilm(movieDB.movies, listFilm);
        
    }
    e.target.reset();
    if(check){
        console.log('Любимый фильм');
    }
});


deleteAdv(adv);
makeChange();
createFilm(movieDB.movies, listFilm);
