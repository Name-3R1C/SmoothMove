-- Insert user data into the 'users' table
INSERT INTO users (username, email, password, user_type)
VALUES
    ('tenant1', 'tenant1@example.com', 'password123', 'tenant'),
    ('tenant2', 'tenant2@example.com', 'securepass', 'tenant'),
    ('landlord1', 'landlord1@example.com', 'landlordpass', 'landlord'),
    ('landlord2', 'landlord2@example.com', 'mypassword', 'landlord'),
    ('propertymgr1', 'propmgr1@example.com', 'managerpass', 'property manager'),
    ('admin1', 'admin1@example.com', 'adminpass', 'administrator');

-- Insert property data into the 'properties' table

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (1, 'Speed lamp', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 6, 4, 8, 'Canada', '536 Namsub Highway', 'Sotboske', 'Quebec', '28142', true);

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (1, 'Blank corner', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 6, 6, 7, 'Canada', '651 Nami Road', 'Bohbatev', 'Alberta', '83680', true);

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (2, 'Habit mix', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 0, 5, 6, 'Canada', '1650 Hejto Center', 'Genwezuj', 'Newfoundland And Labrador', '44583', true);

-- Insert booking data into the 'bookings' table
INSERT INTO bookings (user_id, property_id, booking_date, confirmation_status)
VALUES
    (1, 1, '2023-10-15', true), -- Tenant 1 booked Property 1
    (1, 3, '2023-11-05', false), -- Tenant 1 booked Property 3 (pending confirmation)
    (2, 2, '2023-09-20', true), -- Tenant 2 booked Property 2
    (3, 4, '2023-10-25', true); -- Tenant 3 booked Property 4