import api from "./api";

export const productsService = {
  getAll: () => api.get("/products"),
  getById: (id: string) => api.get(`/products/${id}`),
  // Add more methods when needed
};
