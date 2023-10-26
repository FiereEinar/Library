const domLibrary = document.querySelector('.cards');

const library = [];

function Book(author, title, published) {
    this.author = author;
    this.title = title;
    this.published = published;
    this.read = false;
}

function createBook(author, title, published) {
    return newBook = new Book(author, title, published)
}

function addBookToLibrary(newBook) {
    library.push(newBook);
}

const book1 = createBook('Nick', 'The Cunt', 1980);
addBookToLibrary(book1);

const book2 = createBook('RJ', 'Skibidi', 1950);
addBookToLibrary(book2);

// console.log(library);

function renderBook(library) {
    let counter = 0;
    for (let i = 1; i <= library.length; i++) {
        const book = document.createElement("div");
        book.classList.add('bookCard');
        domLibrary.appendChild(book);
        //title
        const title = document.createElement("h2");
        title.innerText = library[counter].title;
        book.appendChild(title);
        //author
        const author = document.createElement("p");
        author.innerText = library[counter].author;
        book.appendChild(author);
        //published
        const published = document.createElement("h3");
        published.innerText = library[counter].published;
        book.appendChild(published);

        counter++;
    }
}

renderBook(library);