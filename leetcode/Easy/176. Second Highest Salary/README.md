[176. Second Highest Salary](https://leetcode.com/problems/second-highest-salary/)

Table: `Employee`

```sql
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
```

id is the primary key (column with unique values) for this table.
Each row of this table contains information about the salary of an employee.

Write a solution to find the second highest salary from the `Employee` table. If there is no second highest salary, return `null (return None in Pandas)`.

The result format is in the following example.

**Example 1:**

**Input:**
Employee table:

```sql
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
```

**Output:**

```sql
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
```

**Example 2:**

**Input:**

```sql
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
```

**Output:**

```sql
+---------------------+
| SecondHighestSalary |
+---------------------+
| null                |
+---------------------+
```

![solution proof](./ss.png)
