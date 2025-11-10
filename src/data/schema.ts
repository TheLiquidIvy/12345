
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const projects = sqliteTable('projects', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description').notNull(),
  content: text('content'),
  category: text('category').notNull(),
  imageUrl: text('imageUrl'),
  slug: text('slug').notNull().unique(),
  status: text('status', { enum: ['draft', 'published'] }).default('draft').notNull(),
  seoTitle: text('seo_title'),
  metaDescription: text('meta_description'),
  ogImage: text('og_image'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
  publishedAt: integer('published_at', { mode: 'timestamp' }),
});

export const blogPosts = sqliteTable('blog_posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  category: text('category').notNull(),
  imageUrl: text('image_url'),
  slug: text('slug').notNull().unique(),
  status: text('status', { enum: ['draft', 'published'] }).default('draft').notNull(),
  readTime: text('read_time'),
  author: text('author').default('PixelPlaque Team').notNull(),
  seoTitle: text('seo_title'),
  metaDescription: text('meta_description'),
  ogImage: text('og_image'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
  publishedAt: integer('published_at', { mode: 'timestamp' }),
});

export const solutions = sqliteTable('solutions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description').notNull(),
  content: text('content'),
  category: text('category').notNull(),
  imageUrl: text('imageUrl'),
  slug: text('slug').notNull().unique(),
  status: text('status', { enum: ['draft', 'published'] }).default('draft').notNull(),
  seoTitle: text('seo_title'),
  metaDescription: text('meta_description'),
  ogImage: text('og_image'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
  publishedAt: integer('published_at', { mode: 'timestamp' }),
});

export const tags = sqliteTable('tags', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
  slug: text('slug').notNull().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});

export const blogPostTags = sqliteTable('blog_post_tags', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  blogPostId: integer('blog_post_id').notNull().references(() => blogPosts.id, { onDelete: 'cascade' }),
  tagId: integer('tag_id').notNull().references(() => tags.id, { onDelete: 'cascade' }),
});

export const projectTags = sqliteTable('project_tags', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  projectId: integer('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  tagId: integer('tag_id').notNull().references(() => tags.id, { onDelete: 'cascade' }),
});

export const solutionTags = sqliteTable('solution_tags', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  solutionId: integer('solution_id').notNull().references(() => solutions.id, { onDelete: 'cascade' }),
  tagId: integer('tag_id').notNull().references(() => tags.id, { onDelete: 'cascade' }),
});

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  isAdmin: integer('isAdmin', { mode: 'boolean' }).default(false),
});

export const subscribers = sqliteTable('subscribers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  name: text('name'),
  status: text('status', { enum: ['subscribed', 'unsubscribed'] }).default('subscribed').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});
