function limitLoad(urls, handler, limit) {
  const sequence = [].concat(urls); // 拷贝数组
  let promises = [];

  promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(() => {
      return index;
    });
  });

  let p = Promise.race(promises);

  for (let i = 0; i < sequence.length; i++) {
    p = p.then((res) => {
      promises[res] = handler(sequence[i]).then(() => {
        return res;
      });
      return Promise.race(promises);
    }); // 链式调用 .then().then().then()
  }
}

const urls = [
  {
    info: 'link1',
    time: 2000,
  },
  {
    info: 'link2',
    time: 3000,
  },
  {
    info: 'link3',
    time: 1000,
  },
  {
    info: 'link4',
    time: 4000,
  },
  {
    info: 'link5',
    time: 2000,
  },
]

function loadImg(url) {
  return new Promise((resolve, reject) => {
    console.log('---', url.info + 'start');
    setTimeout(() => {
      console.log(url.info + 'ok');
      resolve();
    }, url.time);
  })
}

limitLoad(urls, loadImg, 3)