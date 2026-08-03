import ProductDetail from "@/components/pages/ProductDetail";
import { products } from "@/data/constants";
import { Metadata } from "next";
import Link from "next/link";
interface PageProps {
  params: { id: string };
}
// const product: Product = {
//   id: 1,
//   brand: "Patek Philippe",
//   name: "Poedagar Smart Watch",
//   price: 75000,
//   originalPrice: 115000,
//   images: [
//     "/images/poedagar-black.jpg",
//     "/images/poedagar-blue.jpg",
//     "/images/poedagar-gold.jpg",
//     "https://www-konga-com-res.cloudinary.com/image/upload/f_auto,q_auto,w_1080,c_limit/media/catalog/product/N/U/173643_1777291145.jpg",
//   ],
//   description:
//     "It is 30 ATM water resistant, so you can decide to swim with it without the feed of water damaging it. It is PVD coated. (PVD coating is what they use for high quality stainless steel spoons to make them last for years. So, you can also expect this watch to last for between 8 to 12 years. It comes with a 3 years repair or replacement warranty, so if anything happens to the watch within the first 3 years of purchase, we are going to repair it or replace it for you for free. No added costs.",
//   inStock: true,
//   benefits: [
//     "2 Free Gifts",
//     "Free shipping & Delivery",
//     "Pay on Delivery",
//     "7-day return policy",
//   ],
//   gifts: [
//     {
//       image:
//         "https://healthify.ng/wp-content/uploads/2026/07/IMG-20260402-WA0069-1024x986-1-768x740.webp",
//       title: "1 Black Assad Perfume",
//     },
//     {
//       image:
//         "https://healthify.ng/wp-content/uploads/2026/07/IMG_0124-1152x1536-1-768x1024.webp",
//       title: "1 Black Wrist beeds",
//     },
//   ],
// };

async function getProduct(id: string) {
  const product = products.find((i) => i.slug === id);
  return product;
}

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id: slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} · Timeless Luxury`,
    description:
      product.description?.slice(0, 160) ||
      "Curated collection of the world's finest luxury watches",
    twitter: {
      card: "summary_large_image",
      images: product.images?.[0] || [],
    },
    openGraph: {
      type: "website",
      images: product.images?.[0] || [],
    },
  };
}

// export const metadata: Metadata = {
//   title: `${product.name} · Timeless Luxury `,
//   description: "Curated collection of the world's finest luxury watches",

//   twitter: {
//     card: "summary_large_image",
//     images: product.images,
//   },
//   openGraph: {
//     type: "website",
//     images: product.images,
//   },
// };

export default async function ProductDetailPage({ params }: PageProps) {
  const { id: slug } = await params;
  const product = await getProduct(slug);
  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-light">Product not found</h2>
        <Link
          href="/"
          className="text-[#b78c5f] hover:underline mt-4 inline-block"
        >
          ← Back to collection
        </Link>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
