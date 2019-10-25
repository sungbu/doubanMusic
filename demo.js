//轮播图
$("#swiper").sliderImg({
    img:["./img/lb1.jpg","./img/lb2.jpg","./img/lb3.jpg","./img/lb4.jpg","./img/lb5.jpg","./img/lb6.jpg"],
    listColor:"#139d72",
    prevBtn : false,
    nextBtn : true,
})
//选项卡
var tabs1 = [
    {
        img:'./img/artist-1.jpg',
        name:'养鸡',
        classify:'流行 Pop',
        decoracion:[]
    },
    {
        img:'./img/artist-2.jpg',
        name:'Blake Young',
        classify:'说唱 Pap',
        decoracion:[]
    },
    {
        img:'./img/artist-3.jpg',
        name:'梁晓雪',
        classify:'民谣 Folk',
        decoracion:[]
    },
    {
        img:'./img/artist-4.jpg',
        name:'熊锵锵',
        classify:'民谣 Folk',
        decoracion:[]
    },
    {
        img:'./img/artist-5.jpg',
        name:'大古',
        classify:'世界音乐 Wrold',
        decoracion:[]
    },
    {
        img:'./img/artist-6.jpg',
        name:'Hiperson/海朋森',
        classify:'摇滚 Rock',
        decoracion:[]
    },
    {
        img:'./img/artist-7.jpg',
        name:'BSF合唱中心',
        classify:'古典 Classical',
        decoracion:[]
    },
    {
        img:'./img/artist-8.jpg',
        name:'黎忘年',
        classify:'摇滚 Rock',
        decoracion:[]
    },
]
var tabs2 = [
    {
        img:'./img/artist-9.jpg',
        name:'Soil terrapin',
        classify:'说唱 Rap',
        decoracion:[]
    },
    {
        img:'./img/artist-10.jpg',
        name:'鞭子情人',
        classify:'民谣 Folk',
        decoracion:[]
    },
    {
        img:'./img/artist-11.jpg',
        name:'Ascension Music Group',
        classify:'说唱 Rap',
        decoracion:[]
    },
    {
        img:'./img/artist-12.jpg',
        name:'包小静',
        classify:'说唱 Rap',
        decoracion:[]
    },
    {
        img:'./img/artist-13.jpg',
        name:'德宏老爹',
        classify:'说唱 Rap',
        decoracion:[]
    },
    {
        img:'./img/artist-14.jpg',
        name:'罗艺恒',
        classify:'流行 Pop',
        decoracion:[]
    },
    {
        img:'./img/artist-15.jpg',
        name:'英伦盒子',
        classify:'民谣 Folk',
        decoracion:[]
    },
    {
        img:'./img/artist-16.jpg',
        name:'夏蔓',
        classify:'流行 Pop',
        decoracion:[]
    },
]
function addTabs (conBox,arr) {
    var len = arr.length;
    var str = '';
    for (var i = 0; i < len; i ++){
        str += ' <div class="box"><div class="imgBox"><div class="pic" style="background-image:url('+ arr[i].img +')"></div>\
        </div><div class="str"><a href="#">'+ arr[i].name +'</a><span>'+ arr[i].classify+'</span>\
        </div></div>'
    }
    conBox.html(str);
    return conBox
}
var div1 = addTabs($("<div class='conBox'></div>"),tabs1);
var div2 = addTabs($("<div class='conBox'></div>"),tabs2);
$("#artist").tab({
    header : "",
    tabList : ["本周流行音乐人","上升最快音乐"],
    conStr : [div1,div2],
    boxWidth:'125px',
    boxHeight:'209px',
})
//左右切换卡
var moreCard = [
    {
        img:'./img/tab-more1.jpg',
        title:'【歌曲】',
        music:'Creep by you',
        author:'Eastbull',
        dir:'四分之一个世纪以来，可能有1000个中国的学生乐队翻唱过这首歌，但唯有这个版本是如此的独特……'
    },
    {
        img:'./img/tab-more2.jpg',
        title:'【专辑】',
        music:'中秋',
        author:'Hiperson/海朋森',
        dir:'海朋森的中秋特辑，几首今年EP里歌曲的早期版本，和后来的成品几乎没什么共同点。两三年前的巡演观众你们还好吗？'
    },
    {
        img:'./img/tab-more3.jpg',
        title:'【音乐人】',
        music:'Havlier',
        author:'8人关注',
        dir:'一些适合抖腿的beats。而当人声唱起来的时候，雌雄莫辩的人声效果又让人联想起90年代的art pop'
    },
    {
        img:'./img/tab-more4.jpg',
        title:'【音乐人】',
        music:'水手葡萄',
        author:'8人关注',
        dir:'曾经的老朋克王峻平和施旭东，拉上bedstar的鼓手李凡，一起搞了一张雷鬼专辑。'
    },
    {
        img:'./img/tab-more5.jpg',
        title:'【专辑】',
        music:'白河夜船 ',
        author:'白百EndlessWhite',
        dir:'简练凝固的歌词之外，西安的白百乐队还有着精巧的节奏与清晰抢耳的吉他线。盯鞋乐队可不能只是刷音墙哦。'
    },
    {
        img:'./img/tab-more6.jpg',
        title:'【音乐人】',
        music:'核动力第四国际',
        author:'490人关注',
        dir:'彻底隐藏在网络中的素人组合。沿绵十年，曲风多变，口耳相传。在你遗忘他的时候，又带来一首好歌。'
    },
]
function addCard (cardBox,content) {
    var len = content.length;
    var str = ''
    for(var i = 0; i < len; i ++){
        str += ' <li class="moreTab-con"><div class="moreTab-imgBox"><a href="#" class="moreTab-img" style="background-image:url('+ content[i].img +')"></a></div>\
        <div class="moreTab-dir"><p class="title">'+ content[i].title +'</p><a href="#" class="music">'+ content[i].music +'</a><h1><a href="#" class="author">'+ content[i].author +'</a></h1>\
            <p class="dir">'+ content[i].dir +'</p></div></li>';
    }
    cardBox.html(str);
    return cardBox
}
var con = addCard($('<ul class="cardBox"></ul>'),moreCard);
$('#moreTab').moreTab({
    header : '编辑推荐',
    content : [con],
    delay : 300,
})
//新碟榜
var plate1 = [
    {
        img : './img/new-plate1.jpg',
        music : '画外音',
        author : '王凯',
        star : '0 -33px',
        grade : '7.5'
    },
    {
        img : './img/new-plate2.jpg',
        music : 'LOURA',
        author : '娄艺潇',
        star : '0 -55px',
        grade : '5.9'
    },
    {
        img : './img/new-plate3.jpg',
        music : '换句话说',
        author : '换句话说',
        star : '0 -33px',
        grade : '7.1'
    }, 
    {
        img : './img/new-plate4.jpg',
        music : '绽放的绽放的绽放',
        author : '许茹芸',
        star : '0 -44px',
        grade : '6.4'
    },
    {
        img : './img/new-plate5.jpg',
        music : '你說之後會找我',
        author : 'my little airport',
        star : '0 -11px',
        grade : '9.0'
    },
    {
        img : './img/new-plate6.jpg',
        music : 'Tha Carter V',
        author : 'Lil Wayne',
        star : '0 -33px',
        grade : '7.9'
    },
    {
        img : './img/new-plate7.jpg',
        music : 'The Blue Hour',
        author : 'Suede',
        star : '0 -33px',
        grade : '7.6'
    },
    {
        img : './img/new-plate8.jpg',
        music : 'Bloom',
        author : 'Troye Sivan',
        star : '0 -33px',
        grade : '7.6'
    },
   
]
var plate2 = [
    {
        img : './img/new-plate1.jpg',
        music : '画外音',
        author : '王凯',
        star : '0 -33px',
        grade : '7.5'
    },
    {
        img : './img/new-plate2.jpg',
        music : 'LOURA',
        author : '娄艺潇',
        star : '0 -55px',
        grade : '5.9'
    },
    {
        img : './img/new-plate3.jpg',
        music : '换句话说',
        author : '换句话说',
        star : '0 -33px',
        grade : '7.1'
    }, 
    {
        img : './img/new-plate4.jpg',
        music : '绽放的绽放的绽放',
        author : '许茹芸',
        star : '0 -44px',
        grade : '6.4'
    },
    {
        img : './img/new-plate5.jpg',
        music : '你說之後會找我',
        author : 'my little airport',
        star : '0 -11px',
        grade : '9.0'
    },
    {
        img : './img/new-plate9.jpg',
        music : '廟雨連珠',
        author : '文雀',
        star : '0 -33px',
        grade : '7.8'
    },
    {
        img : './img/new-plate10.jpg',
        music : 'HINSIDEOUT张敬轩演唱会2018',
        author : '张敬轩 Hins Cheung',
        star : '0 -22px',
        grade : '8.8'
    },
    {
        img : './img/new-plate11.jpg',
        music : '克制凶猛',
        author : '汪苏泷 silence',
        star : '0 -55px',
        grade : '5.7'
    },
   
]
var plate3 = [
    {
        img : './img/new-plate6.jpg',
        music : 'Tha Carter V',
        author : 'Lil Wayne',
        star : '0 -33px',
        grade : '7.9'
    },
    {
        img : './img/new-plate7.jpg',
        music : 'The Blue Hour',
        author : 'Suede',
        star : '0 -33px',
        grade : '7.6'
    },
    {
        img : './img/new-plate8.jpg',
        music : 'Bloom',
        author : 'Troye Sivan',
        star : '0 -33px',
        grade : '7.6'
    },
    {
        img : './img/new-plate12.jpg',
        music : 'Kamikaze',
        author : 'Eminem',
        star : '0 -22px',
        grade : '8.0'
    },
    {
        img : './img/new-plate13.jpg',
        music : 'YSIV',
        author : 'Logic',
        star : '0 -22px',
        grade : '8.4'
    },
    {
        img : './img/new-plate14.jpg',
        music : 'Iridescence',
        author : 'BROCKHAMPTON',
        star : '0 -33px',
        grade : '7.0'
    },
    {
        img : './img/new-plate15.jpg',
        music : 'Room 25',
        author : 'Noname',
        star : '0 -22px',
        grade : '8.6'
    },
    {
        img : './img/new-plate16.jpg',
        music : 'Politics Of Living',
        author : 'Kodaline',
        star : '0 -44px',
        grade : '6.9'
    },
]
var plate4 = [
    {
        img : './img/new-plate17.jpg',
        music : 'WARNING',
        author : '선미,宣美',
        star : '0 -33px',
        grade : '7.7'
    },
    {
        img : './img/new-plate18.jpg',
        music : 'LAST WALTZ IN TOKYO',
        author : "world's end girlfriend",
        star : '0 -11px',
        grade : '9.0'
    },
    {
        img : './img/new-plate19.jpg',
        music : 'NEW KIDS : THE FINAL',
        author : 'iKON',
        star : '0 -33px',
        grade : '7.2'
    },
    {
        img : './img/new-plate20.jpg',
        music : 'LOVE YOURSELF 結 Answer',
        author : '防弹少年团 BTS',
        star : '0 -33px',
        grade : '7.4'
    },
    {
        img : './img/new-plate21.jpg',
        music : 'Present:YOU',
        author : 'GOT7',
        star : '0 -44px',
        grade : '6.3'
    },
    {
        img : './img/new-plate22.jpg',
        music : 'じゃぱみゅ',
        author : 'きゃりーぱみゅぱみゅ',
        star : '0 -44px',
        grade : '6.6'
    },
    {
        img : './img/new-plate23.jpg',
        music : 'WE GO UP',
        author : 'NCT DREAM',
        star : '0 -33px',
        grade : '7.5'
        
    },
    {
        img : './img/new-plate24.jpg',
        music : 'WJ PLEASE?',
        author : '宇宙少女 (WJSN) 우주소녀',
        star : '0 -55px',
        grade : '5.2'
    },
]
var plate5 = [
    {
        img : './img/new-plate25.jpg',
        music : '时间停了',
        author : '鹿晗',
        star : '0 -22px',
        grade : '8.6'
    },
    {
        img : './img/new-plate26.jpg',
        music : '我是你的',
        author : "陈立农",
        star : '0 -33px',
        grade : '7.5'
    },
    {
        img : './img/new-plate27.jpg',
        music : 'Head Above Water',
        author : 'Avril Lavigne',
        star : '0 -33px',
        grade : '7.6'
    },
    {
        img : './img/new-plate28.jpg',
        music : '我的',
        author : '王俊凯',
        star : '0 -22px',
        grade : '8.1'
    },
    {
        img : './img/new-plate29.jpg',
        music : 'Venice Bitch',
        author : '拉娜·德雷 Lana Del Rey',
        star : '0 -11px',
        grade : '9.1'
    },
    {
        img : './img/new-plate30.jpg',
        music : '跟着我一起',
        author : '杨超越',
        star : '0 -44px',
        grade : '6.5'
    },
    {
        img : './img/new-plate31.jpg',
        music : '醒着',
        author : '王俊凯',
        star : '0 -22px',
        grade : '8.1'
        
    },
    {
        img : './img/new-plate32.jpg',
        music : '最好',
        author : '杨洋',
        star : '0 -33px',
        grade : '7.2'
    },
]
function addDom (conBox,arr) {
    var len = arr.length;
    var str = '';
    for (var i = 0; i < len; i ++){
        str += ' <div class="box"><div class="imgBox"><div class="pic" style="background-image:url('+ arr[i].img +')"></div>\
        </div><div class="str"><a href="#">'+ arr[i].music +'</a><span>'+ arr[i].author+'</span><div style="background-position:'+ arr[i].star +'">'+ arr[i].grade +'</div>\
        </div></div>'
    }
    conBox.html(str);
    return conBox
}
var plateDiv1 = addDom($("<div class='conBox'></div>"),plate1);
var plateDiv2 = addDom($("<div class='conBox'></div>"),plate2);
var plateDiv3 = addDom($("<div class='conBox'></div>"),plate3);
var plateDiv4 = addDom($("<div class='conBox'></div>"),plate4);
var plateDiv5 = addDom($("<div class='conBox'></div>"),plate5);
$("#new-plate").tab({
    header : "新碟榜",
    tabList : ["最新","华语","欧美","日韩","单曲"],
    conStr : [plateDiv1,plateDiv2,plateDiv3,plateDiv4,plateDiv5],
    boxWidth:'125px',
    boxHeight:'209px',
})
//最近热门歌单
var hotTabs1 = [
    {
        img:"./img/hotMusic1.jpg",
        title:"静静写论文",
        num:"(31)",
        author:"joanna31",
        data:" 制作 |  102收藏",
        tabs:["1.Syrian Serenade","2.Etupirka","3.Long Long Ago","..."]
    },
    {
        img:"./img/hotMusic2.jpg",
        title:"献给时差党柔软的深夜晚安曲",
        num:"(30)",
        author:"萊浮哈德",
        data:" 制作 |  59收藏",
        tabs:["1.The Rose","2.Moon River","3.Calling You","..."]
    },
    {
        img:"./img/hotMusic3.jpg",
        title:"还想不想好好写论文了",
        num:"(33)",
        author:"S.",
        data:" 制作 |  79收藏",
        tabs:["1.Bittersweet","2.Gentle","3.Nocturnes: Adantino","..."]
    },
    {
        img:"./img/hotMusic4.jpg",
        title:"英美影视原声（激昂版）2",
        num:"(39)",
        author:"小明灯仁波切",
        data:" 制作 |  106收藏",
        tabs:["1.The Hanging Tree (Rebel Remix)","2.Manners Maketh Man","3.Eat, Drink and Paaaaarty","..."]
    },
    {
        img:"./img/hotMusic5.jpg",
        title:"Perfume Singles Collection",
        num:"(26)",
        author:"Roooooolls",
        data:" 制作 |  33收藏",
        tabs:["1.リニアモーターガール","2.コンピューターシティ","3.エレクトロ・ワールド","..."]
    },
    {
        img:"./img/hotMusic6.jpg",
        title:"纯",
        num:"(15)",
        author:"肉",
        data:" 制作 |  6收藏",
        tabs:["1.00:40","2.0448/0729","3.0952","..."]
    },
]
var hotTabs2 = [
    {
        img:"./img/hotMusic7.jpg",
        title:"听的片刻产生了心动的永恒",
        num:"(88)",
        author:"syn_chan",
        data:" 制作 |  1505收藏",
        tabs:["1.Everything N'Nothing (Album Version)","2.晃动在眼皮上的阳光(demo)","3.只怕不够时间看你白头","..."]
    },
    {
        img:"./img/hotMusic8.jpg",
        title:"Shall we dance?",
        num:"(32)",
        author:"某S",
        data:" 制作 |  235收藏",
        tabs:["1.Glamour Girl","2.Sky High","3.Over & Done","..."]
    },
    {
        img:"./img/hotMusic9.jpg",
        title:"雾非雾",
        num:"(84)",
        author:"没注销",
        data:" 制作 |  156收藏",
        tabs:["1.走在冷风中","2.若你碰到他","3.岁月神偷 (Demo Version)","..."]
    }
]
var hotTabs3 = [
    {
        img:"./img/hotMusic10.jpg",
        title:"娓娓道来的民谣如痴如醉的摇滚",
        num:"(22)",
        author:"freedom-cat",
        data:" 制作 |  64收藏",
        tabs:["1.农夫渔夫","2.渔樵问答","3.鬼猫","..."]
    },
    {
        img:"./img/hotMusic11.jpg",
        title:"日光之下 并无新事",
        num:"(60)",
        author:"死了",
        data:" 制作 |  166收藏",
        tabs:["1.In The Blue","2.Ah, You Left Me","3.Something Real","..."]
    },
    {
        img:"./img/hotMusic12.jpg",
        title:"Summer",
        num:"(252)",
        author:"太公小望",
        data:" 制作 |  23收藏",
        tabs:["1.Yui","2.Mariana","3.白虎野(パプリカエンディングバージョン)","..."]
    },
    {
        img:"./img/hotMusic13.jpg",
        title:"清心电台The music of the soul 第三辑",
        num:"(30)",
        author:"Muse",
        data:" 制作 |  373收藏",
        tabs:["1.Evolve","2.In The End Its Easy","3.Angels Or Devils","..."]
    },
    {
        img:"./img/hotMusic14.jpg",
        title:"纯音乐",
        num:"(39)",
        author:"夫唯不争",
        data:" 制作 |  63收藏",
        tabs:["1.ハイキュー!!","2.Transformation","3.When Will I See You Again","..."]
    },
    {
        img:"./img/hotMusic15.jpg",
        title:"可以循环",
        num:"(24)",
        author:"LARS",
        data:" 制作 |  15收藏",
        tabs:["1.Reflection Eternal","2.Luv(sic.) Pt. 3 Ft. Shing02","3.Fire In The Mountain","..."]
    },
]
var hotTabs4 = [
    {
        img:"./img/hotMusic16.jpg",
        title:"多少人念你老去的容颜",
        num:"(34)",
        author:"牯岭游僧",
        data:" 制作 |  432收藏",
        tabs:["1.Vincent","2.You Are A Lover","3.Over The Rainbow","..."]
    },
    {
        img:"./img/hotMusic17.jpg",
        title:"No other way",
        num:"(40)",
        author:"Rain",
        data:" 制作 |  9收藏",
        tabs:["1.Quiet Inside","2.Orange Sky","3.You Would Love Me Too","..."]
    },
    {
        img:"./img/hotMusic18.jpg",
        title:"2015我的大三音乐",
        num:"(19)",
        author:"小镇",
        data:" 制作 |  21收藏",
        tabs:["1.预谋邂逅","2.青年","3.03 - 自己的自己","..."]
    },
    {
        img:"./img/hotMusic19.jpg",
        title:"不只是吉他的民谣",
        num:"(22)",
        author:"某阴谋论者",
        data:" 制作 |  430收藏",
        tabs:["1.おなじ話","2.California Brown And Blue","3.Before I Die","..."]
    },
    {
        img:"./img/hotMusic20.jpg",
        title:"你呆啊 你瞎啊",
        num:"(123)",
        author:"Nenya",
        data:" 制作 |  759收藏",
        tabs:["1.借我","2.奇妙能力歌","3.北方的女王","..."]
    },
    {
        img:"./img/hotMusic21.jpg",
        title:"奇妙能力歌",
        num:"(30)",
        author:"周小裁缝",
        data:" 制作 |  302收藏",
        tabs:["1.奇妙能力歌","2.少年你在哪里","3.小相思","..."]
    },
]
var hotTabs5 = [
    {
        img:"./img/hotMusic22.jpg",
        title:"∑中二少年来自异世界①",
        num:"(31)",
        author:"脱力系少年A",
        data:" 制作 |  44收藏",
        tabs:["1.EXEC_COSMOFLIPS/.","2.Arrietty's Song (Arrietty's Song)","3.Mary","..."]
    },
    {
        img:"./img/hotMusic23.jpg",
        title:"音乐故事",
        num:"(31)",
        author:"Susir",
        data:" 制作 |  714收藏",
        tabs:["1.サユリの旋律","2.マルコとジーナのテーマ","3.Good Evening Heatache","..."]
    },
    {
        img:"./img/hotMusic24.jpg",
        title:"❤那些一击即中♪",
        num:"(41)",
        author:"玲瓏喵·獸齒幼",
        data:" 制作 |  45收藏",
        tabs:["1.Luv Letter","2.空の影 ～nejimaki musica～","3.優しい嘘 Piano","..."]
    },
    {
        img:"./img/hotMusic25.jpg",
        title:"纯音乐",
        num:"(24)",
        author:"motai0",
        data:" 制作 |  22收藏",
        tabs:["1.Just a few minutes","2.ボレロ","3.カノン","..."]
    },
    {
        img:"./img/hotMusic26.jpg",
        title:"好想告诉你",
        num:"(23)",
        author:"Vict0ria-Yi",
        data:" 制作 |  312收藏",
        tabs:["1.Pure","2.きみにとどけ(TV ver.)","3.青空","..."]
    },
    {
        img:"./img/hotMusic27.jpg",
        title:"气势史诗恢弘1",
        num:"(30)",
        author:"吾等追求毁灭",
        data:" 制作 |  878收藏",
        tabs:["1.Crimson Tide - Roll Tide","2.Time Will Remember Us","3.Hunted Assassin 2","..."]
    },
]
function addHot (arr,box) {
    var len = arr.length;
    var str='';
    for(var i = 0; i < len; i ++){
        str += '<div class="tabs"><div class="img-Box"><a href="#" style="background-image:url('+ arr[i].img +')"></a></div>\
                <div class="textBox"><p><span><a href="#">'+ arr[i].title +'</a></span><span>'+ arr[i].num +'</span></p>\
                    <p><span><a href="#">'+ arr[i].author+'</a></span><span>'+ arr[i].data+'</span></p>\
                    <ul><li>'+ arr[i].tabs[0] +'</li><li>'+ arr[i].tabs[1] +'</li><li>'+ arr[i].tabs[2] +'</li><li>'+ arr[i].tabs[3] +'</li></ul></div></div>'
    }
    box.html(str);
    return box
}
var hotTab1 = addHot(hotTabs1,$("<div class='conBox'></div>"));
var hotTab2 = addHot(hotTabs2,$("<div class='conBox'></div>"));
var hotTab3 = addHot(hotTabs3,$("<div class='conBox'></div>"));
var hotTab4 = addHot(hotTabs4,$("<div class='conBox'></div>"));
var hotTab5 = addHot(hotTabs5,$("<div class='conBox'></div>"));
$("#hotMusic").tab({
    header:"最近热门歌单",
    tabList:["热门","流行","摇滚","民谣","原声"],
    conStr:[hotTab1,hotTab2,hotTab3,hotTab4,hotTab5],
    boxWidth:"315px",
    boxHeight:"160px"
})

var only1 = [
    {
        image: "./img/only1-1.jpg",
        song: "城市 by Sijia",
        author: "不休",
        view: "1339"
    },
    {
        image: "./img/only1-2.jpg",
        song: "临别留言(Demo)",
        author: "Zack",
        view: "390"
    },
    {
        image: "./img/only1-3.jpg",
        song: "远方（2019.09.26）",
        author: "徐天倚",
        view: "446"
    },
    {
        image: "./img/only1-4.jpg",
        song: "茉",
        author: "pentatonic",
        view: "1795"
    },
    {
        image: "./img/only1-5.jpg",
        song: "ᠰᠢᠭᠦᠳᠡᠷᠢ ᠴᠡᠴᠡᠭ",
        author: "天格思",
        view: "559"
    },
    {
        image: "./img/only1-6.jpg",
        song: "浸水",
        author: "Obelisk",
        view: "701"
    },
    {
        image: "./img/only1-7.jpg",
        song: "09.Collapsed",
        author: "不洁净注射",
        view: "17"
    },
    {
        image: "./img/only1-8.jpg",
        song: "毕业季：写给自己的情歌",
        author: "無药监局局长",
        view: "182"
    },
    {
        image: "./img/only1-9.jpg",
        song: "早，马克思",
        author: "大闫 ",
        view: "663"
    },
    {
        image: "./img/only3-3.jpg",
        song: "伟大时代的晚上/Dark Side of a Great Epoch",
        author: "Deep Mountains | 深山",
        view: "387"
    },
]
var only2 = [
    {
        image: "./img/only1-4.jpg",
        song: "茉",
        author: "pentatonic",
        view: "1795"
    },
    {
        image: "./img/only1-10.jpg",
        song: "伟大时代的晚上/Dark Side of a Great Epoch",
        author: "Deep Mountains | 深山",
        view: "388"
    },
    {
        image: "./img/only1-7.jpg",
        song: "03.Genetically Modified Utopia",
        author: "03.Genetically Modified Utopia",
        view: "168"
    },
    {
        image: "./img/only2-4.jpg",
        song: "零号",
        author: "Self-destructive Poison",
        view: "63"
    },
    {
        image: "./img/only2-5.jpg",
        song: "Song Ideas for \"Peers\" #4",
        author: "P. Murk",
        view: "406"
    },
    {
        image: "./img/only2-6.jpg",
        song: "六楼",
        author: "Vanish",
        view: "58"
    },
    {
        image: "./img/only2-7.jpg",
        song: "跳东湖",
        author: "广场恐惧症",
        view: "16"
    },
    {
        image: "./img/only2-8.jpg",
        song: "我们生活得多么简单",
        author: "醉草",
        view: "101"
    },
    {
        image: "./img/only2-9.jpg",
        song: "Mars",
        author: "Nightbreaker",
        view: "2"
    },
    {
        image: "./img/only2-10.jpg",
        song: "记忆巴士(Instrumental)",
        author: "相雾乐队",
        view: "9"
    },
]
var only3 = [
    {
        image: "./img/only1-10.jpg",
        song: "城市 by Sijia",
        author: "不休",
        view: "1355"
    },
    {
        image: "./img/only1-8.jpg",
        song: "毕业季：写给自己的情歌",
        author: "無药监局局长",
        view: "182"
    },
    {
        image: "./img/only3-3.jpg",
        song: "消愁（cover毛不易）",
        author: "祥树",
        view: "18"
    },
    {
        image: "./img/only3-4.jpg",
        song: "这里正上演着夏天",
        author: "黄汉声",
        view: "55"
    },
    {
        image: "./img/only3-5.jpg",
        song: "川流不息",
        author: "李蚂蚁",
        view: "1"
    },
    {
        image: "./img/only3-6.jpg",
        song: "陌生姑娘",
        author: "明子",
        view: "6"
    },
    {
        image: "./img/only3-7.jpg",
        song: "Visions of Gideon（cover请以你的名字呼唤我）",
        author: "郑荆沙",
        view: "5"
    },
    {
        image: "./img/only3-8.jpg",
        song: "01 太上忘情",
        author: "张梧",
        view: "5"
    },
    {
        image: "./img/only3-9.jpg",
        song: "某一日的午后（demo）",
        author: "朱华东",
        view: "104"
    },
    {
        image: "./img/only3-10.jpg",
        song: "我听见欲望在我窗外交响",
        author: "郁林",
        view: "70"
    },
]
var only4 = [
    {
        image: "./img/only4-1.jpg",
        song: "远方（2019.09.26）",
        author: "徐天倚",
        view: "449"
    },
    {
        image: "./img/only4-2.jpg",
        song: "Boring Afternoon Op.2",
        author: "Cirond.L",
        view: "76"
    },
    {
        image: "./img/only4-3.jpg",
        song: "都市情歌（demo）",
        author: "耀",
        view: "55"
    },
    {
        image: "./img/only4-4.jpg",
        song: "Railway to Heaven v.2 (Instrumental)",
        author: "1999",
        view: "66"
    },
    {
        image: "./img/only4-5.jpg",
        song: "孙露 - 小小的太阳 3D环绕(发烧人声系列)",
        author: "先锋Music",
        view: "237"
    },
    {
        image: "./img/only4-6.jpg",
        song: "152号 学生青春校园风 2500元",
        author: "蓝调音乐",
        view: "2"
    },
    {
        image: "./img/only4-7.jpg",
        song: "谢艾妮 - 余生请多指教",
        author: "袁雨桐Roxanne",
        view: "1"
    },
    {
        image: "./img/only4-8.jpg",
        song: "你好不好",
        author: "罗俊林",
        view: "你好不好"
    },
    {
        image: "./img/only4-9.jpg",
        song: "PRS IR421",
        author: "光空STUDIO  EXISTENCE  SPACE",
        view: "4"
    },
    {
        image: "./img/only4-10.jpg",
        song: "夜，未名",
        author: "沈辛成",
        view: "23"
    },
]
var only5 = [
    {
        image: "./img/only1-2.jpg",
        song: "临别留言(Demo)",
        author: "Zack",
        view: "393"
    },
    {
        image: "./img/only5-2.jpg",
        song: "rainy stone",
        author: "the stimulate around",
        view: "10"
    },
    {
        image: "./img/only5-3.jpg",
        song: "金拱门俱乐部",
        author: "lulu",
        view: "17"
    },
]
var only6 = [
    {
        image: "./img/only6-1.jpg",
        song: "kill the dancing rabbit",
        author: "传琦SAMA",
        view: "1"
    },
    {
        image: "./img/only6-2.jpg",
        song: "写在25岁",
        author: "T_K",
        view: "2"
    },
    {
        image: "./img/only6-3.jpg",
        song: "引以為戒",
        author: "w.o弟",
        view: "2"
    },
    {
        image: "./img/only6-4.jpg",
        song: "最宠爱的一生",
        author: "Mc饭宝",
        view: "9"
    },
]
function addOnly (arr,box) {
    var str = '';
    arr.forEach(function (ele,index) {
        // console.log(ele);
        console.log(ele.image,ele.song,ele.author,ele.view);
        str += `<li>
        <div class="contentPic">
            <img src="${ele.image}" alt="">
        </div>
        <div class="musicDes">
            <h5>${ele.song}</h5>
            <div class="author">
                <p>${ele.author}</p>
                <p>/</p>
                <p>${ele.view}次播放</p>
            </div>
        </div>
    </li>`
    })
    box.html(str);
    return box;
}
var onlyTab1 = addOnly(only1,$("<div class='conBox'></div>"));
var onlyTab2 = addOnly(only2,$("<div class='conBox'></div>"));
var onlyTab3 = addOnly(only3,$("<div class='conBox'></div>"));
var onlyTab4 = addOnly(only4,$("<div class='conBox'></div>"));
var onlyTab5 = addOnly(only5,$("<div class='conBox'></div>"));
var onlyTab6 = addOnly(only6,$("<div class='conBox'></div>"));

$("#week-list").tab({
    header:"",
    tabList:["最热","摇滚","民谣","流行","电子","说唱"],
    conStr:[onlyTab1,onlyTab2,onlyTab3,onlyTab4,onlyTab5,onlyTab6],
    boxWidth:"300px",
    boxHeight:"662px"
});