# Blog 01: What are some differences between interfaces and types in TypeScript?
interfaces এবং type উভয়ই Typescript এর ২টি ভিন্ন Type Declaretion এর মাধ্যম। ২টি ব্যবহার করই Type declear করা যায়। ২টির কাজ একই হলেও interfaces এবং type এর মধ্যে কিছু ভিন্নতা আছে। যা তাদেরকে একে অপর থেকে আলাদা করে।

- ## interface
```ts
interface Book {
  title: string;
  author: string;
}

interface Book {
    publishedYear: number;
}

const textBook: Book = {
  title: "মারহাবা জাভাস্ত্রিপ্টে মারো থাবা",
  author: "Jhankar Mahbub",
  publisherdYear: 2025
}
```
interface ব্যবহার করলে এর Type টি open থাকে। যার অর্থ হলো interface এ যে কোন সময় নতুন property যুক্ত করা যায়।

- ## type
```ts
type BookName = string;

type BookName = number; // error: Duplicate identifier 'BookName'
```
type ব্যবহার করলে এর মাধ্যে নতুন করে কোন property অথবা type যুক্ত করা যায় না।

অর্থাৎ
- type নতুন কোন property অথবা type যুক্ত করতে দেওয়া না যেখানে interface opend for marging property।

ব্যবহারের ক্ষেত্র:
- interface শুধু মাত্র কোন একটি object এর Shape নিধারণে ব্যবহার হয়। 
- type যেকোন primitive or nonprimitive Type এরও ব্যবহার করা যায়।

##

# Blog 02: Provide an example of using union and intersection types in TypeScript.

- ## Union (|)

Union Type ব্যবহার করা হয় যখন দুই বা তার বেশি type থেকে কেবলমাত্র একটি type ব্যবহার করার প্রয়োজন পড়ে।

```ts
type User = {
  name: string;
  email: string;
};

type Admin = {
  name: string;
  email: string;
  Mobile: string;
  Address: string;
};

type UserProfile = User | Admin; // UserProfile এ যেকোন একটি type গ্রাহণ যোগ্য হবে।
```

- ## Intersection (&)

Intersection Type ব্যবহার করা হয় যখন দুই বা তার বেশি type কে একত্রে combine করে একটি নতুন type বানাতে হয়।

```ts
type User = {
  name: string;
  email: string;
};

type Accountinfo = {
  accountType: number;
  depositBalance: number;
};

type UserAccount = User & Accountinfo; // New type যেখানে দুটো type এর সব property দিতে হবে।
```

অর্থাৎ
- Union অর্থ হলো ২ টি Type এর যেকোন একটি ব্যবহার করা যাবে। UserProfile Type এ হয় Admin Type ব্যবহার হবে অথবা User Type ব্যবহার হবে।
- Intersection অর্থ ২ টি Type এর সবগুলো ব্যবহার করতে হবে। UserAccount Type এ শুধু মাত্র User অথবা Accountinfo ব্যবহার করলে error আসবে এখানে ২ টা Type ঐ ব্যবহার করতে হবে।
