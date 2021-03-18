// 重写属性 & 方法


// 考察的点
// class使用，new对象， apply，call应用，Object.defineProperty应用， hook理解
class XhrHook {
  constructor(beforeHooks = {}, afterHooks = {}) {
    this.XHR = window.XMLHttpRequest; // 保存原来的原型
    this.beforeHooks = beforeHooks;
    this.afterHooks = afterHooks;
    this.init();
  }

  init() {
    let _this = this;
    window.XMLHttpRequest = function () { // 不用箭头函数
      this._xhr = new _this.XHR();
      _this.overwrite(this);
    }
  }

  overwrite(proxyXHR) {
    for(let key in proxyXHR._xhr) {
      if (typeof proxyXHR._xhr[key] === 'function') {
        this.overwriteMethod(key, proxyXHR);
        continue;
      }

      this.overwriteAttributes(key, proxyXHR);
    }
  }

  // 重写方法
  overwriteMethod(key, proxyXHR) {
    let beforeHooks = this.beforeHooks; // 应该可以拦截原有行为
    let afterHooks = this.afterHooks;

    proxyXHR[key] = (...args) => {
      if (beforeHooks[key]) {
        const res = beforeHooks[key].call(proxyXHR, args);

        if (res === false) {
          return;
        }
      }
    }

    const res = proxyXHR._xhr[key].apply(proxyXHR._xhr, args);

    afterHooks[key] && afterHooks[key].call(proxyXHR._xhr, res);
  }

  // 重写属性
  overwriteAttributes(key, proxyXHR) {
    Object.defineProperties(proxyXHR, key, this.setPropertyDescriptor(key, proxyXHR));
  }

  setPropertyDescriptor(key, proxyXHR) {
    let obj = Object.create(null);
    
    obj.set = function(val) {
      if (!key.startWith('on')) {
        proxyXHR['__' + key] = val;
        return;
      }

      if (_this.beforeHooks[key]) {
        _this.beforeHooks[key].call(proxyXHR);
        val.apply(proxyXHR, args);

        return;
      }

      this._xhr[key] = val;
    }

    obj.get = function() {
      return proxyXHR['__' + key] || this._xhr[key];
    }

    return obj;
  }
}

new XhrHook({
  open: function() {
    console.log('open')
  },
  onload: function() {
    console.log('onload')
  },
  onreadystatechange: function() {
    console.log('onreadystatechange')
  },
  onerror: function() {
    console.log('onerror')
  },
})

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://www.baidu.com', true);
xhr.send();
xhr.onreadystatechange = function(res) {

}