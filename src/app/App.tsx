import './styles/normalize.css';
import './styles/styles.css';
import { Outlet } from 'react-router-dom';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSort } from '../features/Sort';
import { SortWidget } from '../widgets/SortWidget';

export const App = () => {
	const {sort, setSort, sortParams} = useSort();

	return (
		<>
			<Header />
			<SortWidget />
			<Outlet />
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				pauseOnHover
				theme='colored'
			/>
			<Footer />
		</>
	);
};
