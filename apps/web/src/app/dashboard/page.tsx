"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
	const router = useRouter();
	const { data: session, isPending } = authClient.useSession();

	// Placeholder for portfolio - dashboard not fully implemented yet
	const privateData = { data: null, error: null, isLoading: false };

	useEffect(() => {
		if (!session && !isPending) {
			router.push("/login");
		}
	}, [session, isPending, router]);

	if (isPending) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full border-2 border-primary border-t-transparent h-8 w-8 mx-auto mb-4" />
					<p>Loading...</p>
				</div>
			</div>
		);
	}

	if (!session) {
		return null; // Will redirect to login
	}

	return (
		<div className="container mx-auto py-8">
			<div className="mb-8">
				<h1 className="text-4xl font-bold">Dashboard</h1>
				<p className="text-muted-foreground mt-2">
					Welcome back, {session.user.name || session.user.email}!
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle>Profile</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							Manage your account settings and preferences.
						</p>
						<Button variant="outline" disabled>
							Edit Profile (Coming Soon)
						</Button>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Projects</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							View and manage your portfolio projects.
						</p>
						<Button variant="outline" onClick={() => router.push("/projects")}>
							View Projects
						</Button>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Analytics</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							Track your portfolio performance and visitor metrics.
						</p>
						<Button variant="outline" disabled>
							View Analytics (Coming Soon)
						</Button>
					</CardContent>
				</Card>
			</div>

			<Card className="mt-6">
				<CardHeader>
					<CardTitle>Account Actions</CardTitle>
				</CardHeader>
				<CardContent>
					<Button
						variant="outline"
						onClick={() => {
							authClient.signOut();
							router.push("/");
						}}
					>
						Sign Out
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
