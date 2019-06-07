export const notEmpty = value => (!value || value.length === 0) && 'required';
export const greaterThanZero = value =>
  (!value || value <= 0) && 'must be positive';

export const max1431 = value => value > 1431 && 'words limit is 1431';
export const max9674 = value => value > 9674 && 'chars limit is 9674';
