

class OrderService {
    constructor() {
        this.orderRepository = new OrderRepository();
    }

    async createOrder(id, product_id) {
        return await this.orderRepository.createOrder(id, product_id);
    }


    async getOrderById(id) {
        return await this.orderRepository.getOrderById(id);
    }

    async getOrders() {
        return await this.orderRepository.getOrders();
    }
}