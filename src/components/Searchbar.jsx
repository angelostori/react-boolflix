export default function Searchbar({ search, setSearch, handleSearch }) {
    return (
        <header>
            <form onSubmit={handleSearch}>
                <input
                    type="search"
                    placeholder="Cerca un film..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Cerca</button>
            </form>
        </header>
    )
}