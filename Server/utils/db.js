
const { pool }= require('pg');
const pool = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'EmployeeManagementSystem',
    password: '1234567890',
    port: 5432,
})
 pool.connect((err) => {
    if (err){
        console.error('error connecting to database:', err);
    return;
    }
    console.log('connected to database');
 })
 export default pool;