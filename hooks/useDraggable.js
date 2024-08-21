import { useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import {
  ANIMATION_DURATION,
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
} from "../constants";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const circleExpand = keyframes`
  0% {
    clip-path: circle(0% at center);
  }
  100% {
    clip-path: circle(75% at center);
  }
`;

export const CircleEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  clip-path: circle(0% at center);
  pointer-events: none;
  z-index: 10;
`;

export const NextImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.5s forwards;
`;

export const DraggableElement = styled.div`
  position: relative;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  width: ${DEFAULT_WIDTH}px;
  height: ${DEFAULT_HEIGHT}px;
  margin-bottom: 20px;
  touch-action: none;

  &.dragging {
    opacity: 0.5;
    border-radius: 8px;
  }

  &.drop .circleEffect {
    animation: ${circleExpand} ${ANIMATION_DURATION}ms forwards;
    z-index: 10;
  }

  &.drag-over {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    ${NextImage} {
      opacity: 0.7;
    }
  }

   &.drop ${CircleEffect} {
    animation: ${circleExpand} ${ANIMATION_DURATION}ms forwards;
  }


  img {
    border-radius: 8px;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const useDraggable = (setImages) => {
  const draggedImageRef = useRef({});
  const [updatedImages, setUpdatedImages] = useState(null);

  const dragStart = useCallback((e, draggedImage) => {
    if (e.type === "touchstart") {
      e.preventDefault();
    } else {
      e.dataTransfer.effectAllowed = "move";
    }
    draggedImageRef.current = { draggedImage };
    e.currentTarget.classList.add("dragging");
  }, []);

  const dragOver = useCallback((e) => {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  }, []);

  const dragLeave = useCallback((e) => {
    e.currentTarget.classList.remove("drag-over");
  }, []);

  const drop = useCallback(
    (e, targetImage) => {
      e.preventDefault();
      e.currentTarget.classList.remove("drag-over");
      e.currentTarget.classList.add("drop");

      const { draggedImage } = draggedImageRef.current;

      setImages((prevImages) => {
        const newImages = prevImages.map((img) => {
          if (img.currentImage === draggedImage.currentImage) {
            return { ...img, nextImage: targetImage.currentImage };
          }
          if (img.currentImage === targetImage.currentImage) {
            return { ...img, nextImage: draggedImage.currentImage };
          }
          return img;
        });
        setUpdatedImages(newImages);
        return newImages;
      });

      draggedImageRef.current = {};
    },
    [setImages]
  );

  const dragEnd = useCallback((e) => {
    e.currentTarget.classList.remove("dragging");
  }, []);

  useEffect(() => {
    if (updatedImages) {
      const timer = setTimeout(() => {
        const finalImages = updatedImages.map((img) => {
          if (img.nextImage) {
            return { ...img, currentImage: img.nextImage, nextImage: null };
          }
          return img;
        });
        setImages(finalImages);
        setUpdatedImages(null);
      }, ANIMATION_DURATION);

      return () => clearTimeout(timer);
    }
  }, [updatedImages, setImages]);

  return {
    dragStart,
    dragOver,
    dragLeave,
    dragEnd,
    drop,
  };
};
