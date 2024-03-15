
import React, { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false); 
  const handleClick = () => {
    setLiked(!liked); 
  };

  return (
    <button className={liked ? 'liked' : ''} onClick={handleClick}>
      {liked ? 'Gillad' : 'Gilla'} 
    </button>
  );
}
export default LikeButton;