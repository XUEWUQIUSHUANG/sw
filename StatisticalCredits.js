const xhr = new XMLHttpRequest();
const url = 'https://jwgl.hrbeu.edu.cn/jwapp/sys/cjcx/modules/cjcx/xscjcx.do';
const method = 'POST';
const data = new FormData();
const class_dict = {
    A0: [
        "中国传统节日文化",
        "中国古建筑文化与鉴赏（网络）",
        "四大名著的文化密码（网络）",
        "孙子兵法导读",
        "评剧艺术赏析",
        "走进故宫（网络）",
        "中国古典诗词中的品格与修养（网络）",
        "武经七书概论"
    ],
    A: [
        "世界军事名著鉴赏",
        "中国古典器物与装饰艺术",
        "中国工艺美术史",
        "乒乓球",
        "交际礼仪与口才",
        "俄语初级（入门）",
        "信息检索B",
        "哲学之思与诗词之美",
        "国际商贸英语基础",
        "城市与文化遗产（网络）",
        "思辨与创新（网络）",
        "日语初级（入门）",
        "日语初级（提高）",
        "朋辈心理辅导",
        "正念心理素质训练",
        "法语初级（提高）",
        "游泳",
        "现代人的教养",
        "秦陵：帝国与梦想（网络）",
        "管理学概论",
        "篮球",
        "网球",
        "羽毛球",
        "职场礼仪",
        "英语口语",
        "英语影视赏析",
        "西方哲学与人生",
        "西方哲学思想讨论",
        "西方工艺美术史",
        "解读英语词汇",
        "足球",
        "跨文化交际",
        "阅读与分享",
        "高级英语阅读Ⅱ",
        "大学生心理健康教育",
        "战争与谋略：第二次世界大战经典战役评析（网络）",
        "感悟考古（网络）"
    ],
    B: [
        "“非遗”之首——昆曲经典艺术欣赏（网络）",
        "中国戏曲剧种鉴赏（网络）",
        "中国民族民间音乐鉴赏",
        "中国近现代音乐简史",
        "中国陶瓷赏析",
        "书法",
        "交响乐鉴赏",
        "古筝演奏基础",
        "合唱基础",
        "听觉与视唱基础",
        "基础乐理",
        "基础手绘入门",
        "手风琴演奏基础",
        "摄影基础",
        "歌剧艺术鉴赏",
        "流行歌曲弹唱",
        "美术鉴赏",
        "舞蹈基础",
        "舞蹈鉴赏",
        "艺术导论",
        "艺术美学",
        "英语美文赏析",
        "西方音乐简史与经典作品赏析",
        "钢琴演奏基础"
    ],
    C: [
        "公共政策概论",
        "国家公务员制度",
        "绿色设计概论",
        "党史专题讲座（网络）",
        "管理学精要（网络）"
    ],
    D: [
        "3D打印——从梦想到现实",
        "MWORKS机械系统建模实践训练",
        "先进制造技术概论",
        "光子晶体技术进展",
        "光纤的世界",
        "光镊——研究微观世界的新手段",
        "创新方法（TRIZ）概论",
        "化学与社会",
        "基于MWORKS的多系统集成仿真实践入门",
        "奇异的仿生学",
        "探索机械创新",
        "数学零距离",
        "机器人设计及制作",
        "机械与文明",
        "材料与文明",
        "生命科学导论",
        "皇帝新脑",
        "计算方法B",
        "近代声学技术与现代生活",
        "近代物理学进展"
    ],
    E: [
        "军事运筹学",
        "声音与海洋探索",
        "极地探索",
        "海洋中国",
        "海洋开发中的热点水声问题概述",
        "海洋环境数值模拟与仿真",
        "现代水声技术与应用",
        "现代海洋技术概述",
        "科学问题求解方法在实际中的应用",
        "船舶动力装置概论",
        "走进海洋之三海一核"
    ],
    F: [
        "人工智能理论与创新实践",
        "创业运营演练",
        "创新和创业的理论与实践",
        "创新工程实践（网络）",
        "创新方法应用实战",
        "创践—大学生创新创业实务（网络）",
        "大学生KAB创业基础",
        "大学生劳动就业法律问题解读（网络）",
        "大学生科研能力训练",
        "影像应用与实践",
        "成功求职六步走（网络）",
        "文化创意产品设计与3D打印制作",
        "无碳小车的设计与制作",
        "智能制造AI实践",
        "智能控制无人船的创新制作",
        "机器人创意制作实践",
        "求职OMG——大学生就业指导与技能开发（网络）",
        "求职技能训练",
        "激光加工创意制作",
        "科技创新训练",
        "职业生涯规划与职场能力提升（网络）",
        "职熵——大学生职业素质与能力提升（网络）",
        "飞行器创新设计制作",
        "如何赢得大学生创新创业大赛（网络）",
        "做自己：大学生职业生涯发展（网络）",
        "创新创业基础（网络）",
    ],
}

data.append('querySetting', [{ "name": "KCXZDM", "caption": "课程性质", "linkOpt": "AND", "builderList": "cbl_String", "builder": "m_value_equal", "value": "4", "value_display": "公选" }, { "name": "*order", "value": "-XNXQDM,-KCH,-KXH", "linkOpt": "AND", "builder": "m_value_equal" }]);
data.append('*order', '-XNXQDM,-KCH,-KXH');
data.append('pageSize', '20');
data.append('pageNumber', '1');

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let kc = JSON
            .parse(xhr.responseText).datas.xscjcx.rows
            .filter(item => item.KCXZDM_DISPLAY === '公选' && item.SFJG_DISPLAY === '是')
            .map(item => {
                for (const key in class_dict) {
                    if (class_dict[key].includes(item.KCM)) {
                        return {
                            KCM: item.KCM,
                            KCLB: key,
                            XF: item.XF,
                        }
                    }
                }
            });
        console.log(kc);
        let table = document.createElement('table');
        table.style.border = '1px solid black';
        table.style.borderCollapse = 'collapse';
        table.style.position = 'fixed';
        table.style.top = '70px';
        table.style.right = '300px';
        table.style.zIndex = '9999';
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        let headerRow = document.createElement('tr');
        ['课程名称', '课程类别 ', '学分'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            th.style.border = '1px solid black';
            th.style.padding = '0 5px';
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        kc.forEach(course => {
            let row = document.createElement('tr');
            ['KCM', 'KCLB', 'XF'].forEach(key => {
                let cell = document.createElement('td');
                cell.textContent = course[key];
                cell.style.border = '1px solid black';
                cell.style.padding = '0 5px';
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        document.body.appendChild(table);
    }
};

xhr.send(data);
