import React, { ReactChild, useEffect, useRef } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactChild;
  background?: string;
  draw?: (ctx: CanvasRenderingContext2D) => any;
}

const BaseContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  & canvas {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

export default function AnimatedContainer({
  children,
  draw,
  background,
}: IProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  // Animation loop
  useEffect(() => {
    let animationId = 0;
    const context = canvasRef.current?.getContext("2d");

    const render = () => {
      animationId = window.requestAnimationFrame(render);
      if (draw && context) {
        draw(context);
      }
    };
    render();

    return () => window.cancelAnimationFrame(animationId);
  }, [draw]);

  // Handles screen resize
  useEffect(() => {
    function handleResize() {}
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Components
  return (
    <BaseContainer
      ref={pageRef}
      style={{ backgroundImage: background || "white" }}
    >
      {children}
      <canvas ref={canvasRef} />
    </BaseContainer>
  );
}
