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


interface Book {
  title:string;
  author:string;
  publishedYear:number;
  isAvailable:boolean;
}
function printBookDetails(obj: Book) {
  const title = obj.title;
  const author = obj.author;
  const published = obj.publishedYear;
  const isAvailable = obj.isAvailable

  return console.log(
    `Title: ${title}, Author: ${author}, Published: ${published}, Available: ${isAvailable ? "Yes" : "No"}`
  );
}
type TuniqueValue = (string | number)[];
function getUniqueValues(value1: TuniqueValue, value2: TuniqueValue) {
  const bothArray = [...value1, ...value2];
  const removedDublicate: TuniqueValue = [];

  bothArray.forEach((val) => {
    if (!removedDublicate.includes(val)) {
      removedDublicate.push(val);
    }
  });
  return removedDublicate;
}
type TarrayProperty<T> = Array<T>;
type objProperty = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
function calculateTotalPrice(
  productArray: TarrayProperty<objProperty>
): number {
  return productArray.reduce((total, product) => {
    const { price, quantity, discount = 0 } = product;

    const productTotal = price * quantity * (1 - discount / 100);

    return total + productTotal;
  }, 0);
}
