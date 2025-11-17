//problem 01
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
// problem 02

function getLength() {
  
}
// problem 03
class Person {
  constructor(public name: string, public age: number) {}

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}



// problem 04
type TbookObj = {
  title: string;
  rating: number;
};
type checkRating<T> = Array<T>
function filterByRating(books: checkRating<TbookObj>): checkRating<TbookObj> {
  return books.filter((item) => item.rating <= 5 && item.rating >= 4);
}

//problem 05
type Tobject = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
type filterValue<T> = Array<T>;
function filterActiveUsers(value: filterValue<Tobject>): filterValue<Tobject> {
  const activeUser: filterValue<Tobject> = [];

  value.forEach((val) => val.isActive === true && activeUser.push(val));

  return activeUser;
}

//problem 06
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(obj: Book) {
  return console.log(
    `Title: ${obj.title}, Author: ${obj.author}, Published: ${
      obj.publishedYear
    }, Available: ${obj.isAvailable ? "Yes" : "No"}`
  );
}

//problem 07
type TuniqueValue = (string | number)[];
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

// problem 08
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