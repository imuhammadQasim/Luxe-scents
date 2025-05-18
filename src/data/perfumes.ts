export  interface Perfume {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  category: string[];
  notes: string[];
  size: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isBestseller: boolean;
  gender: 'women' | 'men' | 'unisex';
}

export const perfumes: Perfume[] = [
  {
    id: 1,
    name: "No. 5",
    brand: "Chanel",
    price: 135,
    image: "https://images.unsplash.com/photo-1590156221719-02e2d5ae7345?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlc3xlbnwwfHx8fDE3NDcyMzg5NTR8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
    description: "A timeless, iconic fragrance with an elegant floral bouquet. The world's most famous perfume.",
    category: ["floral", "aldehyde", "classic"],
    notes: ["ylang-ylang", "neroli", "jasmine", "rose", "sandalwood"],
    size: "50ml",
    rating: 4.9,
    reviews: 2451,
    isNew: false,
    isBestseller: true,
    gender: "women"
  },
  {
    id: 2,
    name: "Rouge Allure",
    brand: "Chanel",
    price: 110,
    image: "https://images.unsplash.com/photo-1590156220728-bea5ba090f82?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlc3xlbnwwfHx8fDE3NDcyMzg5NTR8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
    description: "Bold, vibrant, and luxurious. A modern interpretation of classic sophistication.",
    category: ["floral", "woody", "luxury"],
    notes: ["vanilla", "mandarin", "bergamot", "jasmine", "vetiver"],
    size: "50ml",
    rating: 4.7,
    reviews: 1280,
    isNew: true,
    isBestseller: false,
    gender: "women"
  },
  {
    id: 3,
    name: "Noir de Noir",
    brand: "Tom Ford",
    price: 240,
    image: "https://images.unsplash.com/photo-1589782431746-713d84eef3c4?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlc3xlbnwwfHx8fDE3NDcyMzg5NTR8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
    description: "Sensual and mysterious, capturing the dark allure of black truffle and black rose.",
    category: ["oriental", "woody", "luxury"],
    notes: ["black truffle", "black rose", "vanilla", "patchouli", "oak moss"],
    size: "50ml",
    rating: 4.8,
    reviews: 876,
    isNew: false,
    isBestseller: true,
    gender: "unisex"
  },
  {
    id: 4,
    name: "Oud Royal",
    brand: "Armani Privé",
    price: 290,
    image: "https://images.unsplash.com/photo-1589782431327-ac8a63d965a2?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlc3xlbnwwfHx8fDE3NDcyMzg5NTR8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
    description: "A regal composition highlighting the precious oud wood, for connoisseurs of fine fragrance.",
    category: ["oriental", "woody", "luxury"],
    notes: ["oud", "amber", "saffron", "rose", "sandalwood"],
    size: "50ml",
    rating: 4.6,
    reviews: 542,
    isNew: true,
    isBestseller: false,
    gender: "unisex"
  },
  {
    id: 5,
    name: "Acqua di Gio",
    brand: "Giorgio Armani",
    price: 90,
    image: "https://images.unsplash.com/photo-1590156117763-d5909f5ccbc8?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlc3xlbnwwfHx8fDE3NDcyMzg5NTR8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
    description: "Fresh, aquatic fragrance inspired by the Mediterranean sea. A timeless masculine classic.",
    category: ["fresh", "aquatic", "citrus"],
    notes: ["bergamot", "neroli", "green tangerine", "rosemary", "patchouli"],
    size: "50ml",
    rating: 4.5,
    reviews: 3120,
    isNew: false,
    isBestseller: true,
    gender: "men"
  },
  {
    id: 6,
    name: "L'Interdit",
    brand: "Givenchy",
    price: 105,
    image: "https://images.unsplash.com/photo-1590156221187-1710315f710b?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlc3xlbnwwfHx8fDE3NDcyMzg5NTR8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
    description: "An invitation to cross the line and embrace your singularity. A white floral bouquet contrasted with dark notes.",
    category: ["floral", "woody", "modern"],
    notes: ["orange blossom", "jasmine", "tuberose", "vetiver", "patchouli"],
    size: "50ml",
    rating: 4.7,
    reviews: 976,
    isNew: true,
    isBestseller: true,
    gender: "women"
  }
];
 