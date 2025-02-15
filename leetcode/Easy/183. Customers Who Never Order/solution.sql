-- Write your MySQL query statement below
SELECT name AS Customers
FROM Customers AS Customers
    LEFT OUTER JOIN Orders ON Customers.id = Orders.customerId
WHERE Orders.customerId IS NULL;