import { FC, TextareaHTMLAttributes } from "react";

interface iTextArea
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	value?: string;
	placeholder?: string;
}

const TextArea: FC<iTextArea> = ({
	label,
	placeholder,
	value,
	...props
}) => {
	return (
		<div>
			<div className="text-[15px] flex flex-col">
				{label}
				<textarea
					placeholder={placeholder}
					className="w-auto col-span-1 bg-white border transition-all duration-300 focus:outline-1 focus:outline outline-blue-950 rounded-md p-3"
					value={value}
					{...props}
				></textarea>
			</div>
		</div>
	);
};

export default TextArea;
