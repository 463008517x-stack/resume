/**
 * 简历数据 —— 中英双语
 *
 * ⚠️ 修改这个文件即可更新整个网站的内容
 * 所有图片放在 public/images/ 下，路径以 / 开头（不要写 /resume/ 前缀，构建时会自动加）
 */

export interface BilingualText {
  zh: string;
  en: string;
}

export interface BilingualArray {
  zh: string[];
  en: string[];
}

export interface Skill {
  category: BilingualText;
  items: string[];
}

export interface Experience {
  company: BilingualText;
  position: BilingualText;
  period: BilingualText;
  location: BilingualText;
  description: BilingualArray;
  tech?: string[];
  logo?: string;
}

export interface Project {
  title: BilingualText;
  description: BilingualText;
  cover: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface EducationItem {
  school: BilingualText;
  degree: BilingualText;
  period: BilingualText;
  description?: BilingualText;
}

export const RESUME = {
  hero: {
    name: { zh: '冯悦升', en: 'Yuesheng Feng' },
    role: {
      zh: '大客户销售 / 本地生活BD',
      en: 'Key Account Sales / Local Services BD',
    },
    slogan: {
      zh: '电话：17858400582 | 邮箱：17858400582@163.com | 杭州 | 2003.03 | 男',
      en: 'Phone: 17858400582 | Email: 17858400582@163.com | Hangzhou | 2003.03 | Male',
    },
    intro: {
      zh: '中国计量大学公共事业管理本科，浙江工商大学管理学硕士在读。民族：汉族，政治面貌：共青团员。拥有大客户销售、商务谈判、达人运营、品牌账号操盘、直播运营等复合经验，擅长数据分析与AI工具提效。',
      en: 'B.A. in Public Administration from China Jiliang University, M.Sc. in Management from Zhejiang Gongshang University. Han ethnicity, CYLC member. Experienced in key account sales, business negotiation, KOL operations, brand account management, and live streaming, with strong data analysis and AI tooling skills.',
    },
    avatar: '/images/avatar.jpg',
    location: { zh: '中国 · 杭州', en: 'Hangzhou, China' },
    status: { zh: '开放新机会', en: 'Open to opportunities' },
  },

  about: {
    paragraphs: [
      {
        zh: '你好 👋 我是冯悦升，目前是浙江工商大学管理学硕士在读。我的职业方向聚焦于大客户销售与本地生活BD领域，拥有从销售一线到市场运营的复合实战经验。',
        en: "Hi 👋 I'm Yuesheng Feng, currently pursuing a Master's in Management at Zhejiang Gongshang University. My career focuses on key account sales and local services BD, with hands-on experience spanning from front-line sales to marketing operations.",
      },
      {
        zh: '在过去的实践中，我深度参与了达人合作、品牌账号从0到1搭建、直播运营、商务谈判等多维度工作，善于用数据分析驱动决策，用AI工具提升效率。',
        en: 'Through my past experiences, I have been deeply involved in KOL partnerships, building brand accounts from scratch, live streaming operations, and business negotiations. I excel at data-driven decision making and leveraging AI tools to boost efficiency.',
      },
    ],
    tags: [
      { zh: '🇨🇳 杭州', en: '🇨🇳 Hangzhou' },
      { zh: '🟢 开放新机会', en: '🟢 Open to work' },
      { zh: '📊 销售 · BD · 运营', en: '📊 Sales · BD · Operations' },
    ],
  },

  skills: [
    {
      category: { zh: '商务能力', en: 'Business Skills' },
      items: ['大客户开发', '商务谈判', '客户关系管理', '提案制作', '招投标', '跨部门协作'],
    },
    {
      category: { zh: '数据分析', en: 'Data Analysis' },
      items: ['完播率/互动率/转化率分析', 'Excel', 'SPSS', 'Stata'],
    },
    {
      category: { zh: '数字营销', en: 'Digital Marketing' },
      items: ['全案营销策略制定', '达人/KOL合作管理', '品牌账号运营', '直播链路操盘'],
    },
    {
      category: { zh: 'AI工具', en: 'AI Tools' },
      items: ['剪映AI', '即梦', 'Midjourney', 'Claude', 'Kimi', 'Cursor', 'Claude Code'],
    },
    {
      category: { zh: '办公工具', en: 'Office Tools' },
      items: ['PPT', 'Excel', 'Word', 'JIRA', '飞书多维表格'],
    },
    {
      category: { zh: '语言证书', en: 'Language & Certificates' },
      items: ['CET-4', 'CET-6', 'MS Office 二级', 'C1驾照'],
    },
  ] satisfies Skill[],

  experience: [
    {
      company: { zh: '不鸣(杭州)科技有限公司', en: 'Buming (Hangzhou) Technology Co., Ltd.' },
      position: { zh: '市场PM', en: 'Marketing PM' },
      period: { zh: '2026.04 - 至今', en: 'Apr 2026 - Present' },
      location: { zh: '杭州', en: 'Hangzhou' },
      description: {
        zh: [
          '商务合作拓展：独立筛选、谈判 30+ 位腰部达人合作，决策链覆盖 MCN → 达人 → 公司三方，产出素材 20+ 条，累计播放 500万+，整体 CPM 控制在 100 元左右，较头部主播打法节省预算 60%+',
          '数据分析：基于完播率、互动率、评论关键词三维数据建立达人 A/B 测试机制，优质达人复用率 70%+；输出 3 份复盘 SOP 反哺下一轮投放策略',
          '客户关系运营：每周收集玩家诉求 50+ 条，通过 JIRA 推动 20+ 工单闭环处理，平均响应时长 <24h，激活沉睡用户回流 15%+，社群 NPS 显著提升',
          '跨部门协作：作为市场组与 5+ 个战区 PO 的对接窗口，在 JIRA + 飞书多维表格中管理 50+ 子任务，主动识别并解决项目卡点 10+ 个，90%+ 卡点 48h 内闭环',
        ],
        en: [
          'Business cooperation: Independently screened and negotiated with 30+ mid-tier KOLs, managing the MCN → KOL → Company三方 decision chain; produced 20+ content pieces with 5M+ total views; controlled CPM around 100 yuan, saving 60%+ budget compared to top streamer strategies',
          'Data analysis: Established KOL A/B testing mechanism based on completion rate, interaction rate, and comment keywords; achieved 70%+ quality KOL reuse rate; delivered 3 review SOPs to inform the next投放 cycle',
          'Customer relationship operations: Collected 50+ player feedback items weekly; drove 20+ JIRA tickets to closure with <24h average response time; reactivated 15%+ dormant users; significantly improved community NPS',
          'Cross-department collaboration: Served as the liaison between the marketing team and 5+战区 POs; managed 50+ subtasks in JIRA + Feishu spreadsheets; proactively identified and resolved 10+ project bottlenecks, with 90%+ resolved within 48h',
        ],
      },
      tech: ['KOL运营', '数据分析', 'JIRA', '飞书多维表格', '达人合作'],
    },
    {
      company: { zh: '艾普力（杭州）品牌管理有限公司', en: 'Aipuli (Hangzhou) Brand Management Co., Ltd.' },
      position: { zh: '大客户运营', en: 'Key Account Operations' },
      period: { zh: '2026.01 - 2026.04', en: 'Jan 2026 - Apr 2026' },
      location: { zh: '杭州', en: 'Hangzhou' },
      description: {
        zh: [
          '品牌账号操盘：从 0 到 1 独立搭建品牌账号矩阵，系统拆解 30+ 对标账号爆款逻辑，提炼内容选题矩阵与文案结构模板；基于分析结论指导日常内容生产，账号自然增粉 10%，核心视频完播率高于行业均值',
          '建立 AI 辅助剪辑 SOP，效率提升 75%：运用剪映 AI 完成品牌短视频二次创作，日均产出高质量内容 3 条；将单条视频制作周期从 2 小时压缩至 30 分钟。配合即梦、Midjourney 生成图文素材，塑造差异化账号视觉风格',
          '直播运营：完整直播链路操盘 + 场控管理，负责品牌直播运营及场控管理，直播间平均在线人数提升 15%；具备从脚本策划到上播执行的完整直播链路操盘经验',
        ],
        en: [
          'Brand account management: Independently built brand account matrix from scratch; systematically analyzed 30+ benchmark accounts for viral content patterns; developed content topic matrix and copywriting templates; grew organic followers by 10%, with core video completion rates above industry average',
          'Established AI-assisted editing SOP, improving efficiency by 75%: Used Jianying AI for short video二次创作, producing 3 high-quality content pieces daily; reduced single video production cycle from 2 hours to 30 minutes. Used Jimeng and Midjourney to generate graphic assets, creating a distinctive account visual style',
          'Live streaming operations: Full live streaming链路 management and floor control; managed brand live streaming operations, increasing average online viewers by 15%; experienced in the complete live streaming chain from script planning to on-air execution',
        ],
      },
      tech: ['品牌运营', '剪映AI', '即梦', 'Midjourney', '直播运营'],
    },
    {
      company: { zh: '浙江华企信息科技有限公司', en: 'Zhejiang Huaqi Information Technology Co., Ltd.' },
      position: { zh: '大客户销售', en: 'Key Account Sales' },
      period: { zh: '2025.11 - 2026.01', en: 'Nov 2025 - Jan 2026' },
      location: { zh: '杭州', en: 'Hangzhou' },
      description: {
        zh: [
          '客户开发与精准触达：基于目标客户名单主动开拓企业客户，日均拨打200+通，建立结构化客户跟进台账，系统管理从触达到签约的完整销售链路',
          '商务谈判与签约落地：全程主导客户谈判，任职期间成功推动2笔订单签约，合计签约金额18W+，并累计线下拜访客户20+次，有效提升公司产品市场渗透率',
          '客户关系建立与维护：深度挖掘客户需求，匹配产品解决方案，通过高频跟进与精准提案，建立稳定客户信任关系，推动订单从意向到落地的全周期管理',
        ],
        en: [
          'Client development and精准 outreach: Proactively developed enterprise clients based on target lists, averaging 200+ daily calls; established structured client follow-up records, systematically managing the complete sales chain from outreach to contract signing',
          'Business negotiation and deal closure: Led client negotiations end-to-end; successfully closed 2 deals totaling 180,000+ RMB; conducted 20+ offline client visits, effectively increasing product market penetration',
          'Client relationship building and maintenance: Deeply explored client needs, matched product solutions; through high-frequency follow-up and精准 proposals, built stable client trust and managed the full cycle from intent to deal closure',
        ],
      },
      tech: ['大客户开发', '商务谈判', '客户关系管理', '销售链路管理'],
    },
    {
      company: { zh: '浙非服务中心', en: 'Zhejiang-Africa Service Center' },
      position: { zh: '总经理助理兼贸易实习生', en: 'General Manager Assistant & Trade Intern' },
      period: { zh: '2025.07 - 2025.10', en: 'Jul 2025 - Oct 2025' },
      location: { zh: '杭州', en: 'Hangzhou' },
      description: {
        zh: [
          '统筹总经理日程体系，精准协调内外部约见与商务差旅，保障 10+ 次行程零失误',
          '全程参与策划执行第四届全球数字贸易博览会，协调 30+ 家参展单位对接，完成展位搭建、嘉宾邀约及现场管控',
          '参与 4+ 次招投标项目，负责文件编制、资质审核及合规跟进；配合总经理完成 6 场商务接待，助力 2 项战略合作签约',
        ],
        en: [
          'Coordinated the general manager\'s scheduling system, precisely managing internal and external appointments and business travel, ensuring 10+ trips with zero errors',
          'Participated in planning and executing the 4th Global Digital Trade Expo, coordinating with 30+ exhibitors, managing booth setup, guest invitations, and on-site control',
          'Participated in 4+ bidding projects, responsible for document preparation, qualification review, and compliance follow-up; assisted the GM with 6 business receptions, facilitating 2 strategic partnership signings',
        ],
      },
      tech: ['日程管理', '活动策划', '招投标', '商务接待'],
    },
    {
      company: { zh: '极氪智能科技（杭州）有限公司', en: 'Zeekr Intelligent Technology (Hangzhou) Co., Ltd.' },
      position: { zh: 'HRBP', en: 'HRBP' },
      period: { zh: '2025.01 - 2025.06', en: 'Jan 2025 - Jun 2025' },
      location: { zh: '杭州', en: 'Hangzhou' },
      description: {
        zh: [
          '业务接触：新能源高端汽车销售一线（一线销售/门店市场/直播顾问/城市市场）',
          '销售一线洞察：深度理解高客单 To C 决策路径，直接接触极氪目标用户，深度理解新能源高端用户决策路径、核心痛点与产品关注优先级，沉淀高客单产品销售认知',
          '日均 12+ 通沟通 + 月均 20+ offer：负责浙南战区一线销售/门店市场/直播顾问/交付岗位招聘全流程（邀约面试 → 谈薪 → 发offer），高强度多线程任务处理',
          '渠道拓展：20 天搭建 3W+ 潜在客户的营销渠道网络，通过精细化市场开发策略 + 高效渠道洽谈 + 定向攻关，10 天内实现 300+ 页面浏览量，转化 30+ 精准目标用户',
        ],
        en: [
          'Business exposure: Worked on the front line of new energy premium automotive sales (front-line sales/store marketing/live streaming consultant/city marketing)',
          'Sales frontline insights: Deeply understood high-ticket B2C decision-making paths; directly engaged with Zeekr target users, understanding premium new energy user decision paths, core pain points, and product priorities; accumulated high-ticket product sales expertise',
          'Averaged 12+ daily communications + 20+ monthly offers: Responsible for the full recruitment cycle for浙南战区 frontline sales/store marketing/live streaming consultant/delivery roles (interview invitation → salary negotiation → offer), handling high-intensity multi-threaded tasks',
          'Channel development: Built a marketing channel network of 30,000+ potential customers in 20 days; through refined market development strategies + efficient channel negotiation + targeted攻克, achieved 300+ page views within 10 days, converting 30+精准 target users',
        ],
      },
      tech: ['招聘全流程', '渠道拓展', '高客单销售', '多线程管理'],
    },
    {
      company: { zh: '至本起源（北京）网络科技有限公司', en: 'Zhiben Qiyuan (Beijing) Network Technology Co., Ltd.' },
      position: { zh: '市场经理', en: 'Marketing Manager' },
      period: { zh: '2024.01 - 2024.07', en: 'Jan 2024 - Jul 2024' },
      location: { zh: '北京/广州/烟台', en: 'Beijing/Guangzhou/Yantai' },
      description: {
        zh: [
          '负责市场部门人员招聘、培训及带教，成功组建高效团队，新员工入职适应期缩短 30%',
          '独立运营品牌账号，深度拆解对标账号内容策略与传播路径，粉丝增长率 20%，互动率提升 15%',
          '在广州、烟台等地搭建办公室，完成人员冷启动，制定规章制度，工作效率提升 25%',
        ],
        en: [
          'Responsible for marketing department recruitment, training, and mentoring; successfully built a high-efficiency team, reducing new employee onboarding adaptation period by 30%',
          'Independently operated brand accounts, deeply analyzing competitor content strategies and distribution paths; achieved 20% follower growth rate and 15% interaction rate improvement',
          'Set up offices in Guangzhou, Yantai and other locations, completed team冷启动, established policies and procedures, improving work efficiency by 25%',
        ],
      },
      tech: ['团队管理', '品牌运营', '内容策略', '办公室搭建'],
    },
    {
      company: { zh: '北京快手科技有限公司', en: 'Beijing Kuaishou Technology Co., Ltd.' },
      position: { zh: '线上PR', en: 'Online PR' },
      period: { zh: '2023.09 - 2023.12', en: 'Sep 2023 - Dec 2023' },
      location: { zh: '北京', en: 'Beijing' },
      description: {
        zh: [
          '负责跨平台颜值赛道达人资源拓展，系统筛选抖音、小红书等平台 1W+ 粉丝量级优质内容创作者',
          '累计主动触达博主 100+，成功邀约入驻快手 30+，转化率达 60%，有效充实平台颜值垂类内容生态',
        ],
        en: [
          'Responsible for cross-platform beauty/lifestyle KOL resource expansion, systematically screening 10,000+ follower quality content creators on Douyin, Xiaohongshu and other platforms',
          'Proactively reached out to 100+ bloggers, successfully invited 30+ to join Kuaishou with a 60% conversion rate, effectively enriching the platform\'s beauty vertical content ecosystem',
        ],
      },
      tech: ['达人拓展', '跨平台运营', '内容生态建设'],
    },
    {
      company: { zh: '小米科技有限责任公司', en: 'Xiaomi Technology Co., Ltd.' },
      position: { zh: '销售顾问', en: 'Sales Consultant' },
      period: { zh: '2023.06 - 2023.09', en: 'Jun 2023 - Sep 2023' },
      location: { zh: '杭州', en: 'Hangzhou' },
      description: {
        zh: [
          '负责接待客户，提供小米手机及相关配件产品的专业咨询，有效提升了顾客满意度',
          '深入学习并熟练掌握小米科技的产品特性及优势，累积销售10+',
        ],
        en: [
          'Responsible for receiving customers and providing professional consultation on Xiaomi phones and related accessories, effectively improving customer satisfaction',
          'Deeply studied and mastered Xiaomi product features and advantages, achieving cumulative sales of 10+',
        ],
      },
      tech: ['销售咨询', '产品知识', '客户服务'],
    },
  ] satisfies Experience[],

  projects: [
    {
      title: { zh: '本地生活赛道研究', en: 'Local Services Industry Research' },
      description: {
        zh: '基于对KA销售岗的职业兴趣，系统研究本地生活赛道的格局演变与品牌经营路径。拆解美团 vs 抖音本地生活双雄格局，分析履约、核销率、复购等核心指标差异；梳理5+标杆品牌的双平台经营策略；输出研究笔记，覆盖广告/交易/内容/数据4类产品组合。形成可复用的品牌全域经营诊断框架。',
        en: 'Systematic research on the local services industry landscape and brand management paths. Analyzed the Meituan vs Douyin local services duopoly, comparing core metrics including fulfillment, redemption rates, and repurchase behavior; studied 5+ benchmark brands\' dual-platform strategies; produced research notes covering advertising, transactions, content, and data product portfolios. Developed a reusable brand holistic management diagnostic framework.',
      },
      cover: '/images/projects/project-1.jpg',
      tags: ['行业研究', '竞品分析', '本地生活', '美团', '抖音'],
      featured: true,
    },
    {
      title: { zh: '市场化推进土地资源整治（浙江省自然资源厅重点项目）', en: 'Market-Based Land Resource Consolidation (Zhejiang Provincial Key Project)' },
      description: {
        zh: '通过市场化手段推进浙江省土地资源整治，破解土地利用效率低下、资源配置不合理的问题。拆解全国市场化试点案例8+个，输出市场化分析报告3份；实地调研试点项目5+个，收集量化数据并提炼关键经营指标；组织专家研讨会2场，协调10+位专家与参会单位对接。提交建议被浙江省自然资源厅采纳，试点区域土地利用率提升约20%。',
        en: 'Advanced land resource consolidation in Zhejiang Province through market-based approaches. Analyzed 8+ national market-based pilot cases, producing 3 marketization analysis reports; conducted field research on 5+ pilot projects, collecting quantitative data and extracting key management indicators; organized 2 expert seminars, coordinating 10+ experts and participating units. Recommendations adopted by Zhejiang Provincial Department of Natural Resources, with pilot area land utilization rate improving by approximately 20%.',
      },
      cover: '/images/projects/project-2.jpg',
      tags: ['政策研究', '数据分析', '项目管理', '实地调研'],
      featured: true,
    },
  ] as Project[],

  education: [
    {
      school: { zh: '浙江工商大学', en: 'Zhejiang Gongshang University' },
      degree: { zh: '管理学 · 硕士', en: 'M.Sc. in Management' },
      period: { zh: '2025.09 - 2027.12', en: 'Sep 2025 - Dec 2027' },
      description: {
        zh: '在读',
        en: 'In progress',
      },
    },
    {
      school: { zh: '中国计量大学', en: 'China Jiliang University' },
      degree: { zh: '公共事业管理 · 本科', en: 'B.A. in Public Administration' },
      period: { zh: '2021.09 - 2025.06', en: 'Sep 2021 - Jun 2025' },
    },
  ] satisfies EducationItem[],

  contact: {
    email: '17858400582@163.com',
    description: {
      zh: '欢迎邮件联系，无论是合作机会、技术交流还是简单聊聊。我会在 24 小时内回复。',
      en: "Feel free to reach out via email — for opportunities, tech chats, or just to say hi. I'll reply within 24 hours.",
    },
  },
};
