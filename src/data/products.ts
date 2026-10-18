export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  available: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Yirgacheffe Coffee Beans",
    price: 650,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    description: "Bright acidity with complex floral and citrus notes, freshly harvested from the highlands of Yirgacheffe.",
    available: true
  },
  {
    id: "2",
    name: "Sidamo Dark Roast Coffee",
    price: 600,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600&auto=format&fit=crop",
    description: "Full-bodied dark roast with rich chocolate undertones and a spicy aroma.",
    available: true
  },
  {
    id: "3",
    name: "Traditional Berbere Spice Blend",
    price: 250,
    category: "Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop",
    description: "An authentic, aromatic blend of chili peppers, garlic, ginger, and warm traditional spices.",
    available: true
  },
  {
    id: "4",
    name: "Mitmita Hot Spice Mix",
    price: 280,
    category: "Spices",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5756?q=80&w=600&auto=format&fit=crop",
    description: "Extremely fiery and flavorful ground bird's eye chili powder infused with cardamom and salt.",
    available: true
  },
  {
    id: "5",
    name: "Handmade Clay Jebena",
    price: 950,
    category: "Crafts",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=600&auto=format&fit=crop",
    description: "Traditional hand-molded clay coffee pot used for brewing authentic Ethiopian coffee.",
    available: true
  },
  {
    id: "6",
    name: "Traditional Mesob Basket",
    price: 1400,
    category: "Crafts",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=600&auto=format&fit=crop",
    description: "Woven grass and colored straw serving table with lid, handcrafted by local artisans.",
    available: true
  },
  {
    id: "7",
    name: "Ethiopian White Honey",
    price: 800,
    category: "Food",
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?q=80&w=600&auto=format&fit=crop",
    description: "Pure, sweet, and aromatic white honey harvested from the floral meadows of the southern region.",
    available: true
  },
  {
    id: "8",
    name: "Traditional Cross Pendant",
    price: 1200,
    category: "Crafts",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
    description: "Intricately designed silver-toned traditional Ethiopian cross pendant representing ancient artistry.",
    available: true
  }
];
