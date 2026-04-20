import { ChangeEvent, useCallback, useRef } from 'react';
import { useCount } from '../hooks/useCount';
import s from './CartCounter.module.css';
import classNames from 'classnames';

type TCartCounter = {
	productId: string;
};

const MIN_COUNT = 1;
const MAX_COUNT = 99;

export const CartCounter = ({ productId }: TCartCounter) => {
	const countRef = useRef<number>(1);

	const { stock, handleSetCount, handleIncrement, handleDecrement } =
		useCount(productId);

	const handleDecrementCount = useCallback(() => {
		handleDecrement();

		const newCount = countRef.current - 1;
		countRef.current = newCount < MIN_COUNT ? MIN_COUNT : newCount;
	}, [countRef.current]);

	const handleIncrementCount = useCallback(() => {
		handleIncrement();

		const newCount = countRef.current + 1;
		countRef.current = newCount > MAX_COUNT ? MAX_COUNT : newCount;
	}, [countRef.current]);

	const handleSetCountChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		handleSetCount(evt);
		const newValue = +evt.target.value;

		countRef.current =
			newValue > MAX_COUNT
				? MAX_COUNT
				: newValue < MIN_COUNT
				? MIN_COUNT
				: newValue;
	}, []);

	return (
		<>
			<div className={classNames(s['button-count'])}>
				<button
					onClick={handleDecrementCount}
					className={classNames(s['button-count__minus'])}>
					-
				</button>
				<input
					onChange={handleSetCountChange}
					type='number'
					className={classNames(s['button-count__num'])}
					value={countRef.current}
				/>
				<button
					onClick={handleIncrementCount}
					className={classNames(s['button-count__plus'])}
					disabled={countRef.current >= stock}>
					+
				</button>
			</div>
		</>
	);
};
