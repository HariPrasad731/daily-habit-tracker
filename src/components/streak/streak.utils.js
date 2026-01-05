export const getDateKey = (date = new Date()) =>
  date.toISOString().split("T")[0];

export const getLast7Days = () => {
  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return getDateKey(d);
  });
};

export const isYesterday = (dateKey) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return getDateKey(yesterday) === dateKey;
};
