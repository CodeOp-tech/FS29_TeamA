CREATE TABLE `payments`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `allowed` TINYINT(1) NOT NULL,
    `credit_card` BIGINT NOT NULL,
    `expiration_mm` BIGINT NOT NULL,
    `expiration_yy` BIGINT NOT NULL
);

CREATE TABLE `orders`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `address_1` VARCHAR(255) NOT NULL,
    `address_2` VARCHAR(255) NOT NULL,
    `postal_code` INT NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `total` DECIMAL(8, 2) NOT NULL,
    `payment_id` BIGINT UNSIGNED NOT NULL,
    `fulfilled` TINYINT(1) NOT NULL,
    `cancelled` TINYINT(1) NOT NULL DEFAULT 0
);

CREATE TABLE `users`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `order_id` BIGINT UNSIGNED NOT NULL
);

CREATE TABLE `guests`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `email` VARCHAR(255) NOT NULL,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `order_id` BIGINT UNSIGNED NOT NULL
);

CREATE TABLE `artists_brand`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `product_id` BIGINT UNSIGNED NOT NULL
);

CREATE TABLE `products`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `units` INT NOT NULL
);

CREATE TABLE `product_order`(
    `product_id` BIGINT UNSIGNED NOT NULL,
    `order_id` BIGINT UNSIGNED NOT NULL,
    `product_quantity` INT NOT NULL
);

ALTER TABLE
    `product_order` ADD INDEX `product_order_product_id_index`(`product_id`);
ALTER TABLE
    `product_order` ADD INDEX `product_order_order_id_index`(`order_id`);
ALTER TABLE
    `orders` ADD CONSTRAINT `orders_payment_id_foreign` FOREIGN KEY(`payment_id`) REFERENCES `payments`(`id`);
ALTER TABLE
    `users` ADD CONSTRAINT `users_order_id_foreign` FOREIGN KEY(`order_id`) REFERENCES `orders`(`id`) ON DELETE SET NULL;
ALTER TABLE
    `artists_brand` ADD CONSTRAINT `artists_brand_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE;
    -- CONFIRM WITH SOFIA: CASCADE OR SET NULL?
ALTER TABLE
    `product_order` ADD CONSTRAINT `product_order_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`);
    -- CONFIRM WITH SOFIA: CASCADE OR SET NULL?
ALTER TABLE
    `product_order` ADD CONSTRAINT `product_order_order_id_foreign` FOREIGN KEY(`order_id`) REFERENCES `orders`(`id`);
    -- CONFIRM WITH SOFIA: CASCADE OR SET NULL?
ALTER TABLE
    `guests` ADD CONSTRAINT `guests_order_id_foreign` FOREIGN KEY(`order_id`) REFERENCES `orders`(`id`);

INSERT INTO products(name ,price ,currency ,description, units, collection, brand, ) VALUES ();
