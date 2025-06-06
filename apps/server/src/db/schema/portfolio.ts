import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
	id: serial("id").primaryKey(),
	slug: text("slug").notNull().unique(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	content: text("content"), // MDX content
	technologies: text("technologies"), // JSON array as string
	githubUrl: text("github_url"),
	liveUrl: text("live_url"),
	imageUrl: text("image_url"),
	featured: boolean("featured").default(false).notNull(),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
});

export const experiences = pgTable("experiences", {
	id: serial("id").primaryKey(),
	company: text("company").notNull(),
	position: text("position").notNull(),
	description: text("description"),
	startDate: timestamp("start_date").notNull(),
	endDate: timestamp("end_date"),
	current: boolean("current").default(false).notNull(),
	technologies: text("technologies"), // JSON array as string
	logoUrl: text("logo_url"),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
});

export const skills = pgTable("skills", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	category: text("category").notNull(), // "frontend", "backend", "tools", "languages"
	proficiency: text("proficiency").notNull(), // "beginner", "intermediate", "advanced", "expert"
	iconUrl: text("icon_url"),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
}); 