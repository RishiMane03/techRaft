import React, { useState } from 'react';
import products from "../utils/products";

const Modal = ({ isVisible, card, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal__backdrop " onClick={onClose}>
      <div className="modal__content border h-[70vh] overflow-hidden overflow-y-scroll" onClick={(e) => e.stopPropagation()}>
        <h2 className='mt-40 sm:mt-0 text-xl font-semibold text-center'>{card.title}</h2>
        <img src={card.image} alt={card.title} className="modal__img" />
        <p className='text-[12px] w-3/4'>{card.description}</p>
        <button className="modal__close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

function Card({ productName }) {
  const cards = Object.values(products[productName]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const openModal = (card) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCard(null);
  };

  // Filter cards based on search query
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort cards based on price
  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0; // Default case: no sorting
  });

  // Reset search and sort
  const resetFilters = () => {
    setSearchQuery("");
    setSortOrder("default");
  };

  return (
    <div className=''>
      {/* Search and Sort Controls */}
      <div className="flex flex-wrap gap-2 justify-center items-center mb-4 mt-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-lg px-4 py-2 mr-2 w-[90%] outline-none"
        />
        
        {/* Sort and Reset Buttons */}
        <button 
          onClick={() => setSortOrder("lowToHigh")} 
          className="border rounded-lg px-4 py-2 mr-2 bg-gray-200 hover:bg-gray-300"
        >
          Sort: Low to High
        </button>
        <button 
          onClick={() => setSortOrder("highToLow")} 
          className="border rounded-lg px-4 py-2 mr-2 bg-gray-200 hover:bg-gray-300"
        >
          Sort: High to Low
        </button>
        <button 
          onClick={resetFilters}
          className="m-3 rounded-lg px-4 py-2 border bg-black text-white hover:bg-white hover:text-black"
        >
          Reset
        </button>
      </div>

      <div className="card__container">
        {sortedCards.map((card, index) => (
          <article key={index} className="card__article">
            <img src={card.image} alt={card.title} className="card__img" />
            <h1 className="text-gray-400 font-semibold text-xl text-center">{card.title}</h1>
            <div className="card__data">
              <h2 className="card__title">{card.title}</h2>
              <p className='font-semibold text-xl m-2'>{`$${card.price}`}</p> {/* Display price */}
              <button 
                className="card__button bg-black border-1 text-white px-6 py-1 rounded-lg hover:bg-white hover:text-black" 
                onClick={() => openModal(card)}
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Component  */}
      <Modal isVisible={isModalVisible} card={selectedCard} onClose={closeModal} /> 
    </div>
  );
}

export default Card;
