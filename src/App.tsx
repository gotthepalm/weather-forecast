import { useEffect, useState } from 'react';
import MainPage from './features/MainPage/MainPage.tsx';
import { ForecastContext } from './context/ForecastContext.tsx';
import type { Weather } from './types/Weather.ts';

function App() {
	const [data, setData] = useState<Weather | null>(null);
	async function fetchUrl(url: string) {
		const response = await fetch(url);
		const json = (await response.json()) as Weather;
		setData(json);
	}
	useEffect(() => {
		fetchUrl(
			'https://api.weatherapi.com/v1/forecast.json?key=fb8a149aeacf40d5862152810250706&q=Kyiv&days=3&aqi=no&alerts=no',
		).catch((error) => console.log(error));
	}, []);
	return (
		<ForecastContext.Provider value={{ data, fetchUrl }}>
			<MainPage></MainPage>
		</ForecastContext.Provider>
	);
}

export default App;
