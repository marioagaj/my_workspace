// Jquery parallax scroll for data speed 
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});




// Example on how it works
// <div class="content">
//   <div class="wrapper">
//     <div class="box" data-scroll-speed="2">S</div>
//     <div class="box" data-scroll-speed="3">C</div>
//     <div class="box" data-scroll-speed="6">R</div>
//     <div class="box" data-scroll-speed="5">O</div>
//     <div class="box" data-scroll-speed="9">L</div>
//     <div class="box" data-scroll-speed="4">L</div>
//   </div>
// </div>