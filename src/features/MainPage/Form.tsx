import Input from '../../shared/Input.tsx';
import Button from '../../shared/Button.tsx';
import Select from '../../shared/Select.tsx';
import { useContext, useState } from 'react';
import { ForecastContext } from '../../context/ForecastContext.tsx';

export default function Form() {
	const [inputValue, setInputValue] = useState<string>('');
	const [selectValue, setSelectValue] = useState<string>('3');
	const [error, setError] = useState<boolean>(false);

	const response = useContext(ForecastContext);
	if (!response) {
		return;
	}
	const { data, fetchUrl } = response;
	if (!data) {
		return;
	}
	async function reFetch(city: string, days: string) {
		if (city) {
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
		} else {
			setError(false);
			fetchUrl(
				`https://api.weatherapi.com/v1/forecast.json?key=fb8a149aeacf40d5862152810250706&q=${data?.location.name}&days=${days}&aqi=no&alerts=no`,
			);
		}
	}
	return (
		<form
			action='submit'
			className='w-full flex items-start gap-8 pb-14'
			onSubmit={(e) => {
				e.preventDefault();
				reFetch(inputValue, selectValue);
			}}
		>
			<div className='max-w-[570px] w-full'>
				<Input
					type='text'
					value={inputValue}
					className={`${error ? 'border-red-400' : ''}`}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='Type a city name...'
				/>
				<div className='text-red-500'>{error ? 'Uncorrect city name' : ''}</div>
			</div>
			<Select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
			</Select>
			<Button type='submit'>Confirm</Button>
		</form>
	);
}
