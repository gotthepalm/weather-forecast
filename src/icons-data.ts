import blizzard from './assets/icons/blizzard.svg'
import cloudy from './assets/icons/cloudy.svg'
import fog from './assets/icons/fog.svg'
import heavyPatchyRain from './assets/icons/heavy-patchy-rain.svg'
import heavyRain from './assets/icons/heavy-rain.svg'
import icePellets from './assets/icons/ice-pellets.svg'
import moderateSnow from './assets/icons/moderate-snow.svg'
import partlyCloudy from './assets/icons/partly-cloudy.svg'
import patchyRain from './assets/icons/patchy-rain.svg'
import patchySnow from './assets/icons/patchy-snow.svg'
import patchyThunder from './assets/icons/patchy-thunder.svg'
import rain from './assets/icons/rain.svg'
import rainThunder from './assets/icons/rain-thunder.svg'
import sleet from './assets/icons/sleet.svg'
import snow from './assets/icons/snow.svg'
import snowThunder from './assets/icons/snow-thunder.svg'
import sunny from './assets/icons/sunny.svg'

type Condition = {
	code: number;
	day: string;
	night: string;
	icon: number;
	image: string
};

export const conditions: Condition[] = [
	{
		code: 1000, // './icons/sunny.svg'
		day: 'Sunny',
		night: 'Clear',
		icon: 113,
		image: sunny
	},
	{
		code: 1003, // './icons/partly-cloudy.svg'
		day: 'Partly cloudy',
		night: 'Partly cloudy',
		icon: 116,
		image: partlyCloudy
	},
	{
		code: 1006, // './icons/cloudy.svg'
		day: 'Cloudy',
		night: 'Cloudy',
		icon: 119,
		image: cloudy
	},
	{
		code: 1009, // './icons/cloudy.svg'
		day: 'Overcast',
		night: 'Overcast',
		icon: 122,
		image: cloudy
	},
	{
		code: 1030, // './icons/fog.svg'
		day: 'Mist',
		night: 'Mist',
		icon: 143,
		image: fog
	},
	{
		code: 1063,
		day: 'Patchy rain possible', // './icons/patchy-rain.svg'
		night: 'Patchy rain possible',
		icon: 176,
		image: patchyRain
	},
	{
		code: 1066,
		day: 'Patchy snow possible', // './icons/patchy-snow.svg'
		night: 'Patchy snow possible',
		icon: 179,
		image: patchySnow
	},
	{
		code: 1069,
		day: 'Patchy sleet possible', // './icons/sleet.svg'
		night: 'Patchy sleet possible',
		icon: 182,
		image: sleet
	},
	{
		code: 1072,
		day: 'Patchy freezing drizzle possible', // './icons/sleet.svg'
		night: 'Patchy freezing drizzle possible',
		icon: 185,
		image: sleet
	},
	{
		code: 1087,
		day: 'Thundery outbreaks possible', // './icons/patchy-thunder.svg'
		night: 'Thundery outbreaks possible',
		icon: 200,
		image: patchyThunder
	},
	{
		code: 1114,
		day: 'Blowing snow', // './icons/blizzard.svg'
		night: 'Blowing snow',
		icon: 227,
		image: blizzard
	},
	{
		code: 1117,
		day: 'Blizzard', // './icons/blizzard.svg'
		night: 'Blizzard',
		icon: 230,
		image: blizzard
	},
	{
		code: 1135,
		day: 'Fog', // './icons/fog.svg'
		night: 'Fog',
		icon: 248,
		image: fog
	},
	{
		code: 1147,
		day: 'Freezing fog', // './icons/fog.svg'
		night: 'Freezing fog',
		icon: 260,
		image: fog
	},
	{
		code: 1150,
		day: 'Patchy light drizzle', // './icons/sleet.svg'
		night: 'Patchy light drizzle',
		icon: 263,
		image: sleet
	},
	{
		code: 1153,
		day: 'Light drizzle', // './icons/sleet.svg'
		night: 'Light drizzle',
		icon: 266,
		image: sleet
	},
	{
		code: 1168,
		day: 'Freezing drizzle', // './icons/sleet.svg'
		night: 'Freezing drizzle',
		icon: 281,
		image: sleet
	},
	{
		code: 1171,
		day: 'Heavy freezing drizzle', // './icons/sleet.svg'
		night: 'Heavy freezing drizzle',
		icon: 284,
		image: sleet
	},
	{
		code: 1180,
		day: 'Patchy light rain', // './icons/patchy-rain.svg'
		night: 'Patchy light rain',
		icon: 293,
		image: patchyRain
	},
	{
		code: 1183,
		day: 'Light rain', // './icons/rain.svg'
		night: 'Light rain',
		icon: 296,
		image: rain
	},
	{
		code: 1186,
		day: 'Moderate rain at times', // './icons/patchy-rain.svg'
		night: 'Moderate rain at times',
		icon: 299,
		image: patchyRain
	},
	{
		code: 1189,
		day: 'Moderate rain', // './icons/rain.svg'
		night: 'Moderate rain',
		icon: 302,
		image: rain
	},
	{
		code: 1192,
		day: 'Heavy rain at times', // './icons/heavy-patchy-rain.svg'
		night: 'Heavy rain at times',
		icon: 305,
		image: heavyPatchyRain
	},
	{
		code: 1195,
		day: 'Heavy rain', // './icons/heavy-rain.svg'
		night: 'Heavy rain',
		icon: 308,
		image: heavyRain
	},
	{
		code: 1198,
		day: 'Light freezing rain', // './icons/sleet.svg'
		night: 'Light freezing rain',
		icon: 311,
		image: sleet
	},
	{
		code: 1201,
		day: 'Moderate or heavy freezing rain', // './icons/sleet.svg'
		night: 'Moderate or heavy freezing rain',
		icon: 314,
		image: sleet
	},
	{
		code: 1204,
		day: 'Light sleet', // './icons/sleet.svg'
		night: 'Light sleet',
		icon: 317,
		image: sleet
	},
	{
		code: 1207,
		day: 'Moderate or heavy sleet', // './icons/sleet.svg'
		night: 'Moderate or heavy sleet',
		icon: 320,
		image: sleet
	},
	{
		code: 1210,
		day: 'Patchy light snow', // './icons/patchy-snow.svg'
		night: 'Patchy light snow',
		icon: 323,
		image: patchySnow
	},
	{
		code: 1213,
		day: 'Light snow', // './icons/moderate-snow.svg'
		night: 'Light snow',
		icon: 326,
		image: moderateSnow
	},
	{
		code: 1216,
		day: 'Patchy moderate snow', // './icons/patchy-snow.svg'
		night: 'Patchy moderate snow',
		icon: 329,
		image: patchySnow
	},
	{
		code: 1219,
		day: 'Moderate snow', // './icons/moderate-snow.svg'
		night: 'Moderate snow',
		icon: 332,
		image: moderateSnow
	},
	{
		code: 1222,
		day: 'Patchy heavy snow', // './icons/moderate-snow.svg'
		night: 'Patchy heavy snow',
		icon: 335,
		image: moderateSnow
	},
	{
		code: 1225,
		day: 'Heavy snow', // './icons/snow.svg'
		night: 'Heavy snow',
		icon: 338,
		image: snow
	},
	{
		code: 1237,
		day: 'Ice pellets', // './icons/ice-pellets.svg'
		night: 'Ice pellets',
		icon: 350,
		image: icePellets
	},
	{
		code: 1240,
		day: 'Light rain shower', // './icons/patchy-rain.svg'
		night: 'Light rain shower',
		icon: 353,
		image: patchyRain
	},
	{
		code: 1243,
		day: 'Moderate or heavy rain shower', // './icons/heavy-patchy-rain.svg'
		night: 'Moderate or heavy rain shower',
		icon: 356,
		image: heavyPatchyRain
	},
	{
		code: 1246,
		day: 'Torrential rain shower', // './icons/heavy-rain.svg'
		night: 'Torrential rain shower',
		icon: 359,
		image: heavyRain
	},
	{
		code: 1249,
		day: 'Light sleet showers', // './icons/sleet.svg'
		night: 'Light sleet showers',
		icon: 362,
		image: sleet
	},
	{
		code: 1252,
		day: 'Moderate or heavy sleet showers', // './icons/sleet.svg'
		night: 'Moderate or heavy sleet showers',
		icon: 365,
		image: sleet
	},
	{
		code: 1255,
		day: 'Light snow showers', // './icons/patchy-snow.svg'
		night: 'Light snow showers',
		icon: 368,
		image: patchySnow
	},
	{
		code: 1258,
		day: 'Moderate or heavy snow showers', // './icons/snow.svg'
		night: 'Moderate or heavy snow showers',
		icon: 371,
		image: snow
	},
	{
		code: 1261,
		day: 'Light showers of ice pellets', // './icons/ice-pellets.svg'
		night: 'Light showers of ice pellets',
		icon: 374,
		image: icePellets
	},
	{
		code: 1264,
		day: 'Moderate or heavy showers of ice pellets', // './icons/ice-pellets.svg'
		night: 'Moderate or heavy showers of ice pellets',
		icon: 377,
		image: icePellets
	},
	{
		code: 1273,
		day: 'Patchy light rain with thunder', // './icons/rain-thunder.svg'
		night: 'Patchy light rain with thunder',
		icon: 386,
		image: rainThunder
	},
	{
		code: 1276,
		day: 'Moderate or heavy rain with thunder', // './icons/rain-thunder.svg'
		night: 'Moderate or heavy rain with thunder',
		icon: 389,
		image: rainThunder
	},
	{
		code: 1279,
		day: 'Patchy light snow with thunder', // './icons/rain-thunder.svg'
		night: 'Patchy light snow with thunder',
		icon: 392,
		image: snowThunder
	},
	{
		code: 1282,
		day: 'Moderate or heavy snow with thunder', // './icons/rain-thunder.svg'
		night: 'Moderate or heavy snow with thunder',
		icon: 395,
		image: snowThunder
	},
];
