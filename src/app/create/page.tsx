import ProfileCreateForm from "@/components/ProfileCreateForm";
import { Card, CardContent, CardHeader } from "@/components/shadcnui/card";

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
