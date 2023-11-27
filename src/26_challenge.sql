SELECT
    artists.name AS "Artista",
    COUNT(history_play_songs.id) AS "Quantidade de músicas reproduzidas"
FROM artists
    JOIN albums ON artists.id = albums.artist_id
    JOIN songs ON albums.id = songs.album_id
    JOIN history_play_songs ON songs.id = history_play_songs.song_id
GROUP BY artists.name
HAVING
    COUNT(history_play_songs.id) > 10
ORDER BY artists.name ASC;