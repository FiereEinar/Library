const domLibrary = document.querySelector('.cards');
const popup = document.querySelector('.popup');
const showButton = document.querySelector('.addBook');
const domAuthor = document.querySelector('#author');
const domTitle = document.querySelector('#title');
const domPublished = document.querySelector('#published');
const domDescription = document.querySelector('#description');


// let newBook;

const library = [];

function Book(author, title, published, description) {
    this.author = author;
    this.title = title;
    this.published = published;
    this.description = description;
    this.read = false;
}

function createBook() {
    const newBook = new Book(domAuthor.value, domTitle.value, domPublished.value, domDescription.value);
    addBookToLibrary(newBook);
    renderBook(library);
    console.log(library);
}

function addBookToLibrary(book) {
    library.push(book);
}

function renderBook(library) {
    let prev = domLibrary.querySelectorAll("div");
    prev.forEach((div) => div.remove());
    for (let i = 0; i <= library.length - 1; i++) {
        const book = document.createElement("div");
        book.classList.add('cardContainer');
        domLibrary.appendChild(book);
        //cards
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = i;
        book.appendChild(card);
        //delete button
        const deleteButton = document.createElement("button");
        // deleteButton.innerText("X");
        deleteButton.textContent = "delete";
        deleteButton.className = "deleteButton";
        deleteButton.addEventListener('click', () => {
            alert(card.id);
        });
        card.appendChild(deleteButton);
        //title
        const title = document.createElement("h2");
        title.innerText = library[i].title;
        card.appendChild(title);
        //author
        const author = document.createElement("p");
        author.innerText = library[i].author;
        card.appendChild(author);
        //published
        const published = document.createElement("h3");
        published.innerText = library[i].published;
        card.appendChild(published);
        //description
        const description = document.createElement("p");
        description.innerText = library[i].description;
        card.appendChild(description);
    }
}

// const deleteButton = document.querySelector('.deleteButton');

showButton.addEventListener('click', () => {
    popup.show();
});

// deleteButton.addEventListener('click', () => {
//     alert("deleted");
// });

// function test() {
//     alert(domAuthor.value);
// }

// const book1 = createBook('Nick', 'The Cunt', 1980);
// addBookToLibrary(book1);

// const book2 = createBook('RJ', 'Skibidi', 1950);
// addBookToLibrary(book2);

// const book3 = createBook('Lopez', 'Jokeron', 1669);
// addBookToLibrary(book3);

// const book4 = createBook('Zoid', 'Jokeron 2', 1420);
// addBookToLibrary(book4);

// renderBook(library);

// console.log(library);