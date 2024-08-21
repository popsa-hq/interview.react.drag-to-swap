import { memo } from "react";
import Image from "next/image";
import { CircleEffect, DraggableElement, NextImage } from "../hooks/useDraggable";

const DraggableImageComponent = ({
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  onDragEnd,
  image,
}) => {
  return (
    <DraggableElement
      draggable
      onDragStart={(e) => onDragStart(e, image)}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={(e) => onDrop(e, image)}
      onDragEnd={onDragEnd}
    >
      <Image src={image.currentImage} alt="" layout="fill" />
      {image.nextImage && (
        <NextImage src={image.nextImage} alt="" layout="fill" />
      )}
      <CircleEffect />
    </DraggableElement>
  );
};

export const DraggableImage = memo(DraggableImageComponent);
