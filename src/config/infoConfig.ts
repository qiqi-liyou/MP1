export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Justin You'
export const headline = 'Student at Just.'
export const introduction =
  "I am a sophomore student at Jiangsu University of Science and Technology, currently majoring in Functional Materials. I am enthusiastic about exploring the fascinating world of materials science and its diverse applications.."
export const email = '1655746006a@gmail.com'
export const githubUsername = 'qiqi-liyou'

// about page
export const aboutMeHeadline = 'Who I am and what I am focusing on.'
export const aboutParagraphs = [
  "Hello! My name is Justin You. I come from Suzhou, Jiangsu, and I'm a sophomore student majoring in Functional Materials at Jiangsu University of Science and Technology.",
  'Currently, I am learning about materials science and actively participating in research projects, while also following cutting-edge technological developments such as artificial intelligence.',
  "The purpose of creating this website is to document my university life and share my insights on events, primarily related to the practical applications of artificial intelligence. Additionally, I have a strong interest in sociology books and will periodically upload my reading notes to the blog.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/MS4wLjABAAAADllrOq7S41xC5ty03sBvXVqVstBOU1fuk6xZtaAKycg?from_tab_name=main',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/281029655',
  },

]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
