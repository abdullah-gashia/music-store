'use client'
import React, { useState } from 'react';
import './Main.css';
import { useRouter } from 'next/navigation';
import { link } from 'fs';
import Link from 'next/link';

const instruments = [
  {
    id: 1,
    name: 'Guitar',
    price: 210,
    original_price: 630,
    image_url: 'https://lazermusic.com.ph/cdn/shop/products/1_61618ed3-b64a-4129-a7fd-56dedfca54f8.png?v=1618899374',
    is_new: true,
    likes: 1578,
  },
  {
    id: 2,
    name: 'Violin',
    price: 875,
    image_url: 'https://t4.ftcdn.net/jpg/09/23/66/97/360_F_923669723_BjOlmk3fm5OqyQGBiEnYrAlV9sn3NEHH.jpg',
    is_new: false,
    likes: 2300,
  },
  {
    id: 3,
    name: 'Speakerman Titan',
    price: 1155,
    image_url: 'https://pic2-cdn.creality.com/comp/model/5a7a339135d452dbca398e20a91d84ea.webp',
    is_new: true,
    likes: 99999999,
  },
  {
    id: 4,
    name: 'Piano',
    price: 470,
    original_price: 1470,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Steinway_Vienna_002.JPG',
    is_new: false,
    likes: 655,
  },
  {
    id: 5,
    name: 'Skibidi Toilet',
    price: 105.5,
    original_price: 1015,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Skibidi_toilet_screenshot.webp/237px-Skibidi_toilet_screenshot.webp.png',
    is_new: true,
    likes: 0,
  },
  {
    id: 6,
    name: 'Vitas',
    price: 1206,
    image_url: 'https://m.media-amazon.com/images/M/MV5BZDMyMjk1N2ItNzU5MS00NzZlLTk3MTYtMDIxZGExYzVlNjU3XkEyXkFqcGc@._V1_.jpg',
    is_new: false,
    likes: 1,
  },
  {
    id: 7,
    name: 'Saxophone',
    price: 1680,
    image_url: 'https://www.theeramusic.com/wp-content/uploads/2021/11/YAMAHA-YAS-26.jpg',
    is_new: true,
    likes: 728,
  },
  {
    id: 8,
    name: 'Trumpet',
    price: 550,
    original_price: 770,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Yamaha_Trumpet_YTR-8335LA_crop.jpg',
    is_new: false,
    likes: 3125,
  },
  {
    id: 9,
    name: 'Drums',
    price: 365,
    original_price: 1365,
    image_url: 'https://m.media-amazon.com/images/I/61ypoVoFCLL._AC_UF894,1000_QL80_.jpg',
    is_new: true,
    likes: 700,
  },
  {
    id: 10,
    name: 'Ukulele',
    price: 1085,
    image_url: 'https://m.media-amazon.com/images/I/71N3o2SHmIL._AC_SL1500_.jpg',
    is_new: false,
    likes: 80,
  },
];

export default function Main() {
  const router = useRouter();
  const [gameLikes, setGameLikes] = useState(instruments);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [editId, setEditId] = useState(-1);

  const handleLike = (index: number) => {
    const newLikes = [...gameLikes];
    newLikes[index].likes += 1;
    setGameLikes(newLikes);
  };

  function addInstrument() {
    if (editId !== -1) {
      const temp = [...gameLikes];
      temp[editId] = {
        ...temp[editId],
        name,
        price,
        original_price: originalPrice || undefined,
        image_url: imageUrl,
        is_new: isNew,
      };
      setGameLikes(temp);
      setEditId(-1);
    } else {
      const newInstrument = {
        id: gameLikes[gameLikes.length - 1]?.id + 1 || 1,
        name: name,
        price: price,
        original_price: originalPrice || undefined,
        image_url: imageUrl,
        is_new: isNew,
        likes: 0,
      };
      setGameLikes([...gameLikes, newInstrument]);
    }
    setName('');
    setPrice('');
    setOriginalPrice('');
    setImageUrl('');
    setIsNew(false);
  }

  function editInstrument(id: number) {
    const index = gameLikes.findIndex((instrument) => instrument.id === id);
    if (index !== -1) {
      setEditId(index);
      setName(gameLikes[index].name);
      setPrice(gameLikes[index].price);
      setOriginalPrice(gameLikes[index].original_price || '');
      setImageUrl(gameLikes[index].image_url);
      setIsNew(gameLikes[index].is_new);
    }
  }

  function deleteInstrument(id: number) {
    setGameLikes(gameLikes.filter((instrument) => instrument.id !== id));
  }

  function goToOrderPage(name: string) {
    router.push(`/report/${name}`);
    
  }

  return (
    <main className="container ">
      <div className="header">
        <h2>Trending Music</h2>
        <button className="view-all hover:bg-indigo-700">View All</button>
      </div>

      <div className="game-grid">
        {gameLikes.map((instrument, index) => (
          <div key={instrument.id} className="game-card">
            {instrument.is_new && <div className="new-tag m-4 new">New</div>}

            <img src={instrument.image_url} alt={instrument.name} className="game-image " onClick={() => router.push(`/report/${instrument.id}`)} />

            

            <div className="game-details flex items-center justify-between m-5">
              <div>
                {instrument.original_price ? (
                  <div className="price-tag">
                    <span className="original-price">${instrument.original_price}</span>
                    <span className="discount-price">${instrument.price}</span>
                  </div>
                ) : (
                  <span className="price">${instrument.price}</span>
                )}
                <h3>{instrument.name}</h3>
              </div>

              <div className="like-section">
                <button onClick={() => handleLike(index)} className="like-button">Like</button>
                <span>{instrument.likes} Likes</span>
              </div>
              <button onClick={() => editInstrument(instrument.id)} className="edit-button border-2 m-2 p-1">Edit</button>
              <button onClick={() => deleteInstrument(instrument.id)} className="delete-button border-2 m-2 p-1">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <br />
      
      <div className="add">
        <div className="add-instrument">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-blue-700 p-2 m-1 text-xl rounded-md text-center"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-blue-700 p-2 m-1 text-xl rounded-md text-center"
          />
          <input
            type="number"
            placeholder="Original Price"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="border-2 border-blue-700 p-2 m-1 text-xl rounded-md text-center"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border-2 border-blue-700 p-2 m-1 text-xl rounded-md text-center"
          />
          <button
            onClick={() => setIsNew(!isNew)}
            className={`border-2 rounded-md  border-blue-700 m-1 p-2 ${isNew ? 'bg-blue-700' : 'bg-white'} hover:bg-blue-500`}
          >
            {isNew ? 'New' : 'Not New'}
          </button>
          <button onClick={addInstrument} className="border-2 border-blue-700 m-1 p-2 rounded-md text-center hover:bg-blue-500">{editId === -1 ? 'Add Instrument' : 'Update Instrument'}</button>
        </div>
      </div>
      
    </main>
  );
}
