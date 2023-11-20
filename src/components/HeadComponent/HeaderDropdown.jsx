import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router에서 Link를 가져옴
import './HeaderDropdown.css';

const CATEGORIES = ['회원정보수정', '예약관리'];

function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    toggleDropdown();
  };

  return (
    <div className={`dropdown2 ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-open" onClick={toggleDropdown}>
        {selectedCategory || '마이페이지'}
      </button>
      {isOpen && (
        <ul className="dropdown_menu">
          {CATEGORIES.map((category) => (
            <li key={category} onClick={() => handleCategoryClick(category)}>
              <Link to={`/${category === '회원정보수정' ? 'MyPage' : 'MyReservPage'}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HeaderDropdown;
