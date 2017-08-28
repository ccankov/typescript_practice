interface IBook {
  id: number,
  title: string,
  author: string,
  available: boolean,
  category: Category
}

function GetAllBooks() {
  let books = [
    { 
      id: 1,
      title: 'Ulysses', 
      author: 'James Joyce', 
      available: true,
      category: Category.Fiction
    },
    { 
      id: 2,
      title: 'A Farewell to Arms', 
      author: 'Ernest Hemingway', 
      available: false,
      category: Category.Fiction
    },
    { 
      id: 3,
      title: 'I Know Why the Caged Bird Sings', 
      author: 'Maya Angelou', 
      available: true,
      category: Category.Poetry
    },
    {
      id: 4,
      title: 'Moby Dick', 
      author: 'Herman Melville', 
      available: true,
      category: Category.Fiction
    }
  ];

  return books;
}

function LogFirstAvailable(books: IBook[] = GetAllBooks()): void {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';

  for(let currentBook of books) {
    if (currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log('Total books: ' + numberOfBooks);
  console.log('First Available: ' + firstAvailable);
}

enum Category { Biography, Poetry, Fiction, History, Children }

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {

  console.log('Getting books in category: ' + Category[categoryFilter]);

  const allBooks = GetAllBooks();
  const filteredTitles: string[] = [];
  
  for(let currentBook of allBooks) {
    if(currentBook.category === categoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }

  return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
  for(let title of titles) {
    console.log(title);
  }
}

function GetBookById(id: number) {
  const allBooks = GetAllBooks();
  return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerId(name: string, id: number): string {
  return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
  console.log('Creating customer ' + name);

  if(age) {
    console.log('Age: ' + age);
  }

  if(city) {
    console.log('City: ' + city);
  }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log('Checking out books for ' + customer);

  let booksCheckedOut: string[] = [];

  for(let id of bookIDs) {
    let book = GetBookById(id);
    if (book.available) {
      booksCheckedOut.push(book.title);
    }
  }

  return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
  const allBooks = GetAllBooks();
  const foundTitles: string[] = [];
  
  if(typeof bookProperty == 'string') {
    // get all books by a particular author
    for(let book of allBooks) {
      if(book.author === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  }

  if(typeof bookProperty == 'boolean') {
    // get all books based on specified availability
    for(let book of allBooks) {
      if(book.available === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  }

  return foundTitles;
}

//****************************//

let checkedOutBooks = GetTitles(false);
checkedOutBooks.forEach(title => console.log(title));

// let myBooks: string[] = CheckoutBooks('Thorne', 1, 3, 4);
// myBooks.forEach(title => console.log(title));

// LogFirstAvailable();

// let fictionBooks = GetBookTitlesByCategory();
// LogBookTitles(fictionBooks);

//CreateCustomer('Michelle');
// CreateCustomer('Leigh', 6);
// CreateCustomer('Marie', 12, 'Atlanta');$

// let x: number;
// x = 5;

// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = CreateCustomerId;

// let myID: string = IdGenerator('daniel', 10);
// console.log(myID);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val)) ;