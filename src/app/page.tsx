import ProfileCard from "@/components/ProfileCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return (
		<section className="grid grid-cols-2 place-items-center gap-8 pt-14 pb-7">
			<ProfileCard />
			<ProfileCard />
			<ProfileCard />
			<ProfileCard />
		</section>
	);
};

export default page;
