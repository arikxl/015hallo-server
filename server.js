import express from "express";
import cors from "cors";

import {db} from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());



// all highest Salary
app.get('/highestSalary', (req, res) => {
    db.query(`SELECT name, position,
            max(salary) AS highestSalary,
            ROUND(AVG(salary),1) AS averageSalary
            FROM data GROUP BY position`,
    (err, result) => {
        if(err)  {
            console.error(err);
        } else {
            res.send(result);
        }
    })
});

// highest salary by position
app.get('/highest/:position', (req, res) => {
    const position = req.params.position;
    console.log('position:', position)
    db.query(`SELECT name, position,
            max(salary) AS 'highestSalary',
            ROUND(AVG(salary),1) AS 'averageSalary'
            FROM data WHERE position = '${position}'`,
    (err, result) => {
        if(err)  {
            console.error(err);
        } else {
            res.send(result);
        }
    })
});

app.post('/create', (req, res) => {

    const name = req.body.name;
    const position = req.body.position;
    const salary = req.body.salary;

    db.query('INSERT INTO data (name, position, salary) VALUES (?, ?, ?)',
    [name, position, salary], 
    (err, result) => {
        if(err)  {
            console.error(err);
        } else {
            res.send('Values inserted successfully');
        }
    });
});

app.get('/popularity', (req, res) => {
    db.query(`SELECT position,
    COUNT(*) AS 'amountOfEmployees'
    FROM data
    GROUP BY position`, (err, result) => {
        if(err)  {
            console.error(err);
        } else {
            res.send(result);
        }
    })
});


app.listen(PORT, console.log('server running on port ' + PORT));

// npm run server