"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var classes_1 = require("./classes");
var util = require("./lib/utilityFunctions");
function PrintBookInfo(_a) {
    var booktitle = _a.title, bookauthor = _a.author;
    console.log(booktitle + " was authored by " + bookauthor);
}
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
function LogFavoriteBooks(_a) {
    var book1 = _a[0], book2 = _a[1], others = _a.slice(2);
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}
// LogFavoriteBooks(util.GetAllBooks());
// let { title: booktitle, author: bookauthor } = book1;
// console.log(booktitle);
// console.log(bookauthor);
// PrintBookInfo(book1);
var schoolBooks = [
    {
        id: 10,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        available: true,
        category: enums_1.Category.Fiction
    },
    {
        id: 11,
        title: 'Crime and Punishment',
        author: 'Fyodoor Dostoevsky',
        available: true,
        category: enums_1.Category.Fiction
    },
    {
        id: 12,
        title: 'Clear Light of Day',
        author: 'Anita Desai',
        available: true,
        category: enums_1.Category.Fiction
    }
];
var booksRead = util.GetAllBooks();
booksRead.push.apply(booksRead, schoolBooks);
// console.log(booksRead);
var poets = ['Shelley', 'Collins', 'Hughes'];
var authors = ['Tolstoy', 'Fitzgerald'].concat(poets);
// console.log(authors);
// let catalogLocation: [string, Book] = ['A 123.456', book1];
// interface KeyValuePair<K, V> extends Array<K | V> {
//   0: K;
//   1: V;
// }
// let catalogLocation: KeyValuePair<string, Book> = ['A 123.456', book1];
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(classes_1.UniversityLibrarian, [classes_1.Employee, classes_1.Researcher]);
var newLibrarian = new classes_1.UniversityLibrarian();
//# sourceMappingURL=app.js.map