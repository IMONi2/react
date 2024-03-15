
import React, { useState } from 'react';
function DislikeButton() {
	const [disliked, setDisliked] = useState(false); 
	    
	const handleClick = () => {
	  setDisliked(!disliked); 
	};
	    
	return (
	  <button className={disliked ? 'disliked' : ''} onClick={handleClick}>
	    {disliked ? 'Ogillad' : 'Ogilla'}
	  </button>
	);
}
export default DislikeButton;