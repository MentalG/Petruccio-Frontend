import Base from './base';

export default class Products extends Base {
    getProducts(params) {
        return this.apiClient.get('products/', params);
    }
}
