DROP TABLE IF EXISTS campers_also CASCADE;
DROP TABLE IF EXISTS camping_spot CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS rating CASCADE;
DROP TABLE IF EXISTS tent_locations;
DROP TABLE IF EXISTS tentsites CASCADE;
DROP TABLE IF EXISTS things_nearby;

CREATE TABLE campers_also (
    id SERIAL PRIMARY KEY,
    description VARCHAR(50) NOT NULL,
    pic_url TEXT,
    rating INTEGER NOT NULL,
    num_of_ratings INTEGER NOT NULL,
    acres INTEGER NOT NULL,
    location VARCHAR(40) NOT NULL,
    price NUMERIC(5,2)
);

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

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  pic VARCHAR (255),
  url VARCHAR(1000)
);

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

CREATE TABLE tent_locations (
    id serial PRIMARY KEY,
    price VARCHAR(10),
    icon VARCHAR(10),
    lat NUMERIC,
    lng NUMERIC
);

CREATE TABLE tentsites (
  id serial PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  available INT,
  demand TEXT,
  instantBook BOOLEAN,
  descriptions VARCHAR,
  capacity INT,
  restrictions TEXT,
  amenities TEXT,
  price DECIMAL(8, 2),
  type VARCHAR(20),
  imgURL TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE things_nearby (
    id serial PRIMARY KEY,
    img TEXT,
    title VARCHAR(50),
    distance VARCHAR(20)
);