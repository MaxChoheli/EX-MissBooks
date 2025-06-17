import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(BOOK_KEY).then(books => {
        if (!filterBy.title && !filterBy.maxPrice) return books

        return books.filter(book =>
            book.title.toLowerCase().includes(filterBy.title.toLowerCase()) &&
            book.listPrice.amount <= filterBy.maxPrice
        )
    })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getDefaultFilter() {
    return { title: '', maxPrice: 9999 }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = [
            {
                id: utilService.makeId(),
                title: 'metus hendrerit',
                description: 'placerat nisi sodales suscipit tellus',
                imgUrl: 'BooksImages/20.jpg',
                listPrice: {
                    amount: 109,
                    currencyCode: 'EUR',
                    isOnSale: false,
                },
            },
            {
                id: utilService.makeId(),
                title: 'React Essentials',
                description: 'Learn React from scratch with fun projects.',
                imgUrl: 'BooksImages/1.jpg',
                listPrice: {
                    amount: 120,
                    currencyCode: 'USD',
                    isOnSale: true,
                },
            },
            {
                id: utilService.makeId(),
                title: 'Mastering Angular',
                description: 'Deep dive into Angular and TypeScript.',
                imgUrl: 'BooksImages/3.jpg',
                listPrice: {
                    amount: 200,
                    currencyCode: 'USD',
                    isOnSale: false,
                },
            },
        ]
        utilService.saveToStorage(BOOK_KEY, books)
    }
}
