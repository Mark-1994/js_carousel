window.onload = function() {
  // 获取左右箭头相应的元素
  var wrap = document.getElementById('wrap');
  var arrow = document.getElementById('arrow');
  var arrLeft = document.getElementById('arrLeft');
  var arrRight = document.getElementById('arrRight');
  var slide = document.getElementById('slide');
  var ul = slide.children[0];
  var lis = ul.children; // 拿到所有li标签

  // 鼠标经过盒子显示箭头
  wrap.onmouseover = function() {
    animate(arrow, {"opacity": 1})
  };

  // 鼠标离开隐藏箭头
  wrap.onmouseout = function() {
    animate(arrow, {"opacity": 0})
  };

  // 定义一个数组，在数组中定义多个图片对象
  var config = [
    {
      "width": 350,
      "top": 20,
      "left": 50,
      "opacity": 0.2,
      "zIndex": 2
    },
    {
      "width": 450,
      "top": 70,
      "left": 0,
      "opacity": 0.8,
      "zIndex": 3
    },
    {
      "width": 650,
      "top": 120,
      "left": 175,
      "opacity": 1,
      "zIndex": 4
    },
    {
      "width": 450,
      "top": 70,
      "left": 550,
      "opacity": 0.8,
      "zIndex": 3
    },
    {
      "width": 350,
      "top": 20,
      "left": 600,
      "opacity": 0.2,
      "zIndex": 2
    }
  ]

  // 循环遍历所有li标签
  function assign() {
    for(var i = 0; i < lis.length; i++) {
      // console.log(lis[i]);
      animate(lis[i], config[i], function() {
        flag = true;
      });
    }
  }
  assign();

  // 给左箭头绑定事件
  arrLeft.onclick = function() {
    // 数组中最后一个对象，放到数组第一个位置
    if(flag) {
      config.unshift(config.pop());
      assign();
      flag = false;
    }
  };

  // 给右箭头绑定事件
  arrRight.onclick = function() {
    // 数组中最后一个对象，放到数组第一个位置
    if(flag) {
      config.push(config.shift());
      assign();
      flag = false;
    }
  };

  // 设置节流阀
  var flag = true;
}