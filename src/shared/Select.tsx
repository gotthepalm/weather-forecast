type Props = {
	value: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
	className?: string;
	children: React.ReactNode;
};

export default function Select({ onChange, value, className, children }: Props) {
	return (
		<div
			className={`border-[1px] border-[#9f9f9f] w-44 h-12 rounded-3xl flex justify-center text-[16px] py-3 px-4 ${className}`}
		>
			Days:
			<select name='Days:' onChange={onChange} value={value}>
				{children}
			</select>
		</div>
	);
}
