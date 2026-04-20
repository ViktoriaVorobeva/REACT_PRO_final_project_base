import { useState, ChangeEvent, useActionState, useCallback } from 'react';
import classNames from 'classnames';
import s from './ReviewForm.module.css';
import { Rating } from '../../../../shared/ui/Rating';
import { toast } from 'react-toastify';
import { mockFetch } from '../../../../shared/utils/common';
import { Button } from '../../../../shared/ui/Button';

const initialState = {
	rating: 0,
	reviewText: ''
}

export const ReviewForm = () => {
	const [reviewText, setReviewText] = useState(initialState.reviewText);
	const [rating, setRating] = useState(initialState.rating);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setReviewText(e.target.value);
	};

	const handleClick = useCallback(async() => {
		console.log('Отправка: ', { reviewText, rating });

		try {
			await mockFetch({ reviewText, rating }, 2500);
					
			setReviewText(initialState.reviewText);
			setRating(initialState.rating);

			toast.success('Комментарий добавлен!');
		} catch {
			toast.error('При добавлении комментария произошла ошибка');		
		}
	}, [reviewText, rating]);

	const [_, submit, isPending] = useActionState(async() => {
		await handleClick();

		return initialState;
	}, initialState);

	return (
		<form className={s['form']} action={submit}>
			<Rating isEdit rating={rating} onChange={setRating} />
			<textarea
				className={classNames(s['input'], s['textarea'])}
				name='text'
				id='text'
				placeholder='Напишите текст отзыва'
				value={reviewText}
				onChange={handleChange}></textarea>
			<Button type='submit' disabled={isPending} extraClass={s['form__btn']} >Отправить отзыв</Button>
		</form>
	);
};
