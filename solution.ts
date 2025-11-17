type valueOfFormatValue = string | number | boolean;

function formatValue(value: valueOfFormatValue): valueOfFormatValue {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}













type TarrayProperty<T> = Array<T>;
type objProperty = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(productArray: TarrayProperty<objProperty>) {
  return productArray.reduce((total, product) => {
    const { price, quantity, discount = 0 } = product;

    const productTotal = price * quantity * (1 - discount / 100);

    return total + productTotal;
  }, 0);
}
