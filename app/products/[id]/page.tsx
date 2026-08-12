import ProductDetail from "@/components/pages/ProductDetail";
import { products } from "@/data/constants";
import { Metadata } from "next";
import Link from "next/link";
interface PageProps {
  params: { id: string };
}
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
      images: product.images,
    },
    openGraph: {
      type: "website",
      images: product.images,
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
