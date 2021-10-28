export module ArrayHelper {
  export function forEach<T>(array: T[], callback: (item: T) => void): void {
    let length = 0;

    if (array != null) {
      length = array.length;
    }

    for (let i = 0; i < length; i++) {
      callback(array[i]);
    }
  }

  export function firstOrDefault<T>(array: T[], callback: (item: T) => boolean): T | null {
    let length = 0;

    if (array != null) {
      length = array.length;
    }

    for (let i = 0; i < length; i++) {
      const val = array[i];
      if (callback(val) === true) {
        return val;
      }
    }

    return null;
  }

  export function where<T>(array: T[], callback: (item: T) => boolean): T[] {
    let length = 0;

    if (array != null) {
      length = array.length;
    }


    let items: T[] = [];
    for (let i = 0; i < length; i++) {
      const val = array[i];
      if (callback(val) === true) {
        items.push(val);
      }
    }
    return items;
  }

}
