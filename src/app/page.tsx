import ProfileCard from "@/components/ProfileCard";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Crud File App",
	description: "Home page of Crud File App",
};

const page = async () => {
	const allProfiles = await prisma.profile.findMany();

	return (
		<section className="grid grid-cols-2 place-items-center gap-8 pt-14 pb-7">
			{allProfiles.map((item) => (
				<ProfileCard key={item.id} />
			))}
		</section>
	);
};

export default page;
