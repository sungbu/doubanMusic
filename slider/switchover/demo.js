(function ($) {
    var obj = {
        init : function (opt) {
            this.opts = opt || {};
            this.createDom();
            this.bindEvent();
        },
        createDom : function () {
            var opt = this.opts;
            var wrap = opt.father;
            var header = opt.header;
            var content = opt.content;
            var headCon = $('<div class="headCon"></div>');
            var headConStr = $('<span class="headConStr"></span>');
            var headConBtn = $('<span class="headConBtn"></span>');
            var moreLeftBtn = $('<a href="#" class="moreLeftBtn"></a>');
            var moreRightBtn = $('<a href="#" class="moreRightBtn"></a>');
            var moreConBox = $('<div class="more-con-box"></div>');
            var conBox = $('<div class="conBox"></div>');
            var str = '';
            wrap.append(headCon.append(headConStr.text(header)).append(headConBtn.append(moreLeftBtn).append(moreRightBtn)));
            wrap.append(conBox.append(content))
            var oUlWidth = 2 * (parseInt(conBox.width()));
            $(".cardBox").css({
                width : oUlWidth+40 + 'px'
            })
            $(".moreLeftBtn").addClass('closeBtn');
        },
        bindEvent : function () {
            var opt = this.opts;
            var delay = opt.delay
            $('.headConBtn').on("click","a",function (e) {
                e.preventDefault();
                if($(this).attr('class') == 'moreRightBtn'){
                    $('.cardBox').animate({
                        left : '-615px'
                    },delay)
                    $(this).addClass('closeBtn').siblings().removeClass('closeBtn')
                }else if($(this).attr('class') == 'moreLeftBtn'){
                    $('.cardBox').animate({
                        left : '30px'
                    },delay)
                    $(this).addClass('closeBtn').siblings().removeClass('closeBtn')
                }
            })
        }
    }
    $.fn.extend({
        moreTab : function (option) {
            option.father = $(this) || $('body');
            obj.init(option);
        }
    })
} (jQuery))