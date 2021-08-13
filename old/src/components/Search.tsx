import { ChangeEvent, FormEvent, useState } from "react";
import Section from "./Section";

export default function Search({
  onSearchChange,
  onSearchSubmit,
  title,
  placeholder,
}: {
  onSearchChange?: (search: string) => any;
  onSearchSubmit: (search: string) => any;
  title: string;
  placeholder: string;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  function search(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //(e.target as HTMLFormElement).submit();
    onSearchSubmit(searchTerm);
  }

  function searchChanged(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearchTerm(e.target.value);
    onSearchChange && onSearchChange(searchTerm);
  }

  return (
    <Section
      id="wb-srch"
      lgoffset={4}
      mdoffset={4}
      smoffset={4}
      xs={4}
      sm={5}
      md={4}
    >
      <h2>{title}</h2>
      <form
        action="https://www.canada.ca/en/sr.html"
        name="cse-search-box"
        role="search"
        onSubmit={search}
      >
        <div className="form-group wb-srch-qry">
          <label htmlFor="wb-srch-q" className="wb-inv">
            {title}
          </label>
          <input
            id="wb-srch-q"
            list="wb-srch-q-ac"
            className="wb-srch-q form-control"
            name="q"
            type="search"
            onChange={searchChanged}
            size={34}
            maxLength={170}
            placeholder={placeholder}
            value={searchTerm}
          />
          <datalist id="wb-srch-q-ac"> </datalist>
        </div>
        <div className="form-group submit">
          <button
            title={title}
            type="submit"
            id="wb-srch-sub"
            className="btn btn-primary btn-small"
            name="wb-srch-sub"
          >
            <span className="glyphicon-search glyphicon"></span>
            <span className="wb-inv">{title}</span>
          </button>
        </div>
      </form>
    </Section>
  );
}
