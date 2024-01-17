# cloudflare-worker-template
Bootstrap your Cloudflare Worker to connect to a pgEdge database.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/pgEdge/cloudflare-worker-template)

This is a simple Cloudflare Worker that connects to a pgEdge database. Use it as a starting point 
for your own project! Simply click on the button above to deploy this worker to your Cloudflare
account and create a Github repository for it.

## pgEdge connection

The easiest way to get your worker connected to a pgEdge database is to go to the [pgEdge console](https://app.pgedge.com).
If you have not yet signed up for pgEdge, you can easily sign in with your social accounts. Creating a new 
database is free and takes less than a minute.

Once you've connected the console, navigate to the database you want to connect to. On the sidebar, click
on the "Integrations" tab. You should see a "Cloudflare Workers" integration. This will provide you with
all the details you need to connect your worker to your database.

If you prefer to follow READMEs instead of clicking around, here are the steps to get your worker connected...

### Setup your local environment

Once you've deployed your worker and cloned your repository, you'll need to setup your local environment to 
be able to run the worker locally. You'll need to install wrangler, the Cloudflare CLI tool.

```bash
npm install -g @cloudflare/wrangler
```

### DB connection

The database connection is configured using the `DB` environment variable. The value should be in
connection string format, e.g. `postgres://user:pass@host/dbname?sslmode=required`. This value
can be added to Cloudflare using `wrangler` like so:

```bash
wrangler secret put DB
```

The value to enter is the connection string from the pgEdge console. This can be found on the Integrations
tab of your database under the Cloudflare Workers integration, or on the database details page under the 
"Connect to your database" section.  The "Nearest Node" tab will provide you with the connection string.

### Add your local secret

Additionally, you should make a `.dev.vars` file and set the `DB` environment variable there as well
so that you can run the worker locally.

```bash
DB=postgres://user:pass@host/dbname?sslmode=required
```

### Run your worker locally

You can run your worker locally using `wrangler`:

```bash
wrangler dev
```

Or you can use the Cloudflare dashboard to navigate to your worker and
find the deployed worker's URL.

