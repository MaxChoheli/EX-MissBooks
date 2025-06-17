import { bookService } from "../services/book.service.js"
import { LongTxt } from '../cmps/LongTxt.jsx'


const { useEffect, useState } = React

export function BookDetails({ bookId, onBack }) {
    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId).then(setBook)
    }, [])

    if (!book) return <div>Loading...</div>

    const pageCountDesc = book.pageCount > 500
        ? 'Serious Reading'
        : book.pageCount > 200
            ? 'Descent Reading'
            : book.pageCount < 100
                ? 'Light Reading'
                : ''

    const yearsSincePublished = new Date().getFullYear() - book.publishedDate
    const publishDesc = yearsSincePublished > 10
        ? 'Vintage'
        : yearsSincePublished < 1
            ? 'New'
            : ''

    const priceClass = book.listPrice.amount > 150
        ? 'expensive'
        : book.listPrice.amount < 20
            ? 'cheap'
            : ''

    return (
        <section className="book-details">
            <button onClick={onBack}>Back</button>
            <h1>{book.title}</h1>
            <LongTxt txt={book.description} />

            <img src={book.imgUrl} alt={book.title} />
            <p>
                Price: <span className={priceClass}>{book.listPrice.amount} {book.listPrice.currencyCode}</span>
            </p>
            {book.listPrice.isOnSale && <p style={{ color: 'red' }}>On Sale!</p>}
            {}
            <p>Page Count: {book.pageCount} – {pageCountDesc}</p>
            <p>Published: {book.publishedDate} {publishDesc && `– ${publishDesc}`}</p>
        </section>
    )
}
