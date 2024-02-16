import { useState } from "react";
import Input from "../components/reUse/Input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputWithLabel from "./static/InputWithLabel";
import { inputData } from "./static/DataInput";
import lodash from "lodash";
import LittleHeader from "../components/static/LittleHeader";
import { TextAreaLabel } from "./static/TextAreaLabel";
import TextArea from "./static/TextArea";
import { NavLink } from "react-router-dom";

document.title = "Student-Article";

const toolbarOptions = [
	["bold", "italic", "underline", "strike"],
	["blockquote", "code-block"],

	[{ header: 1 }, { header: 2 }],
	[{ list: "ordered" }, { list: "bullet" }],
	[{ script: "sub" }, { script: "super" }],
	[{ indent: "-1" }, { indent: "+1" }],
	[{ direction: "rtl" }],

	[{ size: ["small", false, "large", "huge"] }],
	[{ header: [1, 2, 3, 4, 5, 6, false] }],

	[{ color: [] }, { background: [] }],
	[{ font: [] }],
	[{ align: [] }],

	["clean"],
];

const modules = {
	toolbar: toolbarOptions,
};

const Article = () => {
	const [value, setValue]: any = useState("");
	//   const [, setValue]: any = useState("");

	const [iValue, setiValue]: any = useState([""]);

	const [Thevalue, settheValue]: any = useState("");

	const [TheiValue, setTheiValue]: any = useState([""]);

	const handleSubmit = () => {
		const convertedData = lodash.reduce(
			iValue,
			(result: any, { label, value }) => {
				result[label] = value;
				return result;
			},
			{}
		);

		console.log(convertedData);
	};

	return (
		<div>
			<LittleHeader name={document.title} />
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 text-blue-950 mt-10">
				{inputData.map((el, i: number) => (
					<InputWithLabel
						label={el.label}
						placeholder={el.placeholder}
						value={iValue[i] ? iValue[i].value : ""}
						onChange={(e) => {
							const newValue = e.target.value;
							setiValue((prevValues: any) => {
								const updatedValues = [...prevValues];
								updatedValues[i] = {
									label: el.name,
									value: newValue,
								};
								return updatedValues;
							});
						}}
					/>
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<textarea
					placeholder="Specific Objectives"
					className="w-auto col-span-1 bg-white border transition-all duration-300 focus:outline-1 focus:outline outline-blue-950 rounded-md p-3 "
				/>
			</div>
			<div className="w-full mt-4">
				<ReactQuill
					theme="snow"
					value={value}
					onChange={setValue}
					className="h-[300px]"
					modules={modules}
					placeholder="Content"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-16">
				{TextAreaLabel.map((el, i: number) => (
					<TextArea
						label={el.label}
						placeholder={el.placeholder}
						value={TheiValue[i] ? TheiValue[i].Thevalue : ""}
						onChange={(e) => {
							const ThenewValue = e.target.value;
							setTheiValue((TheprevValues: any) => {
								const TheupdatedValues = [...TheprevValues];
								TheupdatedValues[i] = {
									label: el.name,
									value: ThenewValue,
								};
								return TheupdatedValues;
							});
						}}
					/>
				))}
			</div>
			<div className="mt-6">
				<button
					onClick={handleSubmit}
					className="btn text-white bg-blue-950 mt-3 hover:bg-blue-900 border-none"
				>
					Submit As Assignment
				</button>

				<NavLink to="/saved-articles">
					<button
						onClick={handleSubmit}
						className="btn text-white bg-blue-950 mt-3 hover:bg-blue-900 border-none ml-6"
					>
						Submit As Note
					</button>
				</NavLink>
			</div>
		</div>
	);
};

export default Article;
