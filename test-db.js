
const { Client } = require('pg');

const connectionString = "postgresql://neondb_owner:npg_zyS3Lpn9TboH@ep-sweet-sea-abanthq7-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require";

const client = new Client({
  connectionString: connectionString,
});

async function testConnection() {
  try {
    console.log('Attempting to connect to:', connectionString.replace(/:[^:@]+@/, ':****@'));
    await client.connect();
    console.log('Connection successful!');
    const res = await client.query('SELECT NOW()');
    console.log('Server time:', res.rows[0].now);
    await client.end();
  } catch (err) {
    console.error('Connection error:', err.message);
    if (err.detail) console.error('Detail:', err.detail);
    if (err.hint) console.error('Hint:', err.hint);
    process.exit(1);
  }
}

testConnection();
