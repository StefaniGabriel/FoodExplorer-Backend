const knex = require("../database/knex");

class FavoriteRepository {

    async getFavorites(id) {
        const favorites = await knex("favorite").where({ user_id: id });

        return favorites;
    }

    async createFavorite(id, product_id) {
        const favorite = await knex("favorite").insert({ user_id: id, product_id: product_id });

        return favorite;
    }

    async deleteFavorite(id, product_id) {
        const favorite = await knex("favorite").where({ user_id: id, product_id: product_id }).del();

        return favorite;
    }
};

module.exports = FavoriteRepository;