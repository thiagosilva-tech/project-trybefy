SELECT
    artists.name AS "Artista",
    COUNT(artists_followers.user_id) AS "Total de seguidores"
FROM artists
    JOIN artists_followers ON artists.id = artists_followers.artist_id
GROUP BY artists.name
HAVING
    "Total de seguidores" < 5
LIMIT 1;