import { useSort } from "../../../features/Sort";
import { Sort } from "../../../shared/ui/Sort";


export const SortWidget = () => {
    const {sort, setSort, sortParams} = useSort();

    return <Sort sort={sort} setSort={setSort} sortParams={sortParams} />
}