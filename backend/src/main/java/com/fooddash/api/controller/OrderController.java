package com.fooddash.api.controller;

import com.fooddash.api.dto.OrderRequest;
import com.fooddash.api.model.Order;
import com.fooddash.api.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping
    public Order placeOrder(Authentication authentication, @RequestBody OrderRequest orderRequest) {
        return orderService.placeOrder(authentication.getName(), orderRequest);
    }

    @GetMapping("/user")
    public List<Order> getUserOrders(Authentication authentication) {
        return orderService.getUserOrders(authentication.getName());
    }
}
