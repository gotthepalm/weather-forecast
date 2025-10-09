import { useContext, useState } from 'react';
import Button from '../../shared/Button.tsx';
import { ForecastContext } from '../../context/ForecastContext.tsx';
import Form from './Form.tsx';

export default function MainPage() {
	const [tabContent, setTabContent] = useState<number>(0);
	const response = useContext(ForecastContext);
	if (!response) {
		return <div>Error</div>;
	}
	const { data } = response;
	if (!data) {
		return <div>Error</div>;
	}

	return (
		<div className='max-w-[1480px] w-full mx-auto px-5'>
			<section>
				<Form></Form>
				<div>{data.current.temp_c}</div>
				<div>
					{data.location.name}
					{data.location.country}
					{data.current.temp_c}
					{data.forecast.forecastday[0].date}
				</div>
				<div>
					<div className='flex gap-5'>
						{data.forecast.forecastday.map((value, index) => {
							const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
							const date = new Date(value.date)
							const dataDay = value.date.slice(-2)
							console.log(date.getDay())
							return (
								<Button type='submit' key={index} onClick={() => setTabContent(index)}>
									{`${week[date.getDay()]} ${dataDay.slice(0, 1) === '0' ? dataDay.slice(1) : dataDay}th`}
								</Button>
							);
						})}
					</div>
					<div>
						<span className='font-black'>{data.forecast.forecastday[tabContent].date}</span>
						{data.forecast.forecastday[tabContent].hour.map((value, index) => (
							<div key={index}>
								<span className='font-bold'>{index}:00 :</span>
								<ul>
									<li>{value.temp_c}C°</li>
									<li>
										<span className='font-semibold'>Cloudy:</span> {value.cloud}
									</li>
									<li>Rain: {value.chance_of_rain}%</li>
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
