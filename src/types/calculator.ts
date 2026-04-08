export type RoomCount = '1' | '2' | '3' | '4' | '5' | '6+';

export interface WindowItem {
  id: string;
  labelKey: string;
  unitPrice: number;
  quantity: number;
}

export interface AdditionalItem {
  id: string;
  labelKey: string;
  price: number;
  checked: boolean;
}

export interface CalculatorState {
  selectedRooms: RoomCount;
  windowItems: WindowItem[];
  additionalItems: AdditionalItem[];
}
