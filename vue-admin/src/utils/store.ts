interface IData {
  expire: number;
  [key: string]: any;
}

export default {
  set(key: string, data: IData): any {
    data.expire = new Date().getTime() + 7 * (86400 * 1000); //7天token
    localStorage.setItem(key, JSON.stringify(data));
  },
  get(key: string): IData | null {
    const item = localStorage.getItem(key);
    if (item) {
      const data = JSON.parse(item);
      if (data?.expire < new Date().getTime()) {
        localStorage.removeItem(key);
      }
      return data;
    }
    return null;
  },
};
