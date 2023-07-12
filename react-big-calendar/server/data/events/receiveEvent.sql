SELECT DISTINCT TOP (100) [vendno],
(select max(recdate) from potran10c where invno = a.invno ) as recdate,
[reqdate],
[shpdate],
(select max(purdate) from potran10c where invno = a.invno ) as purdate,
[invno]


FROM potran10c A
WHERE invno IS NOT NULL

ORDER BY reqdate DESC, invno desc