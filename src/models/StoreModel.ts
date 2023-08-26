export type NullableCanvas = HTMLCanvasElement | null;
export type NullableContext = CanvasRenderingContext2D | null;

export interface Store {
  boxWidth: number;
  boxHeight: number;
  padding: number;
  backgroundCanvas: NullableCanvas;
  backgroundContext: NullableContext;
  setBackgroundCanvas: (
    canvas: NullableCanvas,
    context: NullableContext,
  ) => void;
  setCanvasParams: () => void;
}
