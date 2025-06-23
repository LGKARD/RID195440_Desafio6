import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('desafio6_db.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the desafio6_db database.');
});

export default db