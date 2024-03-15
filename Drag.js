import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  IMAGE: 'image',
};

const DraggableImage = ({ src }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.IMAGE, id: src },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        width: '200px',
        height: '200px',
      }}
    >
      <img src={src} alt="Draggable Image" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default DraggableImage;
