
    const orders = [
      {
        orderNumber: 1,
        items: [
          { name: "Cappuccino", price: 3.5 },
          { name: "Chocolate Croissant", price: 2.5 }
        ]
      },
      {
        orderNumber: 2,
        items: [
          { name: "Latte", price: 4.0 },
          { name: "Blueberry Muffin", price: 2.75 }
        ],
        discountCode: "COFFEELOVER"
      },
      {
        orderNumber: 3,
        items: [
          { name: "Tea", price: 7.0 },
          { name: "Taj Tea", price: 2.75 }
        ]
      }
    ];
    function totalOrderValue(orders, applyDiscount){
      const orderTotals = orders.map((order) => {
        let total = order.items.reduce((acc, item) => acc + item.price, 0);
        if (order.discountCode) {
          total = applyDiscount(order.discountCode, total);
        }
        return total;
      });
      const grandTotal = orderTotals.reduce((acc, total) => acc + total, 0);
      return grandTotal.toFixed(2);
    };
  
    const applyDiscount = (discountCode, total) => {
      switch (discountCode) {
        case "COFFEELOVER":
          return total * 0.9;
          case "TEALOVER":
          return total * 0.8;
        default:
          return total;
      }
    };
  