import { useState } from "react";
import styled from "styled-components";

/* 
    This component handles the page swap events. We provide each image with an index,
    and use Mouse events to handle the drag and drop features. 

    We update state by performing a swap between the image that was initially dragged, 
    and the image it was dropped by. 

    Resources: 

    https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event
    https://www.youtube.com/watch?v=u65Y-vqYNAk&ab_channel=WebDevCody

*/
const PrintPhoto = styled.div`
  width: calc(50% - 10px);

  img {
    max-width: 100%;
  }
`;

export const PageSwap = ({imgData, setLastEdited}) => {

    const [items, setItems] = useState(
        imgData.map((src, index) => ({ id: index, src }))
      );
    const [draggedIdx, setDraggedIdx] = useState(null);

      /* 
        when a user selects an image, grab the Idx of the selected image
        and set to the current draggedIdx. This allows us to capture the 
        startIdx of our array.
      */  
    const handleDragStart = (e, imgIdx) => {
        setDraggedIdx(imgIdx); // set Idx of item being dragged
    }

    /* 
        when a user drops the image, grab the droppedIdx (the idx of the image that was just dropped)
        and use it to perform the swap of the images.
    */
    const handleDragDrop = (e, droppedIdx) => {
        setLastEdited();
        if(draggedIdx !== null && draggedIdx !== droppedIdx) { // only perform the swap if we aren't swapping with the image we selected initially
            const newItems = [...items];
            [newItems[draggedIdx], newItems[droppedIdx]] = [newItems[droppedIdx], newItems[draggedIdx]];
            setItems(newItems);
        }
        setDraggedIdx(null); // Reset dragged index to null
    }

    /* 
        we call event.preventDefault(), which enables it to receive drop events.
        source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event
    */
    const handleDragOver = (e) => {
        e.preventDefault();
    }

    return (
        <>
            {
                items.map((imgObj, idx) => (
                <PrintPhoto>
                    <img 
                    src={imgObj.src}
                    alt="image"
                    key={idx}    
                    draggable
                    onDragStart={(e) => handleDragStart(e, idx)}
                    onDrop = {(e) => handleDragDrop(e, idx)}
                    onDragOver={handleDragOver}
                    ></img>
                </PrintPhoto>
                ))
            }
        </>
    )
}