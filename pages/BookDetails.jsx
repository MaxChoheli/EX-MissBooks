import { bookService } from "../services/book.service.js"

const { useEffect, useState } = React

export function BookDetails({ bookId, onBack }) {
    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId).then(setBook)
    }, [])

    if (!book) return <div>Loading...</div>

    return (
        <section className="book-details">
            <button onClick={onBack}>Back</button>
            <h1>{book.title}</h1>
            <h5>{book.description}</h5>
            <img src={book.imgUrl} alt={book.title} />
            <p>
                Price: {book.listPrice.amount} {book.listPrice.currencyCode}
            </p>
            {book.listPrice.isOnSale && <p style={{ color: 'red' }}>On Sale!</p>}
        </section>
    )
}
