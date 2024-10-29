import { useState } from "react";
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import styled from "styled-components";

const PrintPhoto = styled.div`
  width: calc(50% - 10px);

  img {
    max-width: 100%;
  }
`;

/* 
  This component uses the Third Party React-dnd-kit library to handle drag and drop features. 

  The drop logic is similar to the manual implementation (swapping indices), but this differs
  as I'm using the properities and hooks provided by the library for drag/drop. 

  I followed the draggable and droppable docs, along with YouTube tutorials to get this functionality. 
  Mainly, the difficulty was trying to understand that both the drag and drop elements required their own 
  refs!! 

  See docs: 

  https://docs.dndkit.com/api-documentation/draggable/usedraggable
  https://docs.dndkit.com/api-documentation/droppable/usedroppable
  https://www.youtube.com/watch?v=dL5SOdgMbRY&ab_channel=CodeComplete

*/
export const DragDrop = ({ imgData, setLastEdited }) => {

  const [items, setItems] = useState(
    imgData.map((src, index) => ({ id: index, src }))
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    
    setLastEdited()

    const activeIndex = items.findIndex((item) => item.id === active.id);
    const overIndex = items.findIndex((item) => item.id === over.id);

    // If both indices are valid and different, swap the items
    if (activeIndex !== -1 && overIndex !== -1 && activeIndex !== overIndex) {
      const updatedItems = [...items];
      [updatedItems[activeIndex], updatedItems[overIndex]] = [
        updatedItems[overIndex],
        updatedItems[activeIndex],
      ];
      setItems(updatedItems);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {items.map((item) => (
        <DraggableImage key={item.id} id={item.id} src={item.src} />
      ))}
    </DndContext>
  );
};

const DraggableImage = ({ src, id }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });
  
  const { setNodeRef: dropRef } = useDroppable({ id });

  
  return (
    <PrintPhoto ref={dropRef}>
      <img
        ref={setNodeRef}
        src={src}
        alt=""
        className="draggable-image"
        {...attributes}
        {...listeners}
      />
    </PrintPhoto>
  );
};

