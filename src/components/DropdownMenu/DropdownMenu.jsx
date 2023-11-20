// DropdownMenu.jsx

import React, { useState } from 'react';
import './DropdownMenu.css';

const CATEGORIES = ['푸른샘', '공연연습실', '다목적실b', '다목적실c', '다목적실d', '다목적실e'];

function DropdownMenu({ onCategorySelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryMapping = {
    '푸른샘': '0',
    '공연연습실': '1',
    '다목적실b': '2',
    '다목적실c': '3',
    '다목적실d': '4',
    '다목적실e': '5',
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    const index = categoryMapping[category];
    setSelectedCategory(category);
    if (onCategorySelect && typeof onCategorySelect === 'function') {
      onCategorySelect(index);
    }
    toggleDropdown(); // 항목을 선택하면 드롭다운을 닫음
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedCategory || '시설선택'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {CATEGORIES.map((category) => (
            <li key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      )}
      <div className="selected-category">
        {selectedCategory ? `선택된 시설: ${selectedCategory}` : '선택된 시설:'}
      </div>
    </div>
  );
}

export default DropdownMenu;
