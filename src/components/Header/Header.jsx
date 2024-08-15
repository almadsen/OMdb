import './Header.css';

export default function Header({ setName, handleSubmit }) {
  return (
    <header>
      <label htmlFor="name">OMDb</label>
      <input
        type="text"
        name="name"
        placeholder="movie name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        <i className="fa fa-search"></i>
      </button>
    </header>
  );
}
