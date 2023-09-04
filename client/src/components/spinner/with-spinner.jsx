import { Link } from 'react-router-dom';
import spinner from './spinner.jsx';

const WithSpinner = ({ isLoading, ...otherProps }) => {
	return (
		isLoading ? <Link to="spinner"></Link> : {...otherProps} 
	)
}

export default WithSpinner;
// don't really know what's the pourpose of WithSpinner
