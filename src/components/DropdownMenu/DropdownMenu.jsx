import React, { useState } from 'react';
import './DropdownMenu.css';

const CATEGORIES = ['푸른샘', '공연연습실', '다목적실b','다목적실c','다목적실d','다목적실e']; // 필요한 항목들을 배열로 정의

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    toggleDropdown(); // 항목을 선택하면 드롭다운을 닫음
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedCategory || '시설 선택'}
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
        {selectedCategory ? `선택된 시설: ${selectedCategory}` : '시설을 선택하세요'}
      </div>
    </div>
  );
}

export default DropdownMenu;
