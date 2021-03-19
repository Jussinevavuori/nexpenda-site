import { useMemo } from "react";

export class FakeTransactionGenerator {
  static Instance = new FakeTransactionGenerator();

  constructor() {}

  static useFakeTransaction() {
    return useMemo(() => FakeTransactionGenerator.Instance.generate(), []);
  }

  generate() {
    const n = FakeTransactionGenerator.Source.length;

    const i = Math.floor(Math.random() * n);

    const _ = FakeTransactionGenerator.Source[i];

    const amount = _.sign * ((_.max - _.min) * Math.random() + _.min);

    return {
      icon: _.icon,
      category: _.category,
      amount,
      isPositive: amount > 0,
      isNegative: amount < 0,
    };
  }

  static Source = [
    { icon: "🍕", category: "Food", sign: -1, min: 5, max: 120 },
    { icon: "🍔", category: "Restaurants", sign: -1, min: 10, max: 200 },
    { icon: "🧁", category: "Sweets", sign: -1, min: 0.5, max: 4.9 },
    { icon: "🍺", category: "Nights out", sign: -1, min: 5, max: 20 },
    { icon: "😻", category: "Pets", sign: -1, min: 5, max: 30 },
    { icon: "🦷", category: "Dentist", sign: -1, min: 60, max: 300 },
    { icon: "👄", category: "Makeup", sign: -1, min: 10, max: 70 },
    { icon: "🎉", category: "Parties", sign: -1, min: 20, max: 100 },
    { icon: "🎞", category: "Movies", sign: -1, min: 8, max: 20 },
    { icon: "🎨", category: "Arts", sign: -1, min: 20, max: 40 },
    { icon: "🎁", category: "Presents", sign: -1, min: 10, max: 199 },
    { icon: "👗", category: "Clothes", sign: -1, min: 40, max: 300 },
    { icon: "🎓", category: "School", sign: -1, min: 10, max: 100 },
    { icon: "💎", category: "Jewellery", sign: -1, min: 50, max: 250 },
    { icon: "🏈", category: "Sports", sign: -1, min: 5, max: 120 },
    { icon: "🕹", category: "Games", sign: -1, min: 0.5, max: 70 },
    { icon: "🎸", category: "Music", sign: -1, min: 20, max: 80 },
    { icon: "💊", category: "Health", sign: -1, min: 5, max: 30 },
    { icon: "📞", category: "Phone", sign: -1, min: 4, max: 22 },
    { icon: "💰", category: "Salary", sign: +1, min: 1900, max: 3000 },
    { icon: "📚", category: "Books", sign: -1, min: 10, max: 50 },
    { icon: "💸", category: "Other expenses", sign: -1, min: 1, max: 100 },
    { icon: "💰", category: "Other income", sign: 1, min: 10, max: 1000 },
    { icon: "🧾", category: "Bills", sign: -1, min: 10, max: 60 },
    { icon: "🌎", category: "Travel", sign: -1, min: 100, max: 500 },
    { icon: "🚗", category: "Car", sign: -1, min: 20, max: 100 },
    { icon: "🚄", category: "Transit", sign: -1, min: 5, max: 20 },
    { icon: "🏡", category: "Home", sign: -1, min: 10, max: 30 },
    { icon: "💧", category: "Water", sign: -1, min: 5, max: 25 },
    { icon: "⚡", category: "Electric", sign: -1, min: 10, max: 30 },
    { icon: "⚙", category: "Utilities", sign: -1, min: 10, max: 40 },
  ];
}
