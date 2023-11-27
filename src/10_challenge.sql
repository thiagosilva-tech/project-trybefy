USE Trybefy;

CREATE TABLE
    artists (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        nationality VARCHAR(30) NOT NULL
    );

CREATE TABLE
    albums (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(50) NOT NULL,
        release_year INT NOT NULL,
        artist_id INT NOT NULL,
        FOREIGN KEY (artist_id) REFERENCES artists(id)
    );

INSERT INTO
    artists (name, nationality)
VALUES 
    ('Michael Jackson', 'USA'), 
    ('Nina Simone', 'USA'), 
    ('The Beatles', 'UK'), 
    ('BTS', 'KOR'), 
    ('Rita Lee', 'BRA');

INSERT INTO
    albums (
        title,
        release_year,
        artist_id
    )
VALUES 
    ('Thriller', 1982, 1),
    ('Bad', 1987, 1), 
    ('Dangerous', 1991, 1), 
    ('I Put a Spell on You', 1965, 2), 
    ('Sings the Blues', 1967, 2), 
    ('Sgt. Peppers Lonely Hearts Club Band', 1967, 3), 
    ('The Beatles', 1968, 3), 
    ('Abbey Road', 1969, 3), 
    ('Let It Be', 1970, 3), 
    ('Map of the Soul: 7', 2020, 4), 
    ('You Never Walk Alone', 2017, 4), 
    ('Love Yourself: Tear', 2018, 4), 
    ('Build Up', 1970, 5), 
    ('Fruto Proibido', 1975, 5), 
    ('Entradas e Bandeiras', 1976, 5);