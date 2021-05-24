const version = ['1.45.0', '1.5', '6', '3.3.3.3.3', '3.3']
// 现在需要对版本号进行从小到大排序，注意： 1.45.0是大于1.5的

function sortVersion() {
  return version.sort(function(a, b) {
    const arr1 = a.split('.');
    const arr2 = b.split('.');
    let i = 0;

    while (true) {
      const s1 = arr1[i];
      const s2 = arr2[i++];

      if (!s1 || !s2) {
        return arr1.length - arr2.length;
      }

      if (s1 === s2) continue;

      return s1 - s2;
    }
  });
}
console.log(sortVersion(version))