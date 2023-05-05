// const watermark = {}
// 定义设置水印的方法，
const watermarkFun = () => {
  // 如果水印元素已经存在就先移走，重新生成, id要是全局独一无二的
  const id = '3.14159261111'
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
  // 第一步：生成cavas元素，使用canvas, 绘制水印
  const str = 'any app'
  const canvasEle = document.createElement('canvas')
  // 设置单个水印元素的宽高，这决定了页面水印的密度，需要更具水印文字的大小以及长度设置合理的值
  canvasEle.width = 200
  canvasEle.height = 100
  const ctx = canvasEle.getContext('2d') // 绘制2d图形
  ctx.rotate(-20 * Math.PI / 180)// 设置水印元素的倾斜, 这一行代码要写在设置水印文字之前，涉及样式的都写在设置水印文字之前
  ctx.font = '16px serif' // 设置水印文字的大小和字体
  ctx.fillStyle = 'rgba(200, 200, 200, 0.8)' // 设置水印文字的颜色
  ctx.textAlign = 'left' // 文本左对齐
  ctx.fillText(str, canvasEle.width / 16, canvasEle.height / 2) // 设置水印文字
 
  // 第二步：把canvas转化为一张图片，作为背景图，添加到div
  const divEle = document.createElement('div')
  divEle.id = id
  divEle.style.width = document.documentElement.clientWidth - 10 + 'px' // 设置div元素的宽高
  divEle.style.height = document.documentElement.clientHeight - 20 + 'px'
  divEle.style.pointerEvents = 'none' // 元素永远不会成为鼠标事件的target
  divEle.style.position = 'fixed' // 固定定位, 让元素撑满整个可视区域
  // divEle.style.top = '3px'
  // divEle.style.left = '5px'
  divEle.style.background = 'url(' + canvasEle.toDataURL() + ') left top repeat' // 水印图片做div的背景,并且重复，这样看起来就是满屏都是水印
  divEle.style.zIndex = -99999 
  // 第三步：div添加到body元素，水印生成
  document.body.appendChild(divEle)
  return id
}
// 设置水印，就调用这个方法
watermarkFun()
// 页面发生缩放，重绘水印
window.onresize = () => {
  watermarkFun()
}