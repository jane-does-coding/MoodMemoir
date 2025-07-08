import React from "react";

const moodLabels = ["Happy", "Sad", "Angry", "Anxious", "Excited", "Tired"];

const Receipt = ({ formData }: { formData: any }) => {
	if (!formData) return null;

	const moodValues = [
		formData.happy,
		formData.sad,
		formData.angry,
		formData.anxious,
		formData.excited,
		formData.tired,
	];

	const totalItems = moodValues.length;
	const mostFeltMood = moodLabels[moodValues.indexOf(Math.max(...moodValues))];

	const date = new Date();
	const formattedDate = date.toLocaleDateString();
	const formattedTime = date.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});

	return (
		<div className="flex flex-col w-[95vw] md:w-[20vw] h-[65vh] justify-center relative px-[2vw] py-[3vh] my-[5vh] md:my-0">
			<img
				src="/receipt-bg.png"
				className="w-[95vw] md:w-[20vw] h-[65vh] object-cover rounded-[0.5rem] absolute top-0 left-0 z-[-1]"
				alt="receipt background"
			/>
			<h2 className="text-center font-bold text-[3vh]">MoodMemoir</h2>
			<h3 className="text-center uppercase text-[2vh] mb-[1vh]">
				{formData.fullName || "Anonymous"}
			</h3>
			<div className="flex items-center justify-between text-[1.4vh] mb-[2vh]">
				<p>{formattedDate}</p>
				<p>{formattedTime}</p>
			</div>
			<div className="border-t-2 border-dashed border-neutral-800" />
			<div className="flex items-center text-[1.4vh] my-[0.5vh]">
				<p className="mr-[1vw]">QTY</p>
				<p>ITEM</p>
				<p className="ml-auto">AMT</p>
			</div>
			<div className="border-t-2 border-dashed border-neutral-800" />
			<div className="my-[1vh]">
				{moodLabels.map((label, index) => (
					<div
						className="flex items-center text-[1.4vh] my-[0.25vh]"
						key={label}
					>
						<p className="mr-[1vw]">0{index + 1}</p>
						<p>{label}</p>
						<p className="ml-auto">{formData[label.toLowerCase()]}/10</p>
					</div>
				))}
			</div>
			<div className="border-t-2 border-dashed border-neutral-800" />
			<p className="text-[1.4vh] mt-[1vh]">{totalItems} items total</p>
			<div className="flex items-center justify-between mb-[1vh]">
				<p className="text-[1.6vh]">Total Overall:</p>
				<p className="text-[1.6vh] font-bold">{mostFeltMood}</p>
			</div>
			<div className="border-t-2 border-dashed border-neutral-800" />
			<p className="my-[1vh] text-[1.2vh] italic text-neutral-600">
				"{formData.note || "No notes today."}"
			</p>
			<div className="border-t-2 border-dashed border-neutral-800" />
			<img
				src="/barcode.png"
				className="w-full h-[5vh] object-cover my-[1vh]"
				alt="barcode"
			/>
			<div className="border-t-2 border-dashed border-neutral-800" />
			<p className="text-[1.4vh] mt-[1vh] text-center">
				Thank You for Shopping!
			</p>
		</div>
	);
};

export default Receipt;
