
-- Drop Tables
DROP TABLE if exists words;
DROP TABLE if exists users;
DROP TABLE if exists invoices;
DROP TABLE if exists category;
DROP TABLE if exists product;
DROP TABLE if exists payments;
DROP TABLE if exists orders;
DROP TABLE if exists guests;
DROP TABLE if exists artists_brand;
DROP TABLE if exists products;
DROP TABLE if exists product_order;


SET foreign_key_checks = 0;
SET foreign_key_checks = 1;


-- Create Tables


CREATE TABLE payments(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    credit_card BIGINT NOT NULL,
    allowed TINYINT(1) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE products(
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    description LONGTEXT NOT NULL,
    order_id BIGINT NOT NULL,
    units INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE category(
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    createdAt datetime(3) NOT NULL DEFAULT current_timestamp(3),
    products INT(10),
    product_id BIGINT NOT NULL,
    PRIMARY KEY(id)
    -- CONSTRAINT FK_ProductCategory FOREIGN KEY (product_id)
    -- REFERENCES products(id)

);

CREATE TABLE orders(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    product_id BIGINT NOT NULL,
    address_1 VARCHAR(255) NOT NULL,
    address_2 VARCHAR(255) NOT NULL,
    postal_code INT NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    total DECIMAL(8, 2) NOT NULL,
    payment_id BIGINT NOT NULL,
    createdAt datetime(3) NOT NULL DEFAULT current_timestamp(3),
    fulfilled TINYINT(1) NOT NULL,
    PRIMARY KEY (id)
    -- CONSTRAINT FK_OrdersPayment FOREIGN KEY (payment_id) REFERENCES payments(id),
    -- FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE product_order(
    product_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT INDEX, 
    order_id BIGINT NOT NULL,
    product_quantity INT NOT NULL,
    createdAt datetime(3) NOT NULL
    -- CONSTRAINT FK_ProductOrderId FOREIGN KEY (order_id) REFERENCES orders(id),
    -- CONSTRAINT FK_OrderProductId FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE users(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    marketing TINYINT DEFAULT 0,
    password VARCHAR(255) NOT NULL,
    order_id BIGINT NOT NULL
    -- CONSTRAINT FK_UsersOrder FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE guests(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    marketing TINYINT DEFAULT 0,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    order_id BIGINT NOT NULL
    -- CONSTRAINT FK_GuestsOrder FOREIGN KEY (order_id) REFERENCES orders(id)
);



CREATE TABLE artists_brand(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    product_id BIGINT UNSIGNED NOT NULL,
    -- CONSTRAINT FK_ArtistsProduct FOREIGN KEY (product_id) REFERENCES products(id)
);




-- ALTER TABLE
--     `product_order` ADD INDEX `product_order_order_id_index`(`order_id`);
-- ALTER TABLE
--     `orders` ADD CONSTRAINT `orders_payment_id_foreign` FOREIGN KEY(`payment_id`) REFERENCES `payments`(`id`);
-- ALTER TABLE
--     `users` ADD CONSTRAINT `users_order_id_foreign` FOREIGN KEY(`order_id`) REFERENCES `orders`(`id`);
-- ALTER TABLE
    -- `orders` ADD CONSTRAINT `orders_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `product_order`(`order_id`);
-- ALTER TABLE
--     `products` ADD CONSTRAINT `products_order_id_foreign` FOREIGN KEY(`order_id`) REFERENCES `product_order`(`product_id`);
-- ALTER TABLE
--     `artists_brand` ADD CONSTRAINT `artists_brand_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`);
-- ALTER TABLE
--     `guests` ADD CONSTRAINT `guests_order_id_foreign` FOREIGN KEY(`order_id`) REFERENCES `orders`(`id`);
