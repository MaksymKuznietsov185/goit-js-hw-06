function isEnoughCapacity(products, containerSize) {
  let totalQuantity = 0;
  for (const productName in products) {
        const quantity = products[productName];
        
        totalQuantity = totalQuantity + quantity;
    }

    if (totalQuantity <= containerSize) {
        return true;
    } else {
        return false;
    }
}



console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false