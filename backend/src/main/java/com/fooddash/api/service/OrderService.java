package com.fooddash.api.service;

import com.fooddash.api.dto.OrderRequest;
import com.fooddash.api.model.*;
import com.fooddash.api.repository.OrderRepository;
import com.fooddash.api.repository.ProductRepository;
import com.fooddash.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Order placeOrder(String email, OrderRequest orderRequest) {
        User user = userRepository.findByEmail(email).get();

        List<OrderItem> orderItems = new ArrayList<>();
        Double totalPrice = 0.0;

        for (var itemReq : orderRequest.getItems()) {
            Product product = productRepository.findById(itemReq.getProductId()).get();
            OrderItem orderItem = OrderItem.builder()
                    .product(product)
                    .quantity(itemReq.getQuantity())
                    .price(product.getPrice())
                    .build();
            orderItems.add(orderItem);
            totalPrice += product.getPrice() * itemReq.getQuantity();
        }

        Order order = Order.builder()
                .user(user)
                .items(orderItems)
                .totalPrice(totalPrice)
                .status("CONFIRMED")
                .shippingAddress(orderRequest.getShippingAddress())
                .createdAt(LocalDateTime.now())
                .build();

        return orderRepository.save(order);
    }

    public List<Order> getUserOrders(String email) {
        User user = userRepository.findByEmail(email).get();
        return orderRepository.findByUserOrderByCreatedAtDesc(user);
    }
}
