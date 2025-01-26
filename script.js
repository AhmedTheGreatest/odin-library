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