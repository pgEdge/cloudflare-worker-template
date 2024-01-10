# cf-worker-template
Bootstrap your Cloudflare Worker to connect to a pgEdge database

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/pgEdge/cf-worker-template)

This is a simple Cloudflare Worker that connects to a pgEdge database. Use it as a starting point 
for your own project. 

## pgEdge connection

To find your pgEdge connection string, go to the [pgEdge console](https://app.pgedge.com). If you have 
not yet signed up for pgEdge, you can easily sign in with your social accounts. Creating a new database 
is free and takes less than a minute.

Once you've reached the console, navigate to the database you want to connect to. In the `Connect to your database` 
section, you will find your username, password, and the host is the `Domain`.  

## DB connection

The database connection is configured using the `DB` environment variable. The value should be in
connection string format, e.g. `postgres://user:pass@host/dbname?sslmode=required`. This value
can be added to Cloudflare using `wrangler` like so:

```bash
wrangler secret put DB
```

Additionally, you should make a `.dev.vars` file and set the `DB` environment variable there as well
so that you can run the worker locally.

