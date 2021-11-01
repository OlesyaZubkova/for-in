export default function orderByProps(obj, order) {
  const keyList = [];
  const handList = [];

  for (const prop in obj) {
    if (order.includes(prop)) {
      keyList.push({
        key: prop,
        value: obj[prop],
      });
    } else {
      handList.push({
        key: prop,
        value: obj[prop],
      });
    }
  }

  keyList.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));

  handList.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  return [...keyList, ...handList];
}
