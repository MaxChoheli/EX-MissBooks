const { useState, useEffect } = React

export function BookFilter({ defaultFilter, onSetFilter }) {
    const [filterBy, setFilterBy] = useState(defaultFilter)

    useEffect(() => {
        onSetFilter(filterBy)
    }, [filterBy])

    function handleChange({ target }) {
        let { name: field, value } = target
        if (target.type === 'number') value = +value
        setFilterBy(prev => ({ ...prev, [field]: value }))
    }

    return (
        <section className="book-filter container">
            <h2>Filter Books</h2>
            <form>
                <label htmlFor="title">Title:</label>
                <input type="text"
                    id="title"
                    name="title"
                    value={filterBy.title}
                    onChange={handleChange}
                    placeholder="Search by title"
                />

                <label htmlFor="maxPrice">Max Price:</label>
                <input type="number"
                    id="maxPrice"
                    name="maxPrice"
                    value={filterBy.maxPrice}
                    onChange={handleChange}
                    placeholder="Enter max price"
                />
            </form>
        </section>
    )
}
