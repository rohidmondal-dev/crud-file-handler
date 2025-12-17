"use client";

import { ImagesIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useFilePicker } from "use-file-picker";
import { FileSizeValidator } from "use-file-picker/validators";
import { Button } from "./shadcnui/button";

const AvatarUpdateForm = () => {
	const [isProfileFile, setIsProfileFile] = useState(false);

	const profilePicker = useFilePicker({
		readAs: "DataURL",
		accept: "image/*",
		multiple: false,
		validators: [
			new FileSizeValidator({
				maxFileSize: 5 * 1024 * 1024,
			}),
		],

		onFilesSuccessfullySelected: () => setIsProfileFile(true),
		onClear: () => setIsProfileFile(false),
	});

	return (
		<div className="mb-4 grid gap-4">
			<div className="grid place-items-center">
				{!isProfileFile && (
					<Image
						src={"https://placehold.co/160x160"}
						alt="Profile Image"
						width={160}
						height={160}
						className="h-40 w-40 rounded-sm object-cover"
					/>
				)}

				{profilePicker.filesContent.map((file, idx) => (
					<Image
						key={idx}
						src={file.content}
						alt={file.name}
						width={160}
						height={160}
						className="h-40 w-40 rounded-sm object-cover"
					/>
				))}
			</div>

			{!isProfileFile && (
				<Button
					className="cursor-pointer"
					variant={"outline"}
					onClick={profilePicker.openFilePicker}>
					<ImagesIcon />
					Choose Profile
				</Button>
			)}
		</div>
	);
};

export default AvatarUpdateForm;
