-- Get the person with the highest salary by job
--  (transfer the job value as query param)

-- ALL
SELECT name, position, max(salary)
FROM data
GROUP BY position;

-- BY POSITION
SELECT name, position, max(salary)
FROM data
WHERE position = 'Accountant';


-- 2. Get the Object or array of objects that give information about all the jobs and calculate
-- average salary of the different jobs
-- The object should look something like this (this is just a recommendation) :
-- {
-- Psychologist:13500,
-- Web Developer:12300
-- }
SELECT position, ROUND(AVG(salary),1) AS 'averageSalary'
FROM data
GROUP BY position;


-- 3. Get all jobs names and they popularity,
--  for popularity you need to count the amount of
-- people who work in the same job

SELECT position, COUNT(*) AS 'amountOfEmps'
FROM data
GROUP BY position;





-- למצוא שם שחוזר על עצמו
SELECT name, position, salary, COUNT(name)
FROM data
GROUP BY name
HAVING COUNT(name)>1



-- להוסיף

INSERT INTO data (name, position, salary)
VALUES ('aaaArik Alexandrov', 'Teacher', 999)

