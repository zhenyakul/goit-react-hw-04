import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function Searchbar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.elements[0].value;
    if (input.trim() == "") {
      toast.error("Empty input!!!");
    } else {
      onSubmit(input);
    }
    form.reset();
  };
  return (
    <>
      <header className={css.header}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </header>
      <Toaster />
    </>
  );
}
