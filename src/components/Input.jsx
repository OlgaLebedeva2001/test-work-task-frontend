function Input({ searchValue, setSearchValue }) {
  return (
    <div className="main__input-block">
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        className="main__input"
        placeholder="Search by name..."
      />
      <div className="main__search-icon"></div>
    </div>
  );
}

export default Input;
