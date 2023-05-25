DROP TABLE IF EXISTS things_nearby;

CREATE TABLE things_nearby (
    id serial PRIMARY KEY,
    img text,
    title varchar,
    distance varchar
);