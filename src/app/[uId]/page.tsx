import AvatarUpdateForm from "@/components/AvatarUpdateForm";
import CoverUpdateForm from "@/components/CoverUpdateForm";
import ProfileUpdateForm from "@/components/ProfileUpdateForm";
import { Card, CardContent, CardHeader } from "@/components/shadcnui/card";

type UpdatePageProps = {
	params: Promise<{ uId: string }>;
};

const page = async ({ params }: UpdatePageProps) => {
	const { uId } = await params;

	console.log(uId);

	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card>
				<CardHeader></CardHeader>
				<CardContent>
					<CoverUpdateForm />
					<AvatarUpdateForm />
					<ProfileUpdateForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
