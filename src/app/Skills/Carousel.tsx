import React, { useEffect, useRef, useState } from "react";
import { BsCircleFill } from "react-icons/bs";

interface IProps {
  list: {
    icon: string;
    name: string;
    tag: string;
    itens: {
      label: string;
      knowledge: number;
      color: string;
    }[];
  }[];
}

interface ILineProps {
  label: string;
  color: string;
  count: number;
}

export default function Carrossel({ list }: IProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [controlList, setControlList] = useState<React.ReactNode[]>();

  // Handles with next slide solicitation
  function handleNextSlide(index: number) {
    const container = containerRef.current;
    const currentSlide = document.getElementById(`${currentIndex}-slide`);
    const nextSlide = document.getElementById(`${index}-slide`);

    if (container && nextSlide && currentSlide) {
      const relativeNextX =
        nextSlide.getBoundingClientRect().x -
        container.getBoundingClientRect().x;

      container.scrollLeft += relativeNextX;

      // Sets styles
      currentSlide.classList.remove("active");
      nextSlide.classList.add("active");

      setCurrentIndex(index);
    }
  }

  // Automatic slide change
  useEffect(() => {
    const interval = setTimeout(() => {
      const nextIndex = currentIndex + 1 === list.length ? 0 : currentIndex + 1;
      handleNextSlide(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, list.length]);

  // Resize configurations
  useEffect(() => {
    // Handles screen resize
    function handleScreenResize() {
      handleNextSlide(currentIndex);
    }
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);
    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  // Renders control
  useEffect(() => {
    const ball: React.ReactNode[] = [];
    for (let i = 0; i < list.length; i++) {
      ball.push(
        <li
          className={i === currentIndex ? "active" : ""}
          onClick={() => {
            handleNextSlide(i);
          }}
        >
          <BsCircleFill />
        </li>
      );
    }
    setControlList(ball);
  }, [currentIndex, list.length]);

  return (
    <div className="carrossel">
      <div className="content-container" ref={containerRef}>
        {list.map((slide, index) => (
          <div id={`${index}-slide`} className={`content`} key={index}>
            <div className="identify-container">
              <img src={slide.icon} alt="Icon" />
              <span className="label">{slide.name}</span>
            </div>
            <div className="data-container">
              <ul>
                {slide.itens.map((item, itemIndex) => (
                  <Line
                    label={item.label}
                    color={item.color}
                    count={item.knowledge}
                    key={itemIndex}
                  />
                ))}
              </ul>
              <span className="tag">{slide.tag}</span>
            </div>
          </div>
        ))}
      </div>
      <ul className="control">{controlList}</ul>
    </div>
  );
}

function Line({ color, label, count }: ILineProps) {
  const growLineRef = useRef<HTMLHRElement>(null);

  return (
    <li>
      <span>{label}</span>
      <div className="line">
        <div
          className="grow-container"
          style={{ width: `calc(${count}% - 0.9rem)`, position: "absolute" }}
        >
          <hr
            ref={growLineRef}
            className="grow"
            style={{
              backgroundColor: color,
              transitionDuration: count > 50 ? "1.7s" : "1s",
            }}
          />
        </div>
        <hr className="bg-line" />
        <BsCircleFill className="ball" />
      </div>
    </li>
  );
}
