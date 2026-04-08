import type { RoomCount, WindowItem, AdditionalItem } from '@/types/calculator';

export const ROOM_PRICES: Record<RoomCount, number> = {
  '1': 45,
  '2': 50,
  '3': 60,
  '4': 65,
  '5': 70,
  '6+': 75,
};

export const ROOM_COUNTS: RoomCount[] = ['1', '2', '3', '4', '5', '6+'];

export const INITIAL_WINDOW_ITEMS: WindowItem[] = [
  { id: 'singleM',      labelKey: 'windows.singleM',      unitPrice: 8,  quantity: 0 },
  { id: 'blindM',       labelKey: 'windows.blindM',        unitPrice: 8,  quantity: 0 },
  { id: 'flyScreen',    labelKey: 'windows.flyScreen',     unitPrice: 5,  quantity: 0 },
  { id: 'singleL',      labelKey: 'windows.singleL',       unitPrice: 15, quantity: 0 },
  { id: 'blindL',       labelKey: 'windows.blindL',        unitPrice: 10, quantity: 0 },
  { id: 'balconyDoor',  labelKey: 'windows.balconyDoor',   unitPrice: 10, quantity: 0 },
  { id: 'blindDoor',    labelKey: 'windows.blindDoor',     unitPrice: 10, quantity: 0 },
  { id: 'flyScreenDoor',labelKey: 'windows.flyScreenDoor', unitPrice: 10, quantity: 0 },
  { id: 'doubleWing',   labelKey: 'windows.doubleWing',    unitPrice: 15, quantity: 0 },
  { id: 'shopfront',    labelKey: 'windows.shopfront',     unitPrice: 3,  quantity: 0 },
  { id: 'tripleM',      labelKey: 'windows.tripleM',       unitPrice: 20, quantity: 0 },
  { id: 'tripleL',      labelKey: 'windows.tripleL',       unitPrice: 25, quantity: 0 },
  { id: 'panoramicM',   labelKey: 'windows.panoramicM',    unitPrice: 10, quantity: 0 },
  { id: 'panoramicL',   labelKey: 'windows.panoramicL',    unitPrice: 15, quantity: 0 },
];

export const INITIAL_ADDITIONAL_ITEMS: AdditionalItem[] = [
  { id: 'kitchenLine', labelKey: 'additional.kitchenLine', price: 20, checked: false },
  { id: 'radiators',   labelKey: 'additional.radiators',   price: 10, checked: false },
  { id: 'fridge',      labelKey: 'additional.fridge',      price: 12, checked: false },
  { id: 'freezer',     labelKey: 'additional.freezer',     price: 10, checked: false },
  { id: 'balcony',     labelKey: 'additional.balcony',     price: 15, checked: false },
  { id: 'extractor',   labelKey: 'additional.extractor',   price: 15, checked: false },
  { id: 'oven',        labelKey: 'additional.oven',        price: 15, checked: false },
  { id: 'extraHour',   labelKey: 'additional.extraHour',   price: 10, checked: false },
  { id: 'ironing',     labelKey: 'additional.ironing',     price: 10, checked: false },
  { id: 'microwave',   labelKey: 'additional.microwave',   price: 7,  checked: false },
  { id: 'dishes',      labelKey: 'additional.dishes',      price: 5,  checked: false },
  { id: 'petBed',      labelKey: 'additional.petBed',      price: 4,  checked: false },
];
