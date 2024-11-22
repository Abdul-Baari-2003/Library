class Books{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    }
}

class Library{

    constructor(){
        this.books = [];
    }

    addBookToLibrary(book){
        this.books.push(book);
    }

    removeBook(index){
        this.books.splice(index, 1);
        
    }

    displayBooks(){
        const libraryContainer = document.getElementById('library');
        libraryContainer.innerHTML = '';
        this.books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
            <p>${book.title} by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read}</p>
            <button onclick="library.removeBook(${index})">Remove</button>
        `;
        libraryContainer.appendChild(bookElement);
    });
    }

}

const library = new Library();

function handleFormSubmit(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('readStatus').value;


    const newBook  = new Books(title, author, pages, read);
   // const newBook = new Book(title, author, pages, read);
    library.addBookToLibrary(newBook);
    library.displayBooks();    
}

/*function addBookToLibrary(book){
    myLibrary.push(book);
}
*/


/*function displayBooks(){
    const libraryContainer = document.getElementById('library');
    libraryContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
            <p>${book.title} by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read}</p>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        libraryContainer.appendChild(bookElement);
    });
}*/

/*function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}*/
