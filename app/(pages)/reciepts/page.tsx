"use client";
import { useEffect, useState } from "react";
import Receipt from "@/components/Receipt";
import Link from "next/link";

const Page = () => {
	const [receipts, setReceipts] = useState<any[]>([]);

	useEffect(() => {
		const stored = JSON.parse(localStorage.getItem("receipts") || "[]");
		setReceipts(stored);
	}, []);

	return (
		<div className="min-h-screen w-full flex flex-col items-center py-10">
			<Link href={"/"} className="absolute top-[2vh] left-[4vw]">
				Home
			</Link>
			<h1 className="text-3xl font-bold mb-6">Saved Receipts</h1>
			{receipts.length === 0 ? (
				<p className="text-neutral-500">No saved receipts yet.</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{receipts.map((r) => (
						<Receipt key={r.id} formData={r} />
					))}
				</div>
			)}
		</div>
	);
};

export default Page;
