export function notEmpty(s: string): true | string {
  return !!s || 'Please, fill this field!';
}

export function notNullUndef(s: string | number): true | string {
    return s !== null || 'Please, don`t forget to answer this question';
}
