DROP TABLE IF EXISTS camping_spot CASCADE;

CREATE TABLE camping_spot (
    id SERIAL PRIMARY KEY,
    description VARCHAR(50) NOT NULL,
    pic_url TEXT,
    rating INTEGER NOT NULL,
    num_of_ratings INTEGER NOT NULL,
    acres INTEGER NOT NULL,
    location VARCHAR(40) NOT NULL,
    price NUMERIC(5,2)
);