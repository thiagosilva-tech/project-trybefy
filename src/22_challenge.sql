SELECT
    artists.name AS "Artista",
    COUNT(songs.title) AS "Quantidade de músicas"
FROM artists
    JOIN albums ON artists.id = albums.artist_id
    JOIN songs ON albums.id = songs.album_id
GROUP BY artists.name
ORDER BY
    COUNT(songs.title) DESC,
    artists.name
LIMIT 3;