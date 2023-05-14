-- Active: 1684098457765@@127.0.0.1@3306
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

CREATE TABLE likes_dislikes(
    user_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    LIKE INTEGER NOT NULL CHECK(LENGTH(LIKE) = 1),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN Key (post_id) REFERENCES POSTS(id)
);
