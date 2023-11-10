import React, { useState } from 'react';

const ProductDetails = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown-container">
    <button className="dropdown-button" onClick={toggleDropdown}>
      DESCRIBTION
      <span className={`arrow ${isOpen ? 'up' : 'down'}`}>&#11206;</span>
    </button>
    {isOpen && (
      <div className="dropdown-content">
        <ul>
            <li>Shell: 100% Recycled Polyester with PVC coating</li>
            <li>Lining: 100% Recycled Polyester satin with 70 gsm insulation in body</li>
            <li>Polyester fiber in this blend is made from recycled content including plastic bottles</li>
            <li>Recycled poly helps reduce water usage, energy consumption and CO2 emissions when producing this garment</li>
           
        </ul>
        <p>Proudly made by our San Francisco neighbors, Golden Goods! The Golden Goods crew make it their mission to create the most comfortable, soft gear in the market. Each piece has extreme attention to detail and is constructed with premium quality fabrics.</p>
      </div>
    )}
  </div>
  )
}

export default ProductDetails