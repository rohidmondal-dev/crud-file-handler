"use client";

import { CreateType } from "@/lib/type";
import { createSchema } from "@/lib/zodSchema";
import profileCreateAction from "@/server/profileCreateAction";
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
	const [isCoverFile, setIsCoverFile] = useState(false);
	const [isProfileFile, setIsProfileFile] = useState(false);

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

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
		reset,
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

		console.log(coverPicker.plainFiles[0]);

		console.log(profilePicker.plainFiles[0]);

		console.log(fData);

		profileCreateAction();
	};

	const resetHandler = () => {
		setIsCoverFile(false);
		coverPicker.clear();

		setIsProfileFile(false);
		profilePicker.clear();

		reset();
	};

	return (
		<>
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

			<form
				id="user-form"
				onSubmit={handleSubmit(cFormHandler)}
				className="grid gap-4"
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

				<div className="grid grid-cols-2 gap-8">
					{/* Reset Button */}
					<Button
						type="reset"
						onClick={resetHandler}
						variant={"destructive"}
						className="cursor-pointer">
						Reset
					</Button>

					{/* Submit Button */}
					<Button
						type="submit"
						className="cursor-pointer"
						disabled={!isCoverFile || !isProfileFile || isSubmitting}>
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
				</div>
			</form>
		</>
	);
};

export default ProfileCreateForm;
