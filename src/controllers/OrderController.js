

class OrderController {

    async createOrder(id, product_id) {
        const order = await this.orderRepository.createOrder(id, product_id);
        return order;
    }

    async getOrderById(id) {
        const order = await this.orderRepository.getOrderById(id);
        return order;
    }

    async getOrders() {
        const order = await this.orderRepository.getOrders();
        return order;
    }


};

module.exports = OrderController;