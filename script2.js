class Books{

    constructor(title, author, page, read){
        this.title = title;
        this.author = author;
        this.page = page;
        this.read = read;
    }

    info() {
        console.log(`${this.title} by ${this.author}, ${this.page} pages, ${this.read}`);
    }

}

class Library{

    constructor(){
        this.books = [];
    }

    addBookToLibrary(book){
        this.books.push(book);
    }

    removeBook(index) {
        this.books.splice(index, 1);
        this.displayBooks();
    }

    displayBooks(){
        const bookStore = document.getElementById('book-info');
        bookStore.innerHTML = '';
        this.books.forEach((book, index) => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book';
            bookElement.innerHTML = `
                <p>${book.title} by ${book.author}</p>
                <p>${book.page} pages</p>
                <p>${book.read}</p>
                <button onclick="library.removeBook(${index})">Remove</button>
            `;
            bookStore.appendChild(bookElement);
        });
    }
}

const library = new Library();

function handleFormSubmit(){
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('readStatus').value;

    if (title === '' || author === '' || pages === '') {
        alert("Please fill in all the fields.");
        return;
    }

    const newBook  = new Books(title, author, pages, read);
    library.addBookToLibrary(newBook);
    library.displayBooks();
    
    document.getElementById('book-form').reset();
}