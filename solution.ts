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


