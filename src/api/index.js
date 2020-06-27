import ApiClient from './apiClient';
import Products from './products';

export default function ({ apiPrefix, isServer = false } = {}) {
    if (!apiPrefix) {
        throw new Error('[apiPrefix] required');
    }
    const api = new ApiClient({ prefix: apiPrefix, isServer });

    return {
        apiClient : api,
        products      : new Products({ apiClient: api })
    };
}
