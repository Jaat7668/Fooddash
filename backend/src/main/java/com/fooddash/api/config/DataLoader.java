package com.fooddash.api.config;

import com.fooddash.api.model.Product;
import com.fooddash.api.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.List;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(ProductRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.saveAll(List.of(
                        Product.builder()
                                .name("Margherita Pizza")
                                .price(12.99)
                                .category(Product.Category.pizza)
                                .imageUrl("https://images.unsplash.com/photo-1604068549290-dea0e4a305ca")
                                .description("Classic delight with 100% real mozzarella cheese.")
                                .build(),
                        Product.builder()
                                .name("Pepperoni Feast")
                                .price(15.99)
                                .category(Product.Category.pizza)
                                .imageUrl("https://images.unsplash.com/photo-1628840042765-356cda07504e")
                                .description("Loaded with pepperoni and extra cheese.")
                                .build(),
                        Product.builder()
                                .name("Veggie Paradise")
                                .price(14.99)
                                .category(Product.Category.pizza)
                                .imageUrl("https://images.unsplash.com/photo-1571407970349-bc81e7e96d47")
                                .description("Topped with fresh veggies and secret herbs.")
                                .build(),
                        Product.builder()
                                .name("Coca Cola")
                                .price(2.50)
                                .category(Product.Category.drinks)
                                .imageUrl("https://images.unsplash.com/photo-1622483767028-3f66f32aef97")
                                .description("Chilled classic cola (500ml).")
                                .build(),
                        Product.builder()
                                .name("Garlic Breadsticks")
                                .price(5.99)
                                .category(Product.Category.breads)
                                .imageUrl("https://images.unsplash.com/photo-1626229652216-e5bb7f511917")
                                .description("Freshly baked with garlic butter and herbs.")
                                .build(),
                        Product.builder()
                                .name("Cheesy Garlic Bread")
                                .price(7.99)
                                .category(Product.Category.breads)
                                .imageUrl("https://images.unsplash.com/photo-1573140285934-514f2b20f185")
                                .description("Baked to perfection with melty mozzarella.")
                                .build()));
                System.out.println("Database seeded with initial products.");
            }
        };
    }
}
