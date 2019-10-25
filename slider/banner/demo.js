(function ($) {
    $.fn.extend({
        sliderImg : function (options) {
            options.father = this || $("body");
            new Swiper (options);
        }
    })
    function Swiper (opt) {
        var opts = opt || {};
        this.img = opts.img;
        this.wrap = opts.father;
        this.listColor = opt.listColor;
        this.prevBtn = opts.prevBtn;
        this.nextBtn = opts.nextBtn;
        this.init();
    }
    Swiper.prototype.init = function () {
        this.nowIndex = 0;
        this.len = this.img.length;
        this.itemWidth = parseInt($("#swiper").width());
        this.itemHeight = parseInt($("#swiper").height());
        this.timer = null;
        this.lock = true;
        this.flag = true;
        this.createDom();
        this.sliderAuto();
        this.bindEvent();
    }
    Swiper.prototype.createDom = function () {
        var len = this.len;
        var str = '',listStr = '';
        var imgBox = $("<ul class='img-box'></ul>");
        var order = $("<div class='order'></div>");
        var list = $("<ul></ul>")
        var btn = $('<div class="btn"></div>');
        if(this.prevBtn){
            var prev = $('<a href="#" class="prevBtn"></a>')
            btn.append(prev);
        }
        if(this.nextBtn){
            var next = $('<a href="#" class="nextBtn"></a>')
            btn.append(next);
        }
        for(var i = 0; i < len; i ++){
            str += '<li><a href="#">\
                <img src="'+ this.img[i] +'">\
            </a></li>';
            listStr += '<li></li>'
        }
        str += '<li><a href="#">\
            <img src="'+ this.img[0] +'"></a>\
            </li>'
        $(str).appendTo(imgBox);
        $(listStr).appendTo(list);
        $(order).append(list);
        this.wrap.append(imgBox).append(order).append(btn);
        $(".img-box").css({
            width:this.itemWidth * (len + 1) + "px",
            heihgt:this.itemHeight
        })
        $(".img-box li").css({
            width:this.itemWidth,
            heihgt:this.itemHeight
        })
        $(".order ul li").eq(0).addClass("activeList").css("background-color",this.listColor);
        this.listWidth = parseInt($(".order ul li").width());
        $(".order").css({
            width : 2 * (len * this.listWidth)
        })
    }
    Swiper.prototype.bindEvent = function () {
        var self = this;
        $(".order ul li").add(".prevBtn").add(".nextBtn").on("click",function (e) {
            e.preventDefault();
            if (self.flag){
                if($(this).attr("class") == "prevBtn"){
                    self.move("prev")
                }else if($(this).attr("class") == "nextBtn"){
                    self.move("next")
                }else{
                    var index = $(this).index();
                    self.move(index);
                }
            }
        })
        self.wrap.on("mouseenter",function () {
            self.lock = false;
            clearTimeout(self.timer);
        }).on("mouseleave",function (){
            self.lock = true;
            self.sliderAuto();
        })
        $(".btn a").on("mouseenter",function () {
            if($(this).attr("class") == "prevBtn"){
                $(this).css("background-position","0 0");
            }else if($(this).attr("class") == "nextBtn"){
                $(this).css("background-position","36px 0px");
            }
        }).on("mouseleave",function () {
            if($(this).attr("class") == "prevBtn"){
                $(this).css("background-position","0 51px");
            }else if($(this).attr("class") == "nextBtn"){
                $(this).css("background-position","36px 51px");
            }
        })
    }
    Swiper.prototype.sliderAuto = function () {
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function () {
            self.move("next")
        },3000)
    }
    Swiper.prototype.move = function (dir) {
        var self = this;
        var len = self.len;
        var itemWidth = this.itemWidth;
        this.flag = false;
        if(dir == "prev" || dir == "next"){
            if(dir == "prev"){
                if(self.nowIndex == 0){
                    $(".img-box").css({
                        left:-(len * itemWidth) + "px"
                    })
                    self.nowIndex = len - 1;
                }else{
                    self.nowIndex --;
                }
            }else{
                if(self.nowIndex == len - 1){
                    $(".img-box").animate({
                        left:-(len * itemWidth) + "px",
                    },function(){ 
                        $(this).css({
                            left:0,
                        });
                        if(self.lock){
                            self.sliderAuto();
                        }; 
                    })
                    self.nowIndex = 0;
                }else{
                    self.nowIndex ++;
                }
            }
        }else{
            self.nowIndex = dir
        }
        this.slider(this.nowIndex);
        this.changeStyle();
    }
    Swiper.prototype.slider = function (nowIndex) {
        var self = this;
        $(".img-box").animate({
            left:-(nowIndex * self.itemWidth) + "px",
        },function () {
            self.flag = true;
            if(self.lock){
                self.sliderAuto();
            }
        })
    }
    Swiper.prototype.changeStyle = function () {
        $(".activeList").removeClass().attr("style","");
        $(".order ul li").eq(this.nowIndex).addClass("activeList").css("background-color",this.listColor);
    }
} (jQuery))