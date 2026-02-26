package com.fooddash.api.service;

import com.fooddash.api.model.Product;
import com.fooddash.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(Product.Category.valueOf(category.toLowerCase()));
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
}
