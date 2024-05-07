import "./Search.css";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import FilterSection from "./FilterSection";
import SearchResults from "./SearchResults";
import SortingSection from "./SortingSection";


const Search = () => {

  return (
    <div>
      <Navbar />
      <div className="container search-container">
        <div>
          <FilterSection />
        </div>

        <div>
          <SortingSection />
        </div>

        <div>
          <SearchResults />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Search;