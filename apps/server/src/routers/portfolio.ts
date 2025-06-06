import { eq } from "drizzle-orm";
import z from "zod/v4";
import { db } from "../db";
import { experiences, projects, skills } from "../db/schema/portfolio";
import { protectedProcedure, publicProcedure, router } from "../lib/trpc";

export const portfolioRouter = router({
	// Public procedures for portfolio display
	getProjects: publicProcedure
		.input(z.object({ featured: z.boolean().optional() }).optional())
		.query(async ({ input }) => {
			const query = db.select().from(projects);
			
			if (input?.featured) {
				return await query.where(eq(projects.featured, true));
			}
			
			return await query.orderBy(projects.createdAt);
		}),

	getProject: publicProcedure
		.input(z.object({ slug: z.string() }))
		.query(async ({ input }) => {
			const [project] = await db
				.select()
				.from(projects)
				.where(eq(projects.slug, input.slug));
			return project;
		}),

	getExperiences: publicProcedure.query(async () => {
		return await db.select().from(experiences).orderBy(experiences.startDate);
	}),

	getSkills: publicProcedure.query(async () => {
		return await db
			.select()
			.from(skills)
			.orderBy(skills.category, skills.name);
	}),

	// Protected procedures for content management
	createProject: protectedProcedure
		.input(
			z.object({
				title: z.string().min(1),
				description: z.string().min(1),
				slug: z.string().min(1),
				content: z.string().optional(),
				technologies: z.string().optional(),
				githubUrl: z.string().url().optional(),
				liveUrl: z.string().url().optional(),
				imageUrl: z.string().url().optional(),
				featured: z.boolean().default(false),
			}),
		)
		.mutation(async ({ input }) => {
			const now = new Date();
			return await db.insert(projects).values({
				...input,
				createdAt: now,
				updatedAt: now,
			});
		}),

	updateProject: protectedProcedure
		.input(
			z.object({
				id: z.number(),
				title: z.string().min(1).optional(),
				description: z.string().min(1).optional(),
				slug: z.string().min(1).optional(),
				content: z.string().optional(),
				technologies: z.string().optional(),
				githubUrl: z.string().url().optional(),
				liveUrl: z.string().url().optional(),
				imageUrl: z.string().url().optional(),
				featured: z.boolean().optional(),
			}),
		)
		.mutation(async ({ input }) => {
			const { id, ...updateData } = input;
			return await db
				.update(projects)
				.set({ ...updateData, updatedAt: new Date() })
				.where(eq(projects.id, id));
		}),

	deleteProject: protectedProcedure
		.input(z.object({ id: z.number() }))
		.mutation(async ({ input }) => {
			return await db.delete(projects).where(eq(projects.id, input.id));
		}),
}); 