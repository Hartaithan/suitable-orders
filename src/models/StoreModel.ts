export type NullableCanvas = HTMLCanvasElement | null;
export type NullableContext = CanvasRenderingContext2D | null;

export interface Store {
  backgroundCanvas: NullableCanvas;
  backgroundContext: NullableContext;
  setBackgroundCanvas: (
    canvas: NullableCanvas,
    context: NullableContext,
  ) => void;
}
