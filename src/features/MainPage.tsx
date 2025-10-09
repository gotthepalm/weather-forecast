import { useContext, useState } from 'react';
import { ForecastContext } from '../context/ForecastContext.tsx';

export default function MainPage() {
	const [inputValue, setInputValue] = useState<string>('');
	const [selectValue, setSelectValue] = useState<string>('3');
	const response = useContext(ForecastContext);
	if (!response) {
		return <div>Error</div>;
	}
	const { data, fetchUrl } = response;
	if (!data) {
		return <div>Error</div>;
	}

	async function reFetch(city: string, days: string) {
		const response = await fetch(
			`https://api.weatherapi.com/v1/search.json?key=fb8a149aeacf40d5862152810250706&q=${city}`,
		);
		const json = await response.json();
		if (!json.length) {
			return;
		} else {
			fetchUrl(
				`https://api.weatherapi.com/v1/forecast.json?key=fb8a149aeacf40d5862152810250706&q=${city}&days=${days}&aqi=no&alerts=no`,
			);
		}
	}
	return (
		<>
			<form
				action='submit'
				onSubmit={(e) => {
					e.preventDefault();
					reFetch(inputValue, selectValue);
				}}
			>
				<input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
				<select name='' id='' value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
					<option value='1'>1</option>
					<option value='2'>1</option>
					<option value='3'>1</option>
				</select>
				<button type='submit'>Confirm</button>
			</form>
		</>
	);
}
