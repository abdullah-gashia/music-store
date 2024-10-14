"use client"
import React, { useState } from 'react';
import './Main.css';

const instruments = [
  {
    name: 'Guitar',
    price: 210,
    original_price: 630,
    image_url: 'https://orangewoodguitars.com/cdn/shop/products/ECHO-ANGLED-RIGHT_2048x.jpg?v=1645732704',
    is_new: false,
    likes: 1578,
  },
  {
    name: 'Violin',
    price: 875,
    image_url: 'https://t4.ftcdn.net/jpg/09/23/66/97/360_F_923669723_BjOlmk3fm5OqyQGBiEnYrAlV9sn3NEHH.jpg',
    is_new: false,
    likes: 2300,
  },
  {
    name: 'Speakerman Titan',
    price: 1155,
    image_url: 'https://pic2-cdn.creality.com/comp/model/5a7a339135d452dbca398e20a91d84ea.webp',
    is_new: false,
    likes: 99999999,
  },
  {
    name: 'Piano',
    price: 470,
    original_price: 1470,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Steinway_Vienna_002.JPG',
    is_new: false,
    likes: 655,
  },
  {
    name: 'Skibidi Toilet',
    price: 105.5,
    original_price: 1015,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Skibidi_toilet_screenshot.webp/237px-Skibidi_toilet_screenshot.webp.png',
    is_new: false,
    likes: 0,
  },
  {
    name: 'Vitas',
    price: 1206,
    image_url: 'https://m.media-amazon.com/images/M/MV5BZDMyMjk1N2ItNzU5MS00NzZlLTk3MTYtMDIxZGExYzVlNjU3XkEyXkFqcGc@._V1_.jpg',
    is_new: false,
    likes: 1,
  },
  {
    name: 'Saxophone',
    price: 1680,
    image_url: 'https://www.theeramusic.com/wp-content/uploads/2021/11/YAMAHA-YAS-26.jpg',
    is_new: false,
    likes: 728,
  },
  {
    name: 'Trumpet',
    price: 550,
    original_price: 770,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Yamaha_Trumpet_YTR-8335LA_crop.jpg',
    is_new: false,
    likes: 3125,
  },
  {
    name: 'Drums',
    price: 365,
    original_price: 1365,
    image_url: 'https://m.media-amazon.com/images/I/61ypoVoFCLL._AC_UF894,1000_QL80_.jpg',
    is_new: false,
    likes: 700,
  },
  {
    name: 'Ukulele',
    price: 1085,
    image_url: 'https://m.media-amazon.com/images/I/71N3o2SHmIL._AC_SL1500_.jpg',
    is_new: false,
    likes: 80,
  },
];

export default function Main() {
  const [gameLikes, setGameLikes] = useState(instruments);

  const handleLike = (index: any) => {
    const newLikes = [...gameLikes];
    newLikes[index].likes += 1;
    setGameLikes(newLikes);
  };

  return (
    <main className="container">
      <div className="header">
        <h2>Trending Games</h2>
        <button className="view-all hover:bg-indigo-700 " >View All</button>
      </div>

      <div className="game-grid">
        {gameLikes.map((instrument, index) => (
          <div key={index} className="game-card ">
            <img src={instrument.image_url} alt={instrument.name} className="game-image" />

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
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
