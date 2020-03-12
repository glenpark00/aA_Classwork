PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE
  users
  (
    id INTEGER PRIMARY KEY,
    fname varchar(256), 
    lname varchar(256)
  );

CREATE TABLE 
  questions
  (
    id INTEGER PRIMARY KEY,
    title varchar(256),
    body varchar(256),
    author_id INTEGER,
    FOREIGN KEY (author_id) REFERENCES users(id)
  );

CREATE TABLE
  question_follows
  (
    id INTEGER PRIMARY KEY,
    question_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

CREATE TABLE
  replies
  (
    id INTEGER PRIMARY KEY,
    question_id INTEGER,
    parent_reply_id INTEGER DEFAULT NULL,
    user_id INTEGER,
    body varchar(256),
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

CREATE TABLE 
  question_likes  
  (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    question_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
  );
  
INSERT INTO users (fname, lname)
VALUES 
  ('James', 'Bond'),
  ('Charlie' , 'Chaplin'),
  ('Jiminy', 'Cricket');

INSERT INTO questions (title, body, author_id)
VALUES 
  ('Dress Code', 'Can we wear shorts?', (SELECT id FROM users WHERE users.fname = 'James' AND users.lname = 'Bond')),
  ('Schedule', 'Are there any holidays?', 2),
  ('Suplies', 'Shall we bring our own computer?', 3),
  ('Failure Policy', 'What are the conditions for failure out of the course?', 2);

INSERT INTO replies (question_id, parent_reply_id , user_id , body)
VALUES 
  ((SELECT id FROM questions WHERE title = 'Dress Code'), NULL, 3, 'gr8 question!'),
  ((SELECT id FROM questions WHERE title = 'Dress Code'), 1, 2, 'i hope so'),
  ((SELECT id FROM questions WHERE title = 'Schedule'), NULL, 1, 'looking forward 2 4th of july fireworks!'),
  ((SELECT id FROM questions WHERE title = 'Schedule'), 3, 1, '^');
  