(function ($) {
    var obj = {
        init: function (opt) {
            this.opts = opt || {};
            this.createDom();
            this.bindEvent();
        },
        createDom: function () {
            var self = this;
            var opt = self.opts;
            var wrap = opt.father;
            var tabLen = opt.tabList.length;
            var header = opt.header;
            var tabWrap = $("<div class='tabWrap'></div>");
            var oUl = $("<ul class='tabs'></ul>");
            var tabStr = '';
            var wrapId = wrap.attr("id");
            var con = $("<div class='content'></div");
            var i = 0;
            for (i; i < tabLen; i++) {
                tabStr += '<li><a href="#" tittle="tab' + i + '">' + opt.tabList[i] + '</a><li>';
            }
            if (header) {
                var header = $("<span class='header'></span>");
                wrap.append($(tabWrap).append($(header).text(opt.header)))
            }
            $(tabStr).appendTo(oUl)
            wrap.append(tabWrap.append(oUl)).append(con.append(opt.conStr));
            for (var i = 0; i < tabLen; i++) {
                $($('#'+ wrapId +' .content .conBox')[i]).attr("id", "tab" + i);
            }
            $("#"+ wrapId +" .tabWrap ul li").find("a").eq(0).addClass("activeTab");
            $("#"+ wrapId +" .content").find(".conBox:first").addClass("currentBox");
            $("#"+ wrapId +" .box").css({
                width: opt.boxWidth,
                height: opt.boxHeight
            })
        },
        bindEvent: function () {
            var self = this;
            var opt = self.opts;
            var wrap = opt.father;
            var wrapId = wrap.attr("id");
            $('#'+ wrapId +' .tabs li').on("click", "a", function (e) {
                e.preventDefault();
                var tittle = $(this).attr("tittle");
                $("#"+ wrapId +" .activeTab").removeClass("activeTab");
                $(this).addClass("activeTab");
                $("#"+ wrapId +" .currentBox").removeClass("currentBox");
                $("#"+ wrapId +" #" + tittle).addClass("currentBox");
            })
        }
    }
    $.fn.extend({
        tab: function (option) {
            option.father = $(this) || $("body");
            obj.init(option);
        }
    })
}(jQuery))