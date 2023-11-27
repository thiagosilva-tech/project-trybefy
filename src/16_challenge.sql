USE Trybefy;

CREATE TABLE
    songs (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(50) NOT NULL,
        duration_in_seconds INT NOT NULL,
        album_id INT NOT NULL,
        FOREIGN KEY (album_id) REFERENCES albums (id)
    );

INSERT INTO
    songs (
        title,
        duration_in_seconds,
        album_id
    )
VALUES 
('Billie Jean', 294, 1), 
('Beat It', 258, 1), 
('The Girl Is Mine', 206, 1), 
('Thriller', 353, 1), 
('Bad', 258, 2), 
('The Way You Make Me Feel', 244, 2), 
('Man in the Mirror', 321, 2), 
('Smooth Criminal', 253, 2), 
('Dirty Diana', 296, 2), 
("I Just Can't Stop Loving You", 241, 2),
('Black or White', 222, 3),
('Remember the Time', 233, 3),
('I Put a Spell on You', 225, 4),
('Love Me or Leave Me', 182, 4),
('Do I Move You?', 189, 5),
('I Want a Little Sugar in My Bowl', 188, 5),
('With a Little Help from My Friends', 162, 6),
('Lucy in the Sky with Diamonds', 211, 6),
('A Day in the Life', 308, 6),
('Intro: Persona', 180, 10),
('Boy With Luv', 229, 10),
('Make It Right', 221, 10),
('Jamais Vu', 209, 10),
('Ovelha Negra', 234, 15),
('Ando Meio Desligado', 197, 15);