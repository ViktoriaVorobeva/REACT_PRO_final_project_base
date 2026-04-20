import { WithProtection } from '../../../shared/store/HOCs/WithProtection';
import { WithQuery } from '../../../shared/store/HOCs/WithQuery';
import { LoadMore } from '../../../shared/ui/LoadMore';
import { CardList } from '../../../widgets/CardList';
import { useProducts } from '../../../shared/store/hooks/useProducts';
import { Modal } from '../../../shared/ui/Modal';
import { useRef, useState } from 'react';

const CardListWithQuery = WithQuery(CardList);

export const HomePage = WithProtection(() => {
	const [isOpen, setIsOpen] = useState(false);

	const triggerRef = useRef<HTMLButtonElement | null>(null);

	const { products, isLoading, isError, error } = useProducts();

	return (
		<>
		<button ref={triggerRef} onClick={() => setIsOpen(true)}>Открыть модалку</button>
			<CardListWithQuery
				title='Лакомства'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore />

			<Modal onClose={() => setIsOpen(false)} triggerRef={triggerRef} title='рыба' isOpen={isOpen}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
				in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa 
				qui officia deserunt mollit anim id est laborum.
			</Modal>
		</>
	);
});
