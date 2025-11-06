
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const projects = sqliteTable('projects', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  serviceType: text('serviceType').notNull(),
  imageUrl: text('imageUrl'),
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
});

export const blogPosts = sqliteTable('blog_posts', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  imageUrl: text('imageUrl'),
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
});

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  isAdmin: integer('isAdmin', { mode: 'boolean' }).default(false),
});
