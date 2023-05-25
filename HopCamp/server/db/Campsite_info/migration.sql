CREATE TABLE IF NOT EXISTS land (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    acres int,
    tentsites int,
    lodging int,
    description VARCHAR,
    activities VARCHAR(15),
    natural_features VARCHAR(50)
);
