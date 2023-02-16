interface IData {
  expire?: number;
  [key: string]: any;
  // token: string;
}

export default {
  set(key: string, data: IData): any {
    data.expire = new Date().getTime() + 7 * (86400 * 1000); //7天token
    // data?.expire = new Date().getTime();
    localStorage.setItem(key, JSON.stringify(data));
  },
  get(key: string): IData | null | string | any {
    const item = localStorage.getItem(key);
    if (item) {
      const data = JSON.parse(item) as IData;
      const expire = data.expire;
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key);
      }
      return data[key];
    }
    return null;
  },
};
