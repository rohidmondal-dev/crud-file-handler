"use client";

import { CreateType } from "@/lib/type";
import { createSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImagesIcon, LoaderIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useFilePicker } from "use-file-picker";
import { FileSizeValidator } from "use-file-picker/validators";
import { Button } from "./shadcnui/button";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";

const ProfileCreateForm = () => {
	const [isProfileFile, setIsProfileFile] = useState(false);
	const [isCoverFile, setIsCoverFile] = useState(false);

	const { openFilePicker, filesContent, plainFiles } = useFilePicker({
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

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(createSchema),
		defaultValues: {
			name: "",
			email: "",
			address: "",
			contact: "",
		},
		mode: "onChange",
	});

	const cFormHandler = async (fData: CreateType) => {
		await new Promise((r) => setTimeout(r, 1500));

		console.log(fData);
	};
	return (
		<>
			<div className="grid gap-4">
				{!isProfileFile && (
					<Image
						src={"https://placehold.co/1920x1080"}
						alt="Avatar Image"
						width={640}
						height={360}
						className="aspect-video h-[360px] w-[640px] rounded-sm object-cover"
					/>
				)}

				{filesContent.map((file, idx) => (
					<Image
						key={idx}
						src={file.content}
						alt={file.name}
						width={640}
						height={360}
						className="aspect-square h-[360px] w-[640px] rounded-sm object-cover"
					/>
				))}
			</div>

			<div className="mt-4 grid grid-cols-1 gap-4">
				<Button
					className="cursor-pointer"
					variant={"outline"}
					onClick={openFilePicker}>
					<ImagesIcon />
					Choose Image
				</Button>
			</div>

			<form
				id="user-form"
				onSubmit={handleSubmit(cFormHandler)}
				className="grid w-xs gap-4"
				noValidate>
				{/* Full Name Field */}
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={!!fieldState.error}>
							<FieldLabel htmlFor="fullname">Full Name</FieldLabel>
							<Input
								{...field}
								id="fullname"
								placeholder="John Doe"
								aria-invalid={!!fieldState.error}
							/>
							{fieldState.error && (
								<FieldError>{fieldState.error.message}</FieldError>
							)}
						</Field>
					)}
				/>

				{/* Email Field */}
				<Controller
					name="email"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={!!fieldState.error}>
							<FieldLabel htmlFor="email">Email</FieldLabel>
							<Input
								{...field}
								id="email"
								type="email"
								placeholder="john@example.com"
								aria-invalid={!!fieldState.error}
							/>
							{fieldState.error && (
								<FieldError>{fieldState.error.message}</FieldError>
							)}
						</Field>
					)}
				/>

				{/* Address Field */}
				<Controller
					name="address"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={!!fieldState.error}>
							<FieldLabel htmlFor="phone">Address</FieldLabel>
							<Input
								{...field}
								id="full address"
								type="text"
								placeholder="Enter Your Full Address"
								aria-invalid={!!fieldState.error}
							/>
							{fieldState.error && (
								<FieldError>{fieldState.error.message}</FieldError>
							)}
						</Field>
					)}
				/>

				{/* Phone Field */}
				<Controller
					name="contact"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={!!fieldState.error}>
							<FieldLabel htmlFor="phone">Phone Number</FieldLabel>
							<Input
								{...field}
								id="phone"
								type="tel"
								aria-invalid={!!fieldState.error}
							/>
							{fieldState.error && (
								<FieldError>{fieldState.error.message}</FieldError>
							)}
						</Field>
					)}
				/>

				{/* Submit Button */}
				<Button
					type="submit"
					className="cursor-pointer"
					disabled={isSubmitting}>
					{isSubmitting ? (
						<>
							<LoaderIcon className="animate-spin" /> Submitting...
						</>
					) : (
						<>
							<SendIcon /> Submit
						</>
					)}
				</Button>
			</form>
		</>
	);
};

export default ProfileCreateForm;
