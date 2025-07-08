"use client";
import { useState } from "react";
import Receipt from "@/components/Receipt";

export default function Home() {
	const [formData, setFormData] = useState({
		fullName: "",
		happy: 1,
		sad: 1,
		angry: 1,
		anxious: 1,
		excited: 1,
		tired: 1,
		note: "",
	});

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: name === "fullName" || name === "note" ? value : parseInt(value),
		}));
	}

	function handleSubmit() {
		console.log("Mood Entry:", formData);
	}

	return (
		<div className="h-[100vh] w-[100vw] flex pt-[10vh] justify-center">
			<main className="w-[60vw] h-fit mx-auto flex flex-col">
				<h1 className="text-center text-[5vh] mb-[4vh]">Mood Memoir</h1>
				<div className="flex flex-col md:flex-row justify-center items-center">
					{/* Form */}
					<div className="w-1/2">
						<p className="mt-[1vh] mb-[0.5vh]">Full Name</p>
						<input
							type="text"
							name="fullName"
							value={formData.fullName}
							onChange={handleChange}
							placeholder="Full Name"
							className="w-full rounded-[0.5rem] px-[1vw] py-[0.75vh] border border-neutral-300 focus:border-neutral-500 transition-all outline-none"
						/>
						<div className="grid grid-cols-2 gap-x-[1vw]">
							{["happy", "sad", "angry", "anxious", "excited", "tired"].map(
								(mood) => (
									<div className="flex flex-col" key={mood}>
										<p className="mt-[1vh] mb-[0.5vh] capitalize">{mood}</p>
										<input
											type="number"
											name={mood}
											value={formData[mood as keyof typeof formData]}
											min={1}
											max={10}
											onChange={handleChange}
											className="w-full rounded-[0.5rem] px-[1vw] py-[0.75vh] border border-neutral-300 focus:border-neutral-500 transition-all outline-none"
										/>
									</div>
								)
							)}
						</div>
						<p className="mt-[1.5vh] mb-[0.5vh]">Additional Note</p>
						<textarea
							name="note"
							value={formData.note}
							onChange={handleChange}
							minLength={5}
							maxLength={70}
							placeholder="Additional Note"
							className="resize-none w-full rounded-[0.5rem] px-[1vw] py-[0.75vh] border border-neutral-300 focus:border-neutral-500 transition-all outline-none"
						></textarea>
						<div className="flex gap-[0.25vw] mt-[2vh]">
							<button
								onClick={handleSubmit}
								className="w-full py-[0.75vh] bg-neutral-200 rounded-[0.5rem]"
							>
								Submit
							</button>
							<button
								onClick={() => alert("Download coming soon 😎")}
								className="w-full py-[0.75vh] bg-neutral-200 rounded-[0.5rem]"
							>
								Download
							</button>
						</div>
					</div>
					{/* Receipt */}
					<div className="w-1/2 flex items-center justify-center">
						<Receipt formData={formData} />
					</div>
				</div>
			</main>
		</div>
	);
}
