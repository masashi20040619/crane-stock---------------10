
export type PrizeCategory = 'マスコット' | 'ぬいぐるみ' | 'フィギュア' | '雑貨' | 'その他';

export type Manufacturer =
  | 'バンダイナムコ'
  | 'タイトー'
  | 'SEGA FAVE'
  | 'FuRyu'
  | 'Parade'
  | 'SK'
  | 'SYSTEM SERVICE'
  | 'EIKOH'
  | 'その他';

export interface PriceRecord {
  date: string;
  price: number;
}

export type HistoryAction = 'registration' | 'quantity_change' | 'edit' | 'import' | 'sale' | 'acquisition' | 'spending';

export interface HistoryRecord {
  id: string;
  timestamp: string;
  action: HistoryAction;
  details: string;
  price?: number; // 売却価格や獲得時の相場 (互換性のため残す)
  quantity?: number; // 数量
  unitPrice?: number; // 単価（その時の相場）
  prizeId?: string; // 商品ID
  type?: 'sell' | 'buy' | 'stock' | 'spending'; // 種類（互換: stock=buy）
  memo?: string; // メモ
}

export interface Prize {
  id: string;
  name: string;
  quantity: number;
  acquisitionDate: string;
  category: PrizeCategory;
  manufacturer?: Manufacturer;
  photo?: string;
  notes?: string;
  priceHistory?: PriceRecord[]; // 相場の履歴
  history?: HistoryRecord[]; // 変更履歴
}

export interface SpendingRecord {
  id: string;
  date: string;
  amount: number;
  memo?: string;
  createdAt: string;
}
