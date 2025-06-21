const { useState } = React

export function AddReview({ onAddReview }) {
    const [review, setReview] = useState({
        fullname: '',
        rating: 5,
        readAt: ''
    })

    function handleChange({ target }) {
        const { name, value } = target
        setReview(prev => ({ ...prev, [name]: value }))
    }

    function onSubmit(ev) {
        ev.preventDefault()
        onAddReview(review)
        setReview({ fullname: '', rating: 5, readAt: '' })
    }

    return (
        <section className="add-review">
            <h2>Add Review</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="fullname"
                        value={review.fullname}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Rating:
                    <select
                        name="rating"
                        value={review.rating}
                        onChange={handleChange}
                    >
                        {[1, 2, 3, 4, 5].map(star =>
                            <option key={star} value={star}>{star}</option>
                        )}
                    </select>
                </label>

                <label>
                    Read At:
                    <input
                        type="date"
                        name="readAt"
                        value={review.readAt}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button>Add</button>
            </form>
        </section>
    )
}
