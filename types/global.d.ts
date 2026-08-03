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
}
interface Gift {
  image: string;
  title: string;
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
