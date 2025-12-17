"use client";

import { ImagesIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useFilePicker } from "use-file-picker";
import { FileSizeValidator } from "use-file-picker/validators";
import { Button } from "./shadcnui/button";

const CoverUpdateForm = () => {
	const [isCoverFile, setIsCoverFile] = useState(false);

	const coverPicker = useFilePicker({
		readAs: "DataURL",
		accept: "image/*",
		multiple: false,
		validators: [
			new FileSizeValidator({
				maxFileSize: 5 * 1024 * 1024,
			}),
		],

		onFilesSuccessfullySelected: () => setIsCoverFile(true),
		onClear: () => setIsCoverFile(false),
	});

	return (
		<div className="mb-4 grid gap-4">
			{!isCoverFile && (
				<Image
					src={"https://placehold.co/512x128"}
					alt="Cover Image"
					width={512}
					height={128}
					className="h-32 w-lg rounded-sm object-cover"
				/>
			)}

			{coverPicker.filesContent.map((file, idx) => (
				<Image
					key={idx}
					src={file.content}
					alt={file.name}
					width={512}
					height={128}
					className="h-32 w-lg rounded-sm object-cover"
				/>
			))}

			{!isCoverFile && (
				<Button
					className="cursor-pointer"
					variant={"outline"}
					onClick={coverPicker.openFilePicker}>
					<ImagesIcon />
					Choose Cover
				</Button>
			)}
		</div>
	);
};

export default CoverUpdateForm;
