import { FC } from "react";
import { useStore } from "../store";

const Menu: FC = () => {
  const [backgroundCanvas, backgroundContext] = useStore((state) => [
    state.backgroundCanvas,
    state.backgroundContext,
  ]);

  const clearBackgroundGrid = () => {
    if (!backgroundCanvas || !backgroundContext) return;
    backgroundContext.clearRect(
      0,
      0,
      backgroundCanvas.width,
      backgroundCanvas.height,
    );
  };

  return (
    <aside id="menu">
      <button onClick={clearBackgroundGrid}>Clear background grid</button>
    </aside>
  );
};

export default Menu;
