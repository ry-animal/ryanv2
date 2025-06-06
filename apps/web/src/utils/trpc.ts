import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => {
			console.error('Query error:', error.message);
		},
	}),
});

// Placeholder trpc object for portfolio - not used in current implementation
export const trpc = {
	todo: {
		getAll: {
			query: () => Promise.resolve([]),
		},
	},
};
