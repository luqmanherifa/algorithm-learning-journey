SELECT MIN(population) as SecondLowestPopulation
FROM Cities
WHERE population NOT IN (
   SELECT MIN(population) FROM Cities
);

-- atau

SELECT population as SecondLowestPopulation
FROM Cities
ORDER BY population ASC
LIMIT 1 OFFSET 1;

  -- Soal:

  -- Buatlah SQL Second Lowest Population

  -- Table "Cities"

  -- id        population
  -- 1           30213
  -- 2          2890
  -- 3          83301
  -- 4          944123
  -- 5          43

  -- Output:
  -- 2890

  -- Buat query untuk mengambil SecondLowestPopulation, population terendah ke-2