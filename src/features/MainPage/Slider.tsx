import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useContext } from 'react';
import { ForecastContext } from '../../context/ForecastContext.tsx';
import { conditions } from '../../icons-data.ts';
import tempIcon from '../../assets/temp-icon.svg';
import droplet from '../../assets/droplet.svg';

type Props = {
	tab: number;
};

export default function Slider({ tab }: Props) {
	const response = useContext(ForecastContext);
	if (!response) {
		return;
	}
	const { data } = response;
	if (!data) {
		return;
	}
	function getIcon(code: number) {
		const condition = conditions.find((value) => value.code === code);
		if (!condition) {
			return;
		}
		return condition.image;
	}
	return (
		<div className='w-full flex justify-between items-center'>
			<button className='prev-btn flex justify-center items-center rounded-2xl border-[1px] border-[#9f9f9f] w-10 h-15 bg-white'>
				←
			</button>
			<Swiper
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				slidesPerGroup={1}
				loop
				navigation={{
					nextEl: '.next-btn',
					prevEl: '.prev-btn',
				}}
				pagination={{
					el: '.pagination-dots',
					clickable: true,
				}}
				className='w-[1330px] overflow-hidden block'
			>
				<SwiperSlide className='flex flex-wrap gap-5 flex-shrink-0 w-full h-auto'>
					{data.forecast.forecastday[tab].hour.slice(0, 12).map((value, index) => (
						<div
							key={index}
							className='border-[1px] border-[#9f9f9f] rounded-3xl max-w-[calc((1330px-100px)/6)] w-full py-5 px-4'
						>
							<div className='flex flex-col'>
								<div className='font-bold text-[20px] flex justify-between'>
									{value.time?.slice(-5)}
									<div
										className='h-10 w-10 bg-center bg-contain bg-no-repeat mb-2.5'
										style={{ backgroundImage: `url("${getIcon(value.condition.code)}")` }}
									></div>
								</div>
								{/*<div className='text-gray-400 text-[15px] font-semibold'>{value.condition.text}</div>*/}
								<div className='flex items-center'>
									<span
										className='inline-block h-5 w-5 mr-1 bg-white bg-center bg-contain bg-no-repeat '
										style={{ backgroundImage: `url("${tempIcon}")` }}
									></span>
									{value.temp_c}C°
								</div>
								<div className='flex items-center'>
									<span
										className='inline-block h-5 w-5 mr-1 bg-black mask-center mask-contain mask-no-repeat '
										style={{ maskImage: `url("${droplet}")` }}
									></span>
									{value.chance_of_rain}%
								</div>
							</div>
						</div>
					))}
				</SwiperSlide>
				<SwiperSlide className='flex flex-wrap gap-5 flex-shrink-0 w-full h-auto'>
					{data.forecast.forecastday[tab].hour.slice(12, 24).map((value, index) => (
						<div
							key={index}
							className='border-[1px] border-[#9f9f9f] rounded-3xl max-w-[calc((1330px-100px)/6)] w-full py-5 px-4'
						>
							<div className='flex flex-col'>
								<div className='font-bold text-[20px] flex justify-between'>
									{value.time?.slice(-5)}
									<div
										className='h-10 w-10 bg-center bg-contain bg-no-repeat mb-2.5'
										style={{ backgroundImage: `url("${getIcon(value.condition.code)}")` }}
									></div>
								</div>
								{/*<div className='text-gray-400 text-[15px] font-semibold'>{value.condition.text}</div>*/}
								<div className='flex items-center'>
									<span
										className='inline-block h-5 w-5 mr-1 bg-white bg-center bg-contain bg-no-repeat '
										style={{ backgroundImage: `url("${tempIcon}")` }}
									></span>
									{value.temp_c}C°
								</div>
								<div className='flex items-center'>
									<span
										className='inline-block h-5 w-5 mr-1 bg-black mask-center mask-contain mask-no-repeat '
										style={{ maskImage: `url("${droplet}")` }}
									></span>
									{value.chance_of_rain}%
								</div>
							</div>
						</div>
					))}
				</SwiperSlide>
			</Swiper>
			<button className='next-btn flex justify-center items-center rounded-2xl border-[1px] border-[#9f9f9f] w-10 h-15 bg-white'>
				→
			</button>
		</div>
	);
}
