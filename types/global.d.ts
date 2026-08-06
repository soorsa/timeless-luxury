interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fbq: (...args: any[]) => void;
}

interface PixelOptions {
  value?: number;
  currency?: string;
  num_items?: number;
  content_ids?: string[] | number[];
  content_type?: "product" | "product_group";
  content_name?: string;
  content_category?: string;
  search_string?: string;
  // [key: string]: any; // Allows custom parameters seamlessly
}
interface Product {
  id: number;
  brand: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  inStock?: boolean;
  benefits: string[];
  gifts: Gift[];
  colors?: Color[];
}
interface Gift {
  image: string;
  title: string;
}
interface Color {
  color: string;
  name: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface ModalState {
  isCloseable: boolean;
  isTransModal: boolean;
  isOpen: boolean;
  content: ReactNode | null;
  title: string;
  size: string;
  // setTitle: (title: string) => void;
  goBack: () => void;
  open: (content: StateModalContent) => void;
  openStrong: (content: ReactNode) => void;
  openTransModal: (content: ReactNode) => void;
  close: () => void;
}
interface StateModalContent {
  content: ReactNode;
  title?: string;
  size?: string;
  goBack?: () => void;
}
