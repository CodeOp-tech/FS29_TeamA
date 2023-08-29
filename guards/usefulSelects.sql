SELECT * from users, orders.date, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.users_id
where users.id = 3
ORDER BY orders.date;


SELECT o.*, product_order.product_quantity
FROM orders AS o
LEFT JOIN product_order AS p ON o.id = p.order_id
WHERE o.id = 123
ORDER BY p.product_quantity;
