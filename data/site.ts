/**
 * ============================================================
 *  全站内容都在这个文件里。改完保存，整站跟着更新。
 *  带 【】 的都是占位符，替换成你自己的即可。
 * ============================================================
 */

export const site = {
  /** 导航左上角反色块里显示的域名 / 标识 */
  siteName: "yourname.io",
  /** 部署后的正式域名，用于 RSS 和分享卡片 */
  domain: "https://yourname.io",

  name: "Your Name",
  nameZh: "你的名字",
  role: "PhD Student @ Your University",

  /** 简介段落，可以写多段 */
  bio: [
    "I am a 【PhD student / researcher】 at 【Your University】, working on 【研究方向，例如 data visualization and human-computer interaction】. My research focuses on 【具体问题，例如 how to make large-scale spatiotemporal data readable and trustworthy】.",
    "Previously I received my 【B.Sc. / M.Sc.】 in 【专业】 from 【学校】, where I worked with 【导师姓名】 on 【课题】. I am broadly interested in 【兴趣一】, 【兴趣二】 and 【兴趣三】.",
  ],

  /** 左侧联系方式。不写 href 的就是纯文本 */
  contacts: [
    {
      label: "Email",
      value: "you[at]example.com",
      href: "mailto:you@example.com",
    },
    { label: "Github", value: "@yourhandle", href: "https://github.com/" },
    {
      label: "Scholar",
      value: "Google Scholar",
      href: "https://scholar.google.com/",
    },
    { label: "X", value: "@yourhandle", href: "https://x.com/" },
    { label: "Location", value: "City, China" },
  ],

  /** 头像，替换 public/profile.svg 即可 */
  avatar: "/profile.svg",
};

/* ------------------------------------------------------------ */
/*  论文发表                                                     */
/* ------------------------------------------------------------ */

export type Publication = {
  /** 会议 / 期刊全称，显示为等宽小字 */
  venue: string;
  /** 排在你前面的作者 */
  authorsBefore?: string[];
  /** 你之后的作者 */
  authorsAfter?: string[];
  title: string;
  /** 一句话摘要 */
  summary: string;
  links: { label: string; href: string }[];
  /** 是否在首页重点展示 */
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    venue: "IEEE Conference on Visualization (VIS) 2025",
    authorsBefore: ["A. Coauthor", "B. Coauthor"],
    authorsAfter: ["C. Coauthor", "D. Advisor"],
    title:
      "Placeholder Paper Title About Reliable Visualization of Large-Scale Data",
    summary:
      "一句话说明你解决了什么问题、用了什么方法、结果如何。【替换成真实摘要】",
    links: [
      { label: "Publisher", href: "#" },
      { label: "arXiv", href: "#" },
      { label: "Code", href: "#" },
    ],
    featured: true,
  },
  {
    venue: "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI) 2024",
    authorsBefore: ["A. Coauthor"],
    authorsAfter: ["B. Advisor"],
    title: "Placeholder Paper Title on Interactive Visual Analytics",
    summary: "一句话说明研究贡献。【替换成真实摘要】",
    links: [
      { label: "Publisher", href: "#" },
      { label: "arXiv", href: "#" },
    ],
    featured: true,
  },
  {
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG) 2023",
    authorsBefore: ["A. Coauthor", "B. Coauthor"],
    authorsAfter: ["C. Advisor"],
    title: "Placeholder Journal Article Title",
    summary: "一句话说明研究贡献。【替换成真实摘要】",
    links: [
      { label: "Publisher", href: "#" },
      { label: "Website", href: "#" },
      { label: "Video", href: "#" },
    ],
    featured: true,
  },
  {
    venue: "Eurographics Conference on Visualization (EuroVis) 2022",
    authorsBefore: ["A. Coauthor"],
    title: "Placeholder Paper Title from an Earlier Project",
    summary: "一句话说明研究贡献。【替换成真实摘要】",
    links: [{ label: "Publisher", href: "#" }],
  },
];

/* ------------------------------------------------------------ */
/*  项目                                                         */
/* ------------------------------------------------------------ */

export type Project = {
  year: string;
  name: string;
  summary: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    year: "2025",
    name: "【项目名称一】",
    summary:
      "一两句话说明这个项目做了什么、你负责什么、结果如何。可以是科研原型、开源工具或课程大作业。",
    tags: ["Visualization", "Python", "React"],
    links: [
      { label: "Code", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    year: "2024",
    name: "【项目名称二】",
    summary: "一两句话说明这个项目。【替换成真实描述】",
    tags: ["Machine Learning", "PyTorch"],
    links: [{ label: "Code", href: "#" }],
  },
  {
    year: "2023",
    name: "【项目名称三】",
    summary: "一两句话说明这个项目。【替换成真实描述】",
    tags: ["TypeScript", "Next.js"],
    links: [{ label: "Website", href: "#" }],
  },
];

/* ------------------------------------------------------------ */
/*  博客                                                         */
/* ------------------------------------------------------------ */

export type Post = {
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  /** 正文，用空行分段 */
  body: string[];
};

export const posts: Post[] = [
  {
    date: "2026-09-12",
    slug: "hello-world",
    title: "第一篇占位文章",
    excerpt: "这篇文章是用来测试博客列表和详情页样式的，可以直接删掉。",
    body: [
      "这是正文的第一段。原站的设计里正文用无衬线字体、行高 1.6、宽度限制在 54rem 以内，段落之间留 1.5rem 的间距。",
      "这是第二段。把 markdown 文件换成数组里的字符串即可，不需要任何框架知识。",
      "如果需要代码块，可以在 components 里加一个简单的 pre/code 组件。",
    ],
  },
  {
    date: "2026-08-03",
    slug: "reading-notes",
    title: "第二篇占位文章：读论文的笔记",
    excerpt: "说明一下你最近在读什么、有什么想法。",
    body: ["占位正文。替换成你的内容即可。", "再写一段。"],
  },
  {
    date: "2026-06-21",
    slug: "notes-on-tools",
    title: "第三篇占位文章：工具与工作流",
    excerpt: "记录你在用的工具链、配置、踩过的坑。",
    body: ["占位正文。替换成你的内容即可。"],
  },
];

/* ------------------------------------------------------------ */
/*  CV                                                           */
/* ------------------------------------------------------------ */

export const education = [
  {
    period: "2024 — Present",
    org: "【Your University】",
    detail: "Ph.D. in 【专业】 · Advisor: 【导师姓名】",
  },
  {
    period: "2020 — 2024",
    org: "【Your University】",
    detail: "B.Sc. in 【专业】",
  },
];

export const experience = [
  {
    period: "2025 Summer",
    org: "【Company / Lab】",
    detail: "Research Intern · 【做了什么】",
  },
  {
    period: "2023 — 2024",
    org: "【Lab / Group】",
    detail: "Research Assistant · 【做了什么】",
  },
];

export const awards = [
  { period: "2025", org: "【奖项名称】", detail: "【等级 / 说明】" },
  { period: "2024", org: "【奖学金名称】", detail: "【等级 / 说明】" },
];

export const services = [
  { period: "2025", org: "Reviewer", detail: "【会议 / 期刊名称】" },
  { period: "2024", org: "Student Volunteer", detail: "【会议名称】" },
];

/* ------------------------------------------------------------ */
/*  Life                                                         */
/* ------------------------------------------------------------ */

export const lifeIntro =
  "工作之外我喜欢【摄影、音乐、跑步……】。这里放一些随手拍的照片。";

/** 换成你自己的图片，放进 public/life/ 目录即可 */
export const lifePhotos: { src: string; caption: string }[] = [
  { src: "", caption: "【照片说明一】" },
  { src: "", caption: "【照片说明二】" },
  { src: "", caption: "【照片说明三】" },
  { src: "", caption: "【照片说明四】" },
  { src: "", caption: "【照片说明五】" },
  { src: "", caption: "【照片说明六】" },
];

/* ------------------------------------------------------------ */
/*  首页 News                                                    */
/* ------------------------------------------------------------ */

export const news: { date: string; text: string }[] = [
  { date: "2026.09", text: "【一条动态，例如：论文被 XX 会议接收】" },
  { date: "2026.06", text: "【一条动态，例如：开始在某公司实习】" },
  { date: "2026.03", text: "【一条动态，例如：获得某某奖学金】" },
];

/* ------------------------------------------------------------ */
/*  导航（顺序即显示顺序）                                        */
/* ------------------------------------------------------------ */

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Project" },
  { href: "/blog", label: "Blog" },
  { href: "/cv", label: "CV" },
  { href: "/life", label: "Life" },
];
