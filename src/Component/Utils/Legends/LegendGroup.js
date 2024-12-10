export const calculateGap = (size) => {
  switch (size) {
    case 'Md':
      return '16px';
    case 'Lg':
      return '24px';
    case 'Sm':
    default:
      return '12px';
  }
}