DROP TABLE IF EXISTS rating CASCADE;

CREATE TABLE rating (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    pic_url TEXT,
    date DATE,
    recommend BOOLEAN DEFAULT TRUE,
    campsite VARCHAR(40) NOT NULL,
    top_line VARCHAR(50),
    narrative TEXT NOT NULL
);