import { createContext } from 'react';
import type { Weather } from '../types/Weather.ts';

type ForecastContext = {
	data: Weather | null;
	fetchUrl(url: string): Promise<void>;
};
export const ForecastContext = createContext<ForecastContext | null>(null);
