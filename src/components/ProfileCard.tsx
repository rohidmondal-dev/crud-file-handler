import { Button } from "./shadcnui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./shadcnui/card";

const ProfileCard = () => {
	return (
		<>
			<Card className="py-0">
				<CardHeader className="h-32 w-full rounded-xl bg-[url(/cover.jpg)] bg-cover bg-center bg-no-repeat"></CardHeader>

				<CardContent>
					<div className="grid grid-cols-3 gap-5">
						<div className="rounded-full bg-[url(/profile.jpg)] bg-cover bg-center bg-no-repeat"></div>
						<div className="grid gap-3 text-2xl">
							<div className="">Rohid Mondal</div>
							<div className="">mondalrohid193@gmail.com</div>

							<div className="">Kolkata,India</div>
							<div className="">Contact:7679886986</div>
						</div>
					</div>
				</CardContent>

				<CardFooter>
					<div className="grid w-full grid-cols-2 gap-3 pb-1">
						<Button className="bg-red-600">Delete</Button>
						<Button className="bg-green-600">Edit</Button>
					</div>
				</CardFooter>
			</Card>
		</>
	);
};

export default ProfileCard;
