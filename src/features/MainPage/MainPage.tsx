import { useContext, useState } from 'react';
import { ForecastContext } from '../../context/ForecastContext.tsx';
import wind from '../../assets/wind.svg';
import droplet from '../../assets/droplet.svg';
import Button from '../../shared/Button.tsx';
import Slider from './Slider.tsx';
import Form from './Form.tsx';
import { conditions } from '../../icons-data.ts';

export default function MainPage() {
	const [tabContent, setTabContent] = useState<number>(0);
	const response = useContext(ForecastContext);
	if (!response) {
		return;
	}
	const { data } = response;
	if (!data) {
		return;
	}
	function getCorrectDay(date: string) {
		const dateDay = date.slice(-2);
		if (dateDay.slice(0, 1) === '0') {
			return dateDay.slice(1);
		} else {
			return dateDay;
		}
	}
	function getDayOfWeek(date: string) {
		const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const data = new Date(date);
		return week[data.getDay()];
	}
	function getCorrectMonth(date: string) {
		const months = [
			'January',
			'February',
			'Mart',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const data = new Date(date);
		return months[data.getMonth()];
	}
	function getIcon(code: number) {
		const condition = conditions.find((value) => value.code === code);
		if (!condition) {
			return;
		}
		return condition.image;
	}
	console.log(data);
	return (
		<div className='max-w-[1520px] w-full mx-auto px-5 font-[Inter]'>
			<section className='py-10'>
				<Form></Form>
				<div className='h-72 rounded-3xl text-white mb-6 bg-black bg-[linear-gradient(132deg,rgba(0,_0,_0,_1)25%,_rgba(171,_171,_171,_1)_100%,_rgba(184,_184,_184,_1)_100%)]'>
					<div
						className='flex gap-26 bg-size-[230px_230px] bg-position-[top_50%_right_100px] bg-no-repeat h-full w-full py-10 px-28'
						style={{ backgroundImage: `url("${getIcon(data.current.condition.code)}")` }}
					>
						<div className='flex flex-col'>
							<div className='text-[40px] font-semibold'>{data.location.name}</div>
							<div className='text-[16px] font-semibold mb-5 text-[#b5b5b5]'>{data.location.country}</div>
							<div className='text-3xl font-semibold'>
								{`${getCorrectMonth(data.forecast.forecastday[0].date)} ${getCorrectDay(data.forecast.forecastday[0].date)}th`}
							</div>
							<div className='text-5xl font-semibold'>{data.current.temp_c}°C</div>
						</div>
						<div className='flex flex-col'>
							<div className='text-[20px] font-medium mb-4'>{data.current.condition.text}</div>
							<div className='flex items-center mb-2'>
								<span
									className='inline-block h-6 w-6 bg-white mask-center mask-contain mask-no-repeat mr-2.5'
									style={{ maskImage: `url("${wind}")` }}
								></span>
								{data.current.wind_kph} km/m
							</div>
							<div className='flex items-center'>
								<span
									className='inline-block h-6 w-6 bg-white mask-center mask-contain mask-no-repeat mr-2.5'
									style={{ maskImage: `url("${droplet}")` }}
								></span>
								{data.current.humidity}%
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='flex gap-5 mb-15'>
						{data.forecast.forecastday.map((value, index) => (
							<Button
								type='submit'
								className={`bg-white border-[1px] border-[#9f9f9f] !text-black ${tabContent === index ? 'outline-3 outline-[#B1ACFF]' : ''}`}
								key={index}
								onClick={() => setTabContent(index)}
							>
								{`${getDayOfWeek(value.date)} ${getCorrectDay(value.date)}th`}
							</Button>
						))}
					</div>
					<Slider tab={tabContent}></Slider>
				</div>
			</section>
		</div>
	);
}
