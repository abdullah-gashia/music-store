"use client";
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const products = [
  { id: 1, name: "Guitar", price: 210, image_url: "https://lazermusic.com.ph/cdn/shop/products/1_61618ed3-b64a-4129-a7fd-56dedfca54f8.png?v=1618899374" },
  { id: 2, name: "Violin", price: 875, image_url: "https://t4.ftcdn.net/jpg/09/23/66/97/360_F_923669723_BjOlmk3fm5OqyQGBiEnYrAlV9sn3NEHH.jpg" },
  { id: 3, name: "Speakerman Titan", price: 1155, image_url: "https://pic2-cdn.creality.com/comp/model/5a7a339135d452dbca398e20a91d84ea.webp" },
  { id: 4, name: "Piano", price: 470, image_url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Steinway_Vienna_002.JPG" },
  { id: 5, name: "Skibidi Toilet", price: 105.5, image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Skibidi_toilet_screenshot.webp/237px-Skibidi_toilet_screenshot.webp.png" },
  { id: 6, name: "Vitas", price: 1206, image_url: "https://m.media-amazon.com/images/M/MV5BZDMyMjk1N2ItNzU5MS00NzZlLTk3MTYtMDIxZGExYzVlNjU3XkEyXkFqcGc@._V1_.jpg" },
  { id: 7, name: "Saxophone", price: 1680, image_url: "https://www.theeramusic.com/wp-content/uploads/2021/11/YAMAHA-YAS-26.jpg" },
  { id: 8, name: "Trumpet", price: 550, image_url: "https://upload.wikimedia.org/wikipedia/commons/1/12/Yamaha_Trumpet_YTR-8335LA_crop.jpg" },
  { id: 9, name: "Drums", price: 365, image_url: "https://m.media-amazon.com/images/I/61ypoVoFCLL._AC_UF894,1000_QL80_.jpg" },
  { id: 10, name: "Ukulele", price: 1085, image_url: "https://m.media-amazon.com/images/I/71N3o2SHmIL._AC_SL1500_.jpg" },
];

const ProductPage = () => {
  const params = useParams(); 
  const productId = parseInt(params.id); 

  const [isLoading, setIsLoading] = useState(true);
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); 
    return () => clearTimeout(timer); 
  }, []);

  const product = products.find(p => p.id === productId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-white">Product not found</div>; 
  }

  const editInstrument = (id) => {
    const newName = prompt("Enter new name:", product.name);
    const newPrice = prompt("Enter new price:", product.price);
    if (newName && newPrice) {
      setEditedProduct({ ...product, name: newName, price: parseFloat(newPrice) });
      alert(`Instrument updated: Name - ${newName}, Price - $${newPrice}`);
    }
  };

  const displayProduct = editedProduct || product;

  return (
    <>
      <Head>
        <title>{displayProduct.name} | Music Store</title>
        <meta name="description" content={`${displayProduct.name} - Buy now at the best price`} />
        <meta name="keywords" content="music, instruments, guitars, piano, drums" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b flex items-center justify-center">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-lg">
          <img src={displayProduct.image_url} alt={displayProduct.name} className="w-full h-48 bg-cover rounded-t-lg shadow-md transform transition duration-500 hover:scale-105" />
          <h2 className="text-2xl font-bold mt-4 text-white">{displayProduct.name}</h2>
          <p className="text-lg font-semibold text-white">Price: ${displayProduct.price}</p>
          <p className="text-gray-300 mt-2">{displayProduct.description}</p>
          <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo atque blanditiis, cum similique dolor assumenda eum dolores adipisci at vero asperiores explicabo beatae laboriosam modi veniam autem architecto minima eligendi.</p>
          <button 
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={() => window.history.back()}
          >
            Back to Products
          </button>
          <button onClick={() => editInstrument(displayProduct.id)} className="edit-button border-2 m-2 p-1 text-white hover:bg-red-700">Edit</button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
