# Provide an example of using union and intersection types in TypeScript.

## Union (|)

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

type UserProfile = User | Admin; // UserProfile এ যেকোন একটি type এর object আসলেই তা গ্রাহণ যোগ্য হবে।
```

## Intersection (&)

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

type UserAccount = User & Accountinfo; // New type যেখানে দুটো type এর সব property নতুন টাইপে থাকবে।
```

অর্থাৎ
-Union অর্থ হলো ২ টি Type এর যেকোন একটি ব্যবহার করা যাবে। UserProfile Type এ হয় Admin Type ব্যবহার হবে অথবা User Type ব্যবহার হবে।
-Intersection অর্থ ২ টি Type এর সবগুলো ব্যবহার করতে হবে। UserAccount Type এ শুধু মাত্র User অথবা Accountinfo ব্যবহার করলে error আসবে এখানে ২ টা Type ঐ ব্যবহার করতে হবে।
