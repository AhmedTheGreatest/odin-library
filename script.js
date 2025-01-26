const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  // this.info = () => {
  //   return `${title} by ${author}, ${pages} pages, ${read ? 'already read' : 'not read yet'}`;
  // }
}

function addBookToLibrary(title, author, pages, read) {
  book = new Book(title, author, pages, read);
  library.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 423, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 200, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 200, false);

function displayBooks() {
  const template = document.querySelector('#book-template');
  const booksContainer = document.querySelector('#books')

  library.forEach(book => {
    const bookElement = template.content.cloneNode(true);
    bookElement.querySelector('.book-title').textContent = book.title;
    bookElement.querySelector('.book-author').textContent = book.author;
    bookElement.querySelector('.book-pages').textContent = book.pages;
    bookElement.querySelector('.book-read').textContent = book.read ? 'Read' : 'Not read yet';
    booksContainer.appendChild(bookElement);
  });
}

displayBooks();