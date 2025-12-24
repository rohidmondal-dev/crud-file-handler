import ProfileCreateForm from "@/components/ProfileCreateForm";
import { Card, CardContent, CardHeader } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Crud File App",
	description: "Create page of Crud File App",
};

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card>
				<CardHeader></CardHeader>
				<CardContent>
					<ProfileCreateForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
