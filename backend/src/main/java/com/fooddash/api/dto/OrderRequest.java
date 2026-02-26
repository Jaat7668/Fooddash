package com.fooddash.api.dto;

import lombok.Data;
import java.util.List;

@Data
public class OrderRequest {
    private String shippingAddress;
    private List<OrderItemRequest> items;
}

@Data
class OrderItemRequest {
    private Long productId;
    private Integer quantity;
}
