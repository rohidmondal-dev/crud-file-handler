import { Button } from "./shadcnui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./shadcnui/card";

const ProfileCard = () => {
	return (
		<>
			<Card className="py-0">
				<CardHeader className="h-32 w-md rounded-xl bg-[url(/cover.jpg)] bg-cover bg-center bg-no-repeat"></CardHeader>

				<CardContent></CardContent>

				<CardFooter>
					<Button>Delete</Button>
					<Button>Edit</Button>
				</CardFooter>
			</Card>
		</>
	);
};

export default ProfileCard;
