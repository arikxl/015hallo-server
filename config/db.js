import mysql from "mysql";

export const db = mysql.createConnection({
    user: 'b04740b7f04311',
    host: 'eu-cdbr-west-02.cleardb.net',
    password : '408d3c65',
    database: 'heroku_93dc5d956a6911b'
});

