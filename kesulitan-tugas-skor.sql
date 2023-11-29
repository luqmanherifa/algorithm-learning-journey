SELECT t.id AS task_id, t.name AS task_name,
  CASE
    WHEN AVG(r.score) <= 20 THEN 'Hard'
    WHEN AVG(r.score) <= 60 THEN 'Medium'
    ELSE 'Easy'
  END AS difficulty
FROM tasks t
JOIN reports r ON t.id = r.task_id
GROUP BY t.id, t.name
ORDER BY t.id;

-- 2. given:
-- tasks:
-- id | name
-- ---+-----------
-- 3  | Cake
-- 6  | GameOfNuts
-- 7  | CircleIntersectionArea
-- 9  | JessicaAndBrian

-- reports:
-- id | task_id | candidate      | score
-- ---+---------+----------------+--------
-- 2  | 6       | Paul Sat       | 0
-- 3  | 3       | Karen M.       | 30
-- 5  | 3       | Oscar Glad     | 10
-- 7  | 9       | Karen M.       | 60
-- 11 | 6       | Paul Sat       | 81
-- 13 | 6       | Paul Sat       | 100

-- your query should return:
-- task_id | task_name       | difficulty
-- --------+-----------------+--------
-- 3       | Cake            | Hard
-- 6       | GameOfNuts      | Easy
-- 9       | JessicaAndBrian | Medium