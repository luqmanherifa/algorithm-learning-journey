SELECT r.name AS region, u.id AS userId, u.point
FROM User u
JOIN Region r ON u.regionId = r.id
WHERE (
  SELECT COUNT(*) FROM User u2 
  WHERE u2.point > u.point AND u2.regionId = u.regionId
) < 3
ORDER BY u.regionId ASC, u.point DESC;

   -- Soal:

   -- Buat Query SQL Untuk Mengambil Region, UserId, Point Dari 3 User Dengan Poin Terbanyak Dari Masing-Masing Region. Urutan Dari Point Yang Terbesar

   -- Buatlah SQL Top regional points

   -- Table "User"

   -- id        point        regionId
   -- 1        82000        1
   -- 2        81000        2
   -- 3        64000        2
   -- 4        93000        1
   -- 5        63000        1
   -- 6        80000        1
   -- 7        70000        1

   -- Table "Region"

   -- id        name
   -- 1               A
   -- 2              B

   -- output :
   -- A                       4             93000
   -- A                       1               82000
   -- B                       2             81000
   -- A                       6             80000
   -- B                      3             64000

   -- Buat query SQL untuk mengambil region, userId, Point dari 3 user dengan poin terbanyak dari masing-masing region. Urutan dari point yang terbesar