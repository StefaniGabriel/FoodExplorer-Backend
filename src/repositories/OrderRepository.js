const knex = require("../database/knex");


class OrderRepository {
    async createOrder(id , product_id) {
        return await knex("orders").insert({ id: id, product_id: product_id });
    }

    async getOrderById(id) {
        return await knex("orders").where({ id: id }).first();
    }

    async getOrders() {
        return await knex("orders").select("*");
    }
}
