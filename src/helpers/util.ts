const toString = Object.prototype.toString

export function isDate(val: any): boolean {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): boolean {
  return val !== null && typeof val === 'object'
}

export function isPlainObject(val: any): boolean {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = (from as T & U)[key]
  }
  return to as T & U
}

export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)

  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      const val = obj[key]
      if (isPlainObject(val)) {
        if (isPlainObject(result[key])) {
          result[key] = deepMerge(result[key], val)
        } else {
          result[key] = deepMerge({}, val)
        }
      } else {
        result[key] = val
      }
    })
  })

  return result
}
