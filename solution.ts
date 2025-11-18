type TvalueOfFormatValue = string | number | boolean;
function formatValue(value: TvalueOfFormatValue): TvalueOfFormatValue {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

type TvalueOfLength = string | Array<string | number>;
function getLength(value: TvalueOfLength): number {
  return value.length;
}

class Person {
  constructor(public name: string, public age: number) {}

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type TbookObj = {
  title: string;
  rating: number;
};
type TcheckRating<T> = Array<T>;
function filterByRating(books: TcheckRating<TbookObj>): TcheckRating<TbookObj> {
  return books.filter((item) => item.rating <= 5 && item.rating >= 4);
}

type TobjectOfArray = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
type TfilterValue<T> = Array<T>;
function filterActiveUsers(
  value: TfilterValue<TobjectOfArray>
): TfilterValue<TobjectOfArray> {
  const activeUser: TfilterValue<TobjectOfArray> = [];

  value.forEach((val) => val.isActive === true && activeUser.push(val));

  return activeUser;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(obj: Book): string {
  return `Title: ${obj.title}, Author: ${obj.author}, Published: ${
    obj.publishedYear
  }, Available: ${obj.isAvailable ? "Yes" : "No"}`;
}

type TuniqueValue = Array<string | number>;
function getUniqueValues(
  value1: TuniqueValue,
  value2: TuniqueValue
): TuniqueValue {
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
type TobjProperty = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
function calculateTotalPrice(
  productArray: TarrayProperty<TobjProperty>
): number {
  return productArray.reduce((total, product) => {
    const { price, quantity, discount = 0 } = product;

    const productTotal = price * quantity * (1 - discount / 100);

    return total + productTotal;
  }, 0);
}


