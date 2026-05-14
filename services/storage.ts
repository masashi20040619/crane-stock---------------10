
export class StorageService {
  private static PRIZES_KEY = 'crane-stock-prizes-v1';
  private static SPENDING_KEY = 'crane-stock-spending-v1';

  static async savePrizes(prizes: any[]): Promise<void> {
    localStorage.setItem(this.PRIZES_KEY, JSON.stringify(prizes));
  }

  static async saveSpendingRecords(records: any[]): Promise<void> {
    localStorage.setItem(this.SPENDING_KEY, JSON.stringify(records));
  }

  static async loadPrizes(): Promise<any[]> {
    try {
      const raw = localStorage.getItem(this.PRIZES_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  static async loadSpendingRecords(): Promise<any[]> {
    try {
      const raw = localStorage.getItem(this.SPENDING_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  static async clearAll(): Promise<void> {
    localStorage.removeItem(this.PRIZES_KEY);
    localStorage.removeItem(this.SPENDING_KEY);
  }

  // 旧localStorageキー互換（存在する場合のみ読み取り）
  static getLocalStorageData(): any[] | null {
    try {
      const data = localStorage.getItem('crane-game-prizes');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  static clearLocalStorage(): void {
    localStorage.removeItem('crane-game-prizes');
  }
}
