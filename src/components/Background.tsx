import { FC, useEffect, useRef } from "react";

const bw = 400;
const bh = 400;
const cw = bw + 20;
const ch = bh + 20;
const p = 10;

const drawGrid = (context: CanvasRenderingContext2D) => {
  for (let x = 0; x <= bw; x += 40) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, bh + p);
  }
  for (let x = 0; x <= bh; x += 40) {
    context.moveTo(p, 0.5 + x + p);
    context.lineTo(bw + p, 0.5 + x + p);
  }
  context.strokeStyle = "#FFFFFF";
  context.stroke();
};

const initialize = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext("2d");
  if (!context) return;
  drawGrid(context);
};

const Background: FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    initialize(ref.current);
  }, []);

  return <canvas id="background" ref={ref} width={cw} height={ch} />;
};

export default Background;