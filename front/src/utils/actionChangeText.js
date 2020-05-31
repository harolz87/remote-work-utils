export const changeText = (type) => (text) => ({
  type,
  payload: {
    text,
  },
});
