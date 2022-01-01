CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

INSERT INTO users (first_name, last_name)
VALUES  ('john', 'doe');