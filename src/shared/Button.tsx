type Props = {
	children: string | number | boolean;
	disabled?: boolean | undefined;
	type: 'submit' | 'reset' | 'button' | undefined;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, disabled, type, className, onClick}: Props) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`h-12 w-44 rounded-3xl flex justify-center items-center content-center text-center py-3 px-4 bg-[#474ed9] text-white ${className ? className : ''}`}
		>
			{children}
		</button>
	);
}
