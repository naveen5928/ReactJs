import { useState } from "react";

export default function SearchText() {
  const furits = ["Apple", "Banana", "Grapes", "mOANGO", "oRANGE", "Lemon"];
  const [furitsData, setFuritsData] = useState(furits);
  const [searchText, setSearchText] = useState("");
  const handleSearchTextBox = (event) => {
    setSearchText(event.target.value);
  };
  const furitsDataFiltered = furitsData.filter((s) =>
    s.toLocaleLowerCase().includes(searchText)
  );
  if (!furitsDataFiltered) {
    return <h1>no item found..</h1>;
  }
  return (
    <>
      <input
        type="text"
        placeholder="search..."
        name="search"
        value={searchText}
        onChange={handleSearchTextBox}
        className="textfield"
      />
      {furitsDataFiltered.map((furit) => {
        return <p key={furit}>{furit}</p>;
      })}
      {<p>no data found</p>}
    </>
  );
}
