import { IRect } from "konva/lib/types";

export function haveIntersection(rect: IRect, point: Pick<IRect, 'x' | 'y'>, marign = 0): boolean {
  const { x, y, width, height } = rect;
  const { x: pointX, y: pointY } = point;

  return (
    pointX >= x &&
    pointX <= x + width - marign &&
    pointY >= y &&
    pointY <= y + height
  );
}