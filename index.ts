import {Client} from "pg";

export interface Env {
    DB: string;
}

export default {
    async fetch(
        request: Request,
        env: Env,
        ctx: ExecutionContext
    ): Promise<Response> {
        const client = new Client(env.DB);
        await client.connect();
        const start = Date.now();
        const result = await client.query('SELECT 1');
        const end = Date.now();
        // Close the database connection, but don't block returning the response
        ctx.waitUntil(client.end());
        return new Response(JSON.stringify({"query": end-start}), {
            headers: {'Content-Type': 'application/json'},
        });
    },
};