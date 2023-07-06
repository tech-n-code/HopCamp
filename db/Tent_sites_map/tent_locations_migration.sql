DROP TABLE IF EXISTS tent_locations;

CREATE TABLE tent_locations (
    id serial PRIMARY KEY,
    price varchar,
    icon text,
    lat number,
    lng number
);