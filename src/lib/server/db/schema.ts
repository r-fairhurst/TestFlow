import { sql } from "drizzle-orm"
import { integer, sqliteTable, text, blob } from 'drizzle-orm/sqlite-core';

export const test_templates = sqliteTable('test_templates', {
	id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
	template_name: text('template_name').notNull(),
	version: integer('version').default(1),
	tree: blob('tree', { mode: 'json' }).notNull(),
	created_at: text('created_at').default(sql`(CURRENT_DATE)`),
});

export const engagements = sqliteTable('engagements', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	client_name: text('client_name').notNull(),
	template_id: integer('template_id').notNull(),
	created_at: text('created_at').default(sql`(CURRENT_DATE)`),
	status: text('status').default('in_progress'),
});

export const task_instances = sqliteTable('task_instances', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	engagement_id: integer('engagement_id').references(() => engagements.id),
	template_task_id: text('template_task_id'),
	parent_task_id: text('parent_task_id'),
	title: text('title'),
	linked_note: text('linked_note'),
	status: text('status').default('not_started'),
	answer: blob('answer', { mode: 'json' }),
	completed_by: text('completed_by'),
	completed_at: text('completed_at'),
	visible: integer('visible', { mode: 'boolean' }).default(true),
});