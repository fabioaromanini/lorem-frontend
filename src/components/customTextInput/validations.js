export const notEmpty = value => (!value || value.length === 0) && 'required';
export const greaterThanZero = value =>
  (!value || value <= 0) && 'must be positive';

export const max473 = value => value > 473 && 'words limit is 473';
export const max3223 = value => value > 3223 && 'chars limit is 3223';
