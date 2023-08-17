function calculate(amount){
    let discount;  
    switch (true) {
    case amount < 500:
      discount = "No Discount";
      break;
    case amount >= 500 && amount < 1000:
      discount = "10% Discount.";
      break;
    case amount >= 1000 && amount < 2000:
      discount = "20% Discount.";
      break;
    case amount >= 2000 && amount < 4000:
      discount = "30% Discount.";
      break;
    case amount >= 4000 && amount < 5000:
      discount = "40% Discount.";
      break;
    case amount >= 5000:
      discount = "50% Discount.";
      break;
    default:
      discount = "Invalid Input";
  }
  
  console.log("You Have " + discount);
  return discount;
  }