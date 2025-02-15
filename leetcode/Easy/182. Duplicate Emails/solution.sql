-- Write your MySQL query statement below
SELECT email AS Email
FROM (
        SELECT email,
            COUNT(email) AS count
        FROM Person
        GROUP BY email
    ) AS subQuery
WHERE count > 1;