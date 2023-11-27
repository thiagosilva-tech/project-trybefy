SELECT
    songs.title AS 'Título',
    songs.duration_in_seconds AS 'Duração',
    albums.title AS 'Álbum'
FROM songs
    JOIN albums ON songs.album_id = albums.id
WHERE
    songs.duration_in_seconds BETWEEN 300 AND 480
ORDER BY
    songs.duration_in_seconds ASC;