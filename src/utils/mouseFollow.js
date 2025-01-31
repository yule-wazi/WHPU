// 防抖
export function debounce(func, delay) {
  let timer = null;
  return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
          func.apply(this, arguments);
      }, delay);
  };
}
// 节流
export function throttle(fn, delay) {
  let timer = null
  
  return function() {
      if (!timer) {
        timer = setTimeout(() => {
            fn.apply(this,arguments)
            timer = null
        },delay)
      }
  }
}
//鼠标跟踪
export function mouseFollow(event, element, pos, posRate = 0.1, rotateRate = 0.008) {
  const getBgPos = element.value.getBoundingClientRect()
  // 元素中心坐标
  const bgPos = {
    x: getBgPos.left + getBgPos.width/2,
    y: getBgPos.top + getBgPos.height/2
  }
  // 偏移坐标
  pos.pX = (event.x - bgPos.x) * posRate
  pos.pY = (event.y - bgPos.x) * posRate
  // 偏移角度
  pos.rX = (bgPos.y - event.y) * rotateRate
  pos.rY = (event.x - bgPos.x) * rotateRate
}