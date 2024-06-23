import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }



  return (
    <div className={css.searchbar}>
      <label className={css.searchName} htmlFor="search">Find contacts</label>
      <input
        className={css.searchInput}
        type="text"
        id="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;