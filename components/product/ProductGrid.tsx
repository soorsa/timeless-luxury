import ProductCard from "./ProductCard";

const products: Product[] = [
  {
    id: 1,
    brand: "Patek Philippe",
    name: "Poedega",
    price: 28500,
    originalPrice: 32000,
    images: [
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
    ],
    benefits: [
      "Free Gifts",
      "Free shipping & Delivery",
      "Pay on Delivery",
      "7-day return policy",
    ],
    gifts: [
      { image: "/images/placeholder.jpg", title: "Black Assad Perfume" },
      { image: "/images/placeholder.jpg", title: "Black Wrist beeds" },
    ],
    description:
      "The essence of elegance. A timeless dress watch with a manual winding movement.",
  },
  {
    id: 2,
    brand: "Audemars Piguet",
    name: "Royal Oak",
    price: 47500,
    images: [
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
    ],
    benefits: [
      "Free Gifts",
      "Free shipping & Delivery",
      "Pay on Delivery",
      "7-day return policy",
    ],
    gifts: [
      { image: "/images/placeholder.jpg", title: "Black Assad Perfume" },
      { image: "/images/placeholder.jpg", title: "Black Wrist beeds" },
    ],
    description:
      "Iconic octagonal bezel with integrated bracelet. The definitive luxury sports watch.",
  },
  {
    id: 3,
    brand: "Vacheron Constantin",
    name: "Overseas",
    price: 31200,
    originalPrice: 35800,
    images: [
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
    ],
    benefits: [
      "Free Gifts",
      "Free shipping & Delivery",
      "Pay on Delivery",
      "7-day return policy",
    ],
    gifts: [
      { image: "/images/placeholder.jpg", title: "Black Assad Perfume" },
      { image: "/images/placeholder.jpg", title: "Black Wrist beeds" },
    ],
    description:
      "Elegance with a sporty spirit. Three interchangeable straps for any occasion.",
  },
  {
    id: 4,
    brand: "A. Lange & Söhne",
    name: "Lange 1",
    price: 39800,
    images: [
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
    ],
    benefits: [
      "Free Gifts",
      "Free shipping & Delivery",
      "Pay on Delivery",
      "7-day return policy",
    ],
    gifts: [
      { image: "/images/placeholder.jpg", title: "Black Assad Perfume" },
      { image: "/images/placeholder.jpg", title: "Black Wrist beeds" },
    ],
    description:
      "German precision with an asymmetric dial. A masterpiece of horological engineering.",
  },
  {
    id: 5,
    brand: "Jaeger-LeCoultre",
    name: "Reverso",
    price: 18900,
    images: [
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
    ],
    benefits: [
      "Free Gifts",
      "Free shipping & Delivery",
      "Pay on Delivery",
      "7-day return policy",
    ],
    gifts: [
      { image: "/images/placeholder.jpg", title: "Black Assad Perfume" },
      { image: "/images/placeholder.jpg", title: "Black Wrist beeds" },
    ],
    description:
      "Art Deco icon with a reversible case. A canvas for artistic expression.",
  },
  {
    id: 6,
    brand: "Rolex",
    name: "Daytona",
    price: 33500,
    originalPrice: 38000,
    images: [
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
    ],
    benefits: [
      "Free Gifts",
      "Free shipping & Delivery",
      "Pay on Delivery",
      "7-day return policy",
    ],
    gifts: [
      { image: "/images/placeholder.jpg", title: "Black Assad Perfume" },
      { image: "/images/placeholder.jpg", title: "Black Wrist beeds" },
    ],
    description:
      "The ultimate chronograph. Precision, performance, and prestige.",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
