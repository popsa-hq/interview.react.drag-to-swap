import { useState } from "react";
import styled from "styled-components";
import { useDraggable } from "../hooks/useDraggable";
import { DraggableImage } from "./DraggableImage";

const ImageSectionLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #2778a5;
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
`;

export const ImageSection = ({ images: imagesData }) => {
  const [images, setImages] = useState(imagesData);

  const { dragStart, dragOver, dragLeave, dragEnd, drop } =
    useDraggable(setImages);

  return (
    <ImageSectionLayout>
      {images.map((image, index) => (
        <DraggableImage
          key={`${image.currentImage}-${index}`}
          image={image}
          onDragStart={dragStart}
          onDragOver={dragOver}
          onDragLeave={dragLeave}
          onDragEnd={dragEnd}
          onDrop={drop}
        />
      ))}
    </ImageSectionLayout>
  );
};
