import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TodosPage() {
	return (
		<div className="container mx-auto py-8">
			<div className="mb-8">
				<h1 className="text-4xl font-bold">Todo App</h1>
				<p className="text-muted-foreground mt-2">
					This is a placeholder for the todo functionality that will be implemented with the server component.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Coming Soon</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">
						The todo application will be available once the server backend is deployed.
						This portfolio focuses on the frontend experience and design.
					</p>
					<Button className="mt-4" disabled>
						Add Todo (Coming Soon)
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
