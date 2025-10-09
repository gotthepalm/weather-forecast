type Props = {
	type: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	className?: string;
	placeholder: string;
};

export default function Input({ type, onChange, value, className, placeholder }: Props) {
	return (
		<div className={`border-[1px] border-[#9f9f9f] max-w-[570px] w-full h-12 rounded-3xl flex justify-center text-[16px] py-3 px-4 ${className}`}>
			<div className='h-6 w-6'></div>
			<input
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				className="focus:outline-0"
			/>
		</div>
	);
}
