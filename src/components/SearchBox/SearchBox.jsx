import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <input
            type="text"
            onChange={handleChange}
            placeholder="Search by name"
            className={styles.input}
        />
    );
};

export default SearchBox;
