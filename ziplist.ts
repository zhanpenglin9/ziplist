function zipList(list1:unknown[], list2:unknown[]):unknown[] {
  const list3: unknown[] = [];
  let i = 0;
  while (i < list1.length) {
    list3.push(list1[i], list2[i]);
    i++;
  }

  return list3;
}

function zipListTheFunctionalWay(list1:unknown[], list2:unknown[]) :unknown[] {
  const list3: unknown[] = [];
  list1.forEach((element, index) => {
    list3.push(element, list2[index]);
  });
  return list3;
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheFunctionalWay([4, 5, 6], ['d', 'e', 'f']));
