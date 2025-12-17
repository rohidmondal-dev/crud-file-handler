"use client";

import { CreateType } from "@/lib/type";
import { createSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, SendIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";

const ProfileUpdateForm = () => {
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

		console.log(fData);
	};

	return (
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
					onClick={() => reset()}
					variant={"destructive"}
					className="cursor-pointer">
					Reset
				</Button>

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
			</div>
		</form>
	);
};

export default ProfileUpdateForm;
