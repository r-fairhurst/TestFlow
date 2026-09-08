import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema.js';
import { test_templates } from './schema.js';
import { eq } from 'drizzle-orm';
import { env } from '$env/dynamic/private';
import desktop_template from '$lib/data/templates/desktop.json' with { type: 'json' };

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = new Database(env.DATABASE_URL);

export const db = drizzle(client, { schema });


const existingTemplate = await db
    .select()
    .from(test_templates)
    .where(eq(test_templates.template_name, desktop_template.name))
    .get();


if (!existingTemplate) {
    await db.insert(test_templates).values({
        template_name: desktop_template.name,
        version: desktop_template.version,
        tasks: desktop_template.tasks
    });
}


console.log('template id: ', existingTemplate?.id);