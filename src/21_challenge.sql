SELECT
    albums.title AS "Álbum",
    SUM(songs.duration_in_seconds) AS "Duração"
FROM albums
    JOIN songs ON albums.id = songs.album_id
GROUP BY albums.title
ORDER BY
    SUM(songs.duration_in_seconds) DESC;