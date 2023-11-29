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

  -- Soal:

  -- It's the SQL

  -- insert into tasks values (101, 'MinDist');
  -- insert into tasks values (123, 'Equi');
  -- insert into tasks values (142, 'Median');
  -- insert into tasks values (300, 'Tricoloring');
  -- insert into reports values (13, 101, 'John Smith', 100);
  -- insert into reports values (24, 123, 'Delaney Lloyd', 34);
  -- insert into reports values (37, 300, 'Monroe Jimenez', 50);
  -- insert into reports values (49, 101, 'Stanley Price', 45);
  -- insert into reports values (51, 142, 'Tanner Sears', 37);
  -- insert into reports values (68, 142, 'Lara Fraser', 3);
  -- insert into reports values (83, 300, 'Tanner Sears', 0);

  -- awwskuy is a company that creates programming tasks which are solved by candidates. after submitting their solution to a task, each candidate receives a report containing the number of points their solution scored, which is an integer between 0 and 100.

  -- you are given two tables, tasks, and reports, with the following structure:

  -- create tables tasks 
  --   (id integer not null, 
  --   name varchar (40) not null, 
  --   unique(id)
  -- );

  -- create tables reports (
  --   id integer not null,
  --   name varchar(40) not null,
  --   unique(id)
  -- );

  -- create tables reports (
  --   id integer not null,
  --   task_id integer not null,
  --   candidate varchar(40) not null,
  --   score integer not null,
  --   unique(id)
  -- );

  -- your task is to write and SQL query which assigns a difficulty rating to each task having at least one solution. the difficulty of the task depends on the average score of all candidates' solutions submitted for this task. it is possible that one candidate have submitted multiple solutions for the same task; in this case, all of those olutions hsould be included in the average.

  -- there are three difficulties: "easy, "medium", and "hard".

  -- - if the average score for the task is lovewer than or equal to 20, then its difficulty is "Hard"
  -- - if the average is hight than 20 but lower than or equal to 60, then its difficulty is "Medium".
  -- - if the vaerage is higher than 60, its difficulty is "easy".

  -- for example, if the average score of the task is 50, then its diffuclty is "Medium" because the average score is greater than 20 but less then 60.

  -- your query should return a table containing three columns: task_id(ID of task), task_name(name of task) and difficulty - the difficulty of the task, which is one of three possible strings: "easy", "medium", or "hard". rows should be ordered by increasing task_id. if no solutions exist form some task, that task should not apper in your table.

  -- examples: 

  -- 1. given:
  -- tasks: 
  -- id  | name
  -- ----+--------
  -- 101 | MinDist
  -- 123 | Equi
  -- 142 | Median
  -- 300 | Tricoloring

  -- reports:
  -- id | task_id | candidate      | score
  -- ---+---------+----------------+--------
  -- 13 | 101     | John Smith     | 100
  -- 24 | 123     | Delaney Lloyd  | 34
  -- 37 | 300     | Monroe Jimenez | 50
  -- 49 | 101     | Stanley Price  | 45
  -- 51 | 142     | Tanner Sears   | 37
  -- 68 | 142     | Lara Fraser    | 3
  -- 83 | 300     | Tanner Sears   | 0

  -- your query should return:
  -- task_id | task_name   | difficulty
  -- --------+-------------+--------
  -- 101     | MinDist     | Easy
  -- 123     | Equi        | Medium
  -- 300     | Median      | Hard
  -- 101     | Tricoloring | Medium

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