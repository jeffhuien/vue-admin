interface IData {
  expire?: number;
  data?: any;
  token?: string;
}

export default {
  set(key: string, data: IData, expire?: number): any {
    let cache: IData = { data };
    if (expire) cache.data.expire = new Date().getTime() + 7 * (86400 * 1000); //7天token
    localStorage.setItem(key, JSON.stringify(cache));
  },
  get(key: string): IData | null | string | any {
    const cacheStore = localStorage.getItem(key);
    if (cacheStore) {
      const cache = JSON.parse(cacheStore) as IData;
      const expire = cache.expire;
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return cache.data;
    }
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};
