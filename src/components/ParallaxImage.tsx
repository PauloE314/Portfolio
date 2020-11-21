import React, { useEffect, useRef } from "react";
import { elementIsVisible } from "../utils";
import useScroll from "../utils/useScroll";

interface IProps {
  image: string;
  id?: string;
  className?: string;
  handleScroll: (diff: number, image: HTMLImageElement) => any;
}

export default function ParallaxImage({
  image,
  handleScroll,
  id,
  className,
}: IProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const scroll = useScroll();

  function handleScreenScroll() {
    const image = imageRef.current;
    const diff = elementIsVisible(image);
    if (diff && image) {
      handleScroll(diff, image);
    }
  }

  useEffect(handleScreenScroll, [scroll.y]);

  return (
    <img
      id={id}
      src={image}
      ref={imageRef}
      alt=""
      className={"bg-image" + (className || "")}
    />
  );
}
