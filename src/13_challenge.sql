SELECT artists.name AS 'Artista'
FROM artists
    JOIN albums ON artists.id = albums.artist_id
GROUP BY artists.name
HAVING COUNT(albums.id) >= 3
ORDER BY artists.name;