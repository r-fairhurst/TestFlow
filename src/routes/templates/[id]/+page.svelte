<script lang="ts">
    import type { PageData } from './$types.js';
    let { data }: { data: PageData } = $props();
</script>

<h1>Template Details</h1>

<h2>Task Template Name: {data.template.template_name}</h2>

<p>Version: {data.template.version}</p>

{#each data.template.tasks as task}
    <div>
        <h3>Task Name: {task.task_name}</h3>
        <p>Description: {task.description}</p>
        <p>Type: {task.type}</p>
        <p>Priority: {task.priority}</p>
    </div>
{/each}
