USE Trybefy;

CREATE TABLE
    artists_followers (
        user_id INT NOT NULL,
        artist_id INT NOT NULL,
        PRIMARY KEY (user_id, artist_id),
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (artist_id) REFERENCES artists(id)
    );

INSERT INTO
    artists_followers (user_id, artist_id)
VALUES (1, 1), (1, 2), (1, 3), (2, 3), (2, 4), (3, 2), (3, 5), (4, 2), (4, 3), (4, 4), (4, 5), (5, 1), (5, 2), (6, 2), (6, 3), (6, 4), (7, 1), (7, 3), (7, 5), (8, 5), (9, 4), (9, 5), (10, 2), (10, 4);