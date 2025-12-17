import ProfileUpdateForm from "@/components/ProfileUpdateForm";
import { Card, CardContent, CardHeader } from "@/components/shadcnui/card";

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card>
				<CardHeader></CardHeader>
				<CardContent>
					<ProfileUpdateForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
