DROP TABLE if exists product_order;
DROP TABLE if exists orders;
DROP TABLE if exists users;
DROP TABLE if exists payments;
DROP TABLE if exists products;
DROP TABLE if exists artists;

CREATE TABLE `payments`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `approved` TINYINT(1) NOT NULL,
    `address_1` VARCHAR(255) NOT NULL,
    `address_2` VARCHAR(255) NULL,
    `postal_code` INT NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL
);
CREATE TABLE `orders`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT UNSIGNED NULL,
    `total` DECIMAL(8, 2) NOT NULL,
    `payment_id` BIGINT UNSIGNED NOT NULL,
    `fulfilled` TINYINT(1) NOT NULL,
    `cancelled` TINYINT(1) NOT NULL DEFAULT 0,
    `date` DATE NOT NULL
);
CREATE TABLE `users`(
    `id` BIGINT UNSIGNED NULL AUTO_INCREMENT UNIQUE KEY,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NULL,
    `guest` TINYINT(1) NOT NULL,
    `marketing` TINYINT(1) NOT NULL DEFAULT 0
);
CREATE TABLE `artists`(
    `id` BIGINT UNSIGNED NULL AUTO_INCREMENT UNIQUE KEY,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE `products`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `collection` VARCHAR(255) NULL,
    `units` INT NOT NULL DEFAULT 1,
    `artist_id` BIGINT UNSIGNED NULL,
    `image_1` VARCHAR(255) NOT NULL,
    `image_2` VARCHAR(255) NULL,
    `image_3` VARCHAR(255) NULL
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
    `orders` ADD CONSTRAINT `orders_payment_id_foreign` FOREIGN KEY(`payment_id`) REFERENCES `payments`(`id`) ON DELETE CASCADE;
ALTER TABLE
    `orders` ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL;
ALTER TABLE
    `product_order` ADD CONSTRAINT `product_order_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE;
ALTER TABLE
    `product_order` ADD CONSTRAINT `product_order_order_id_foreign` FOREIGN KEY(`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE;
ALTER TABLE
    `products` ADD CONSTRAINT `products_artist_id_foreign` FOREIGN KEY(`artist_id`) REFERENCES `artists`(`id`) ON DELETE SET NULL;
