import { useRef } from "react";

const Header = ({ setSearchedValue }) => {
  const inputRef = useRef(null);
  // Runs on the search
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    setSearchedValue(inputValue);
  };

  return (
    <div className="bg-[#4e9090] py-2 sticky top-0 left-0 z-50 px-3">
      <form
        onSubmit={handleSearch}
        className="border border-blue-200 max-w-xl mx-auto rounded-md flex overflow-hidden"
      >
        <input
          ref={inputRef}
          placeholder="Search "
          className="w-full outline-none  bg-transparent px-4 text-blue-50 "
        />
        <button
          type="submit"
          className="bg-blue-50 py-1.5 px-6 text-[#4e9090] font-semibold text-xl border border-blue-100"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
