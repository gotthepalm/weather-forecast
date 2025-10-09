import Input from '../../shared/Input.tsx';
import Button from '../../shared/Button.tsx';
import { useContext, useState } from 'react';
import { ForecastContext } from '../../context/ForecastContext.tsx';

export default function Form() {
	const [inputValue, setInputValue] = useState<string>('');
	const [selectValue, setSelectValue] = useState<string>('3');
	const [error, setError] = useState<boolean>(false);

	const response = useContext(ForecastContext);
	if (!response) {
		return <div>Error</div>;
	}
	const { fetchUrl } = response;

	async function reFetch(city: string, days: string) {
		const response = await fetch(
			`https://api.weatherapi.com/v1/search.json?key=fb8a149aeacf40d5862152810250706&q=${city}`,
		);
		const json = await response.json();
		if (!json.length) {
			setError(true);
		} else {
			setError(false);
			fetchUrl(
				`https://api.weatherapi.com/v1/forecast.json?key=fb8a149aeacf40d5862152810250706&q=${city}&days=${days}&aqi=no&alerts=no`,
			);
		}
	}
	return (
		<form
			action='submit'
			className='w-full flex items-start gap-8'
			onSubmit={(e) => {
				e.preventDefault();
				reFetch(inputValue, selectValue);
			}}
		>
			<Input
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder='Type a city name...'
			/>
			<select name='' id='' value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
			</select>
			<Button type='submit'>Confirm</Button>
			<div>{error ? 'Uncorrect city name' : null}</div>
		</form>
	);
}
