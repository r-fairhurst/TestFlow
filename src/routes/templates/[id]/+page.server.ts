import { db } from '$lib/server/db/index.js';
import { test_templates,
    engagements as engagement_table,
    task_instances } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ params }) => { 
  
  const template = await db
  .select()
  .from(test_templates)
  .where(eq(test_templates.id, Number(params.id)))
  .get();

  if (!template) {
    throw error(404, 'Template not found');
  }

  return { template };
}
