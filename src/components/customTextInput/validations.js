export const notEmpty = value => (!value || value.length === 0) && 'required';
export const greaterThanZero = value =>
  (!value || value <= 0) && 'must be positive';

export const max477 = value => value > 477 && 'words limit is 477';
export const max3224 = value => value > 3224 && 'chars limit is 3224';
