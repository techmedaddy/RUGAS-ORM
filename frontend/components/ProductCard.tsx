import Image from "next/image";

interface ProductCardProps {
  id?: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  description,
  imageUrl,
  price,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
        unoptimized
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{category}</p>
      <p className="text-sm">{description}</p>
      <p className="text-lg font-bold mt-2">${price}</p>

      {/* Buttons for Actions */}
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Add to Cart
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
