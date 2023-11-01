const domLibrary = document.querySelector('.cards');
const popup = document.querySelector('.popup');
const showButton = document.querySelector('.addBook');
const domAuthor = document.querySelector('#time');
const domTitle = document.querySelector('#title');
const domPublished = document.querySelector('#date');
const domDescription = document.querySelector('#diary');

let library = [];

class Book {
	constructor (author, title, published, description) {
	    this.author = author;
	    this.title = title;
	    this.published = published;
	    this.description = description;
	    this.favorite = false;
	}
}
//dummy books/diaries for testing purposes
generateBook(library);

function createBook() {
    const newBook = new Book(domAuthor.value, domTitle.value, domPublished.value, domDescription.value);
    addBookToLibrary(newBook);
    renderBook(library);
    console.log(library);
}
function addBookToLibrary(book) {
    library.push(book);
}
function updateLibrary(newlibrary) {
	library = newlibrary;
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
        deleteButton.id = i;
        library[i].id = i;
        
        //console.log(library[1].id);
        
        deleteButton.addEventListener('click', () => {
            //book.removeChild(card);
            //alert(deleteButton.id);
            library = library.filter((book) => book.id != deleteButton.id);
            updateLibrary(library);
            renderBook(library);
            //console.log(library);
            //console.log(deleteButton.id);
            //console.log(library[deleteButton.id].id);
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
        
        makeFavorite(i, card);
    }
}
function makeFavorite(index, card) {
	const favorite = document.createElement("button");
	favorite.textContent = 'favorite'
	if (library[index].favorite) {
		favorite.className = 'favorite';
	} else {
		favorite.className = 'notFavorite';
	}
	favorite.addEventListener('click', () => {
		library[index].favorite = !library[index].favorite;
		let prev = card.querySelector('.notFavorite, .favorite')
		prev.remove();
		makeFavorite(index, card);
	})
	card.appendChild(favorite);
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


//dummy cards
function generateBook() {
    const book1 = new Book('5:30', 'The Cunt', 1980, 'Curabitur urna purus, egestas sed sem ut, porta viverra tellus. Integer non quam lacus. Donec eu odio ac neque cursus dapibus. Nulla elementum metus at leo tincidunt, eget viverra arcu dictum. Phasellus in pharetra mauris, eu aliquam nisl. Aenean ornare rhoncus lectus, eget imperdiet dui iaculis sed. Phasellus laoreet vestibulum sem sit amet finibus. Phasellus accumsan, ante eu aliquam bibendum, lectus est varius nisl, non pretium leo justo et risus. Donec ut erat sit amet dui pharetra aliquam et vel nibh. Maecenas nec orci ac ante placerat pharetra. Quisque ac lacinia nisi.');
    addBookToLibrary(book1);

    const book2 = new Book('8:39', 'Skibidi', 1950, 'Maecenas vitae pulvinar quam, hendrerit cursus dolor. Morbi id interdum metus, non malesuada odio. Nunc nibh quam, viverra id enim ut, facilisis tempor tortor. Nullam pulvinar quam in luctus imperdiet. Aliquam ac sem et dui viverra feugiat. Integer pellentesque lacus est, sed luctus diam bibendum at. Suspendisse commodo massa nec lorem pellentesque luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie massa sed ultrices bibendum. Suspendisse justo nibh, finibus eget quam non, congue auctor nunc. Sed sed fermentum ex, eu varius ligula. Curabitur et mauris vehicula, mollis odio sit amet, imperdiet magna. Maecenas sed maximus enim.');
    addBookToLibrary(book2);

    const book3 = new Book('7:89', 'Dummy', 1669, 'Etiam pulvinar auctor eros, sed mollis mauris varius ut. Sed sollicitudin elit ut massa dignissim, sit amet rutrum neque ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque quis mauris sed ex congue commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis a diam lorem. Aenean at suscipit augue. Mauris nec lorem quis justo varius sagittis. Phasellus consectetur lobortis vestibulum. Vivamus rhoncus, enim id ultrices finibus, enim arcu consectetur lacus, sed ultrices felis mauris sed lacus. Maecenas cursus in tellus et posuere.');
    addBookToLibrary(book3);

    const book4 = new Book('9:26', 'More Dummy Diaries', 1420, 'Cras turpis nunc, elementum id arcu eget, dapibus aliquam magna. Nullam aliquet sed purus ut facilisis. Aliquam tempor ultricies lectus feugiat elementum. Etiam pellentesque ipsum condimentum finibus elementum. Mauris volutpat porttitor velit, in facilisis purus aliquam et. Pellentesque lacinia molestie odio in volutpat. Donec massa eros, lacinia vel ante sed, auctor congue felis. Morbi tincidunt, elit eget venenatis interdum, odio ligula pharetra justo, vitae maximus purus nunc sit amet sapien. Phasellus sed consequat mi. Integer justo erat, lacinia non consequat ut, congue et nulla. Vivamus dapibus varius mi non varius. Suspendisse non enim nulla. Sed a vulputate dolor. Cras euismod a sem vel consequat. Pellentesque vitae magna ultricies, molestie ex non, volutpat libero. Aliquam erat volutpat.');
    addBookToLibrary(book4);

    renderBook(library);
    console.log(library);
}

// console.log(library);