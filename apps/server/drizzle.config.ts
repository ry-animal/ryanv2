import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/db/schema",
	out: "./src/db/migrations",
	dialect: "postgresql",
	dbCredentials: {
		// Use DIRECT_DATABASE_URL for migrations (Drizzle Kit requirement)
		// Use DATABASE_URL for runtime queries (supports Prisma Accelerate)
		url: process.env.DIRECT_DATABASE_URL || process.env.DATABASE_URL || "",
	},
});
