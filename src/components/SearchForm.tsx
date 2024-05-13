type SearchFormProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

export default function SearchForm({
  searchTerm,
  setSearchTerm,
}: SearchFormProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleOnSubmit} className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchTerm}
        onChange={handleOnChange}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
