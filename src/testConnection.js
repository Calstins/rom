const connection = require('./config/connectDB');

async function testDB() {
  try {
    const conn = await connection.getConnection(); // Get a connection from the pool
    const [results] = await conn.query('SHOW TABLES;'); // Use await with query()

    console.log('Database tables:', results);

    conn.release(); // Release connection back to pool
  } catch (err) {
    console.error('Error fetching tables:', err);
  }
}

testDB();
