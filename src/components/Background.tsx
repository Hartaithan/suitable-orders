import { FC, useCallback, useEffect, useRef } from "react";
import { useStore } from "../store";

const Background: FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [boxWidth, boxHeight, padding, setBackgroundCanvas] = useStore(
    (state) => [
      state.boxWidth,
      state.boxHeight,
      state.padding,
      state.setBackgroundCanvas,
    ],
  );
  const canvasWidth = boxWidth + 20;
  const canvasHeight = boxHeight + 20;

  const drawGrid = useCallback(
    (context: CanvasRenderingContext2D) => {
      for (let x = 0; x <= boxWidth; x += 40) {
        context.moveTo(0.5 + x + padding, padding);
        context.lineTo(0.5 + x + padding, boxHeight + padding);
      }
      for (let x = 0; x <= boxHeight; x += 40) {
        context.moveTo(padding, 0.5 + x + padding);
        context.lineTo(boxWidth + padding, 0.5 + x + padding);
      }
      context.strokeStyle = "#FFFFFF";
      context.stroke();
    },
    [boxHeight, boxWidth, padding],
  );

  useEffect(() => {
    if (!ref.current) return;
    const context = ref.current.getContext("2d");
    if (!context) return;
    drawGrid(context);
    setBackgroundCanvas(ref.current, context);
  }, [drawGrid, setBackgroundCanvas]);

  return (
    <canvas
      id="background"
      ref={ref}
      width={canvasWidth}
      height={canvasHeight}
    />
  );
};

export default Background;
