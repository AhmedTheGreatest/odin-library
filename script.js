const library = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read
  }
}

function addBookToLibrary(title, author, pages, read) {
  book = new Book(title, author, pages, read);
  library.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 423, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 200, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 200, false);

function displayBooks(books) {
  const template = document.querySelector('#book-template');
  const booksContainer = document.querySelector('#books');

  booksContainer.innerHTML = '';

  books.forEach((book, index) => {
    const bookElement = template.content.cloneNode(true);
    bookElement.querySelector('.book-title').textContent = book.title;
    bookElement.querySelector('.book-author').textContent = book.author;
    bookElement.querySelector('.book-pages').textContent = book.pages;
    
    bookElement.querySelector('.book-read-label').textContent = book.read ? 'Read' : 'Not read yet';
    let readBtn = bookElement.querySelector('.book-read')
    readBtn.dataset.index = index;
    readBtn.checked = book.read;
    readBtn.addEventListener('change', toggleRead);

    let removeBtn = bookElement.querySelector('.book-remove');
    removeBtn.dataset.index = index;
    removeBtn.addEventListener('click', removeBook);
    booksContainer.appendChild(bookElement);
  });
}

function removeBook(event) {
  const index = event.currentTarget.dataset.index;
  library.splice(index, 1);
  displayBooks(library);
}

function toggleRead(event) {
  const index = event.currentTarget.dataset.index;
  library[index].toggleRead();
  displayBooks(library);
}

displayBooks(library);

document.querySelector('.book-form-submit').addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  addBookToLibrary(title, author, pages, read);
  displayBooks(library);
});


document.querySelector('.new-book-btn').addEventListener('click', () => {
  document.querySelector('#book-form-modal').showModal();
})