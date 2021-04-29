export interface FillProps {
  size: number;
  selectedColor: string;
  unSelectedColor: string;
  disabled?: boolean;
}

export interface BorderProps {
  size: number;
  color: string;
  disabled?: boolean;
}

declare class BorderCircle implements BorderProps {}
declare class BorderSquare implements BorderProps {}
declare class FillCircle implements FillProps {}
declare class FillSquare implements FillProps {}
