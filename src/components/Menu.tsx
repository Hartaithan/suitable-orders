import { FC } from "react";
import { useStore } from "../store";

const Menu: FC = () => {
  const [backgroundCanvas, backgroundContext, setCanvasParams] = useStore(
    (state) => [
      state.backgroundCanvas,
      state.backgroundContext,
      state.setCanvasParams,
    ],
  );

  const clearBackgroundGrid = () => {
    if (!backgroundCanvas || !backgroundContext) return;
    backgroundContext.clearRect(
      0,
      0,
      backgroundCanvas.width,
      backgroundCanvas.height,
    );
  };

  const handleCanvasParamsSubmit = () => {
    setCanvasParams();
  };

  return (
    <aside id="menu">
      <button onClick={clearBackgroundGrid}>Clear background grid</button>
      <button onClick={handleCanvasParamsSubmit}>Submit canvas params</button>
    </aside>
  );
};

export default Menu;
