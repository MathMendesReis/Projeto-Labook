-- Active: 1684754398798@@127.0.0.1@3306
CREATE TABLE USERS(
    id TEXT NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at DATETIME DEFAULT (DATETIME('now', 'localtime')) NOT NULL
);

CREATE TABLE POSTS(
    id TEXT NOT NULL PRIMARY KEY,
    creator_id TEXT NOT NULL,
    content TEXT NOT NULL,
    likes INTEGER NOT NULL,
    dislikes INTERGER NOT NULL,
    created_at DATETIME DEFAULT (DATETIME('now', 'localtime')) NOT NULL,
    update_at DATETIME DEFAULT (DATETIME('now', 'localtime')) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id)
);

CREATE TABLE
    likes_dislikes(
        user_id TEXT NOT NULL,
        post_id TEXT NOT NULL,
        like INTEGER NOT NULL,
        Foreign Key (user_id ) REFERENCES USERS(id),
        Foreign Key (post_id ) REFERENCES posts (id)
    );

SELECT * from likes_dislikes ;
SELECT * from "USERS" ;
SELECT * from "POSTS" ;


DELETE FROM likes_dislikes;
drop Table likes_dislikes;