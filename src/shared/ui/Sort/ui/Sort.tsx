import { ChangeEvent, FC } from 'react';

export interface SortParams {
	title: string;
	value: Sort;
	href: string;
}

interface ISort {
	sort: Sort;
	setSort: (newSort: Sort) => void
	sortParams: SortParams[]
}

export const Sort: FC<ISort> = ({sort, setSort, sortParams}) => {
	const handleSortSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		const newSort = e.target.value as Sort;
		setSort(newSort);
	};
	return (
		<select value={sort} onChange={handleSortSelect}>
			{sortParams.map((p) => (
				<option key={p.title} value={p.value}>
					{p.title}
				</option>
			))}
		</select>
	);
};
