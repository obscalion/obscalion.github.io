const data = {
    "books": [
        {
            "title": "Filosofi Teras",
            "author": "Henry Manampiring",
            "ref": "https://www.goodreads.com/book/show/42861019-filosofi-teras"
        },
        {
            "title": "The Iliad",
            "author": "Homer",
            "ref": "https://www.goodreads.com/book/show/1371.The_Iliad"
        },
        {
            "title": "The Odyssey",
            "author": "Homer",
            "ref": "https://www.goodreads.com/book/show/1381.The_Odyssey"
        },
        {
            "title": "Animal Farm",
            "author": "George Orwell",
            "ref": "https://www.goodreads.com/book/show/170448.Animal_Farm"
        },
        {
            "title": "Don Quixote",
            "author": "Miguel de Cervantes",
            "ref": "https://www.goodreads.com/book/show/3836.Don_Quixote"
        }
    ]
}

const bookColor = ['blue-book', 'green-book', 'orange-book'];
let bookColorIndex = 0;

function renderBook() {
    let bukuFavorit = document.querySelector(".buku-favorit");
    
    for (let book of data.books) {

        if (bookColorIndex === 3) {
            bookColorIndex = 0;
        };

        let row = document.createElement('div');
        row.className = 'book';
        row.innerHTML = '<img class="book-thumbnail" src="assets/img/'+ bookColor[bookColorIndex] +'.png" alt="book"><div class="book-details"><a href="'+ book.ref +'" target="_blank"><span class="book-title">'+ book.title +'</span></a><span class="book-author">'+ book.author +'</span></div></div>'
    
        bukuFavorit.appendChild(row);
        bookColorIndex += 1;
   }
}

renderBook();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
