const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./pages/About.jsx"
import { Home } from "./pages/Home.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"
import { BookDetails } from "./pages/BookDetails.jsx"

export function RootCmp() {
    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/edit" element={<h1>Book Edit (to do)</h1>} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}
