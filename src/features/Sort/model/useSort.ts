import { useAppDispatch, useAppSelector } from '../../../shared/store/utils';
import {
	productsActions,
	productsSelectors,
} from '../../../shared/store/slices/products';
import { useCallback } from 'react';
import { SortParams } from '../../../shared/ui/Sort/ui/Sort';

const sortParams: SortParams[] = [
	{
		title: 'Дешевые',
		value: 'low-price',
		href: '#',
	},
	{
		title: 'Дорогие',
		value: 'high-price',
		href: '#',
	},
	{
		title: 'Новые',
		value: 'newest',
		href: '#',
	},
	{
		title: 'Старые',
		value: 'oldest',
		href: '#',
	},
];

export const useSort = () => {
	const dispatch = useAppDispatch();

	const sort = useAppSelector(productsSelectors.getSort);

	const setSort = useCallback((newSort: Sort) => {
		dispatch(productsActions.setSort(newSort));
	}, []);


	return { sort, setSort, sortParams };
};
