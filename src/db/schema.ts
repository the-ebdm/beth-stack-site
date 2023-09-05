import { pgTable, serial, text, varchar, boolean, timestamp, json } from "drizzle-orm/pg-core";

export const tags = pgTable("tags", {
  id: serial('id').primaryKey(),
  notionId: varchar("notion_id"),
  name: varchar("name").notNull(),
  color: varchar("color").notNull(),
});

export type Tag = typeof tags.$inferSelect;

export const jobs = pgTable("jobs", {
  id: serial('id').primaryKey(),
  type: varchar("type").notNull(),
  due: timestamp("due").notNull(),
  completed: boolean("completed").notNull().default(false),
  completedAt: timestamp("completed_at"),
});

export type Job = typeof jobs.$inferSelect;

export const links = pgTable("links", {
  id: serial('id').primaryKey(),
  url: varchar("url").notNull().unique(),
  title: varchar("title").notNull(),
  notionId: varchar("notion_id"),
  description: text("description"),
  image: varchar("image"),
});

export type Link = typeof links.$inferSelect;