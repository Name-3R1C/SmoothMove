DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS documents CASCADE;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_type VARCHAR(50) NOT NULL
);

CREATE TABLE properties (
  property_id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,

  title VARCHAR(255) NOT NULL,
  description TEXT,
  thumbnail_photo_url VARCHAR(255) NOT NULL,
  cover_photo_url VARCHAR(255) NOT NULL,
  parking_spaces INTEGER  NOT NULL DEFAULT 0,
  number_of_bathrooms INTEGER  NOT NULL DEFAULT 0,
  number_of_bedrooms INTEGER  NOT NULL DEFAULT 0,

  country VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  post_code VARCHAR(255) NOT NULL,

  active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE bookings (
    booking_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    property_id INT REFERENCES properties(property_id),
    booking_date DATE,
    confirmation_status BOOLEAN
);

CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    booking_id INT REFERENCES bookings(booking_id),
    amount DECIMAL(10, 2),
    payment_date DATE,
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    property_id INT REFERENCES properties(property_id),
    rating INT,
    review_text TEXT
);

CREATE TABLE documents (
    document_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    document_type VARCHAR(50),
    document_path VARCHAR(255),
    expiration_date DATE
);



-- Users can have multiple reviews, so there is a one-to-many relationship between User and Review.
-- Properties can have multiple reviews, so there is a one-to-many relationship between Property and Review.
-- Users can make payments for their bookings, so there is a one-to-many relationship between User and Payment.
-- Properties can have multiple bookings, so there is a one-to-many relationship between Property and Booking.
-- Users can upload and access documents, so there is a one-to-many relationship between User and Document.