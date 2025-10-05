import { PrismaClient } from "../../generated/prisma";



export const prisma = new PrismaClient()

// const PORTFOLIO_DATA = {
//   about: {
//     title: "Full Stack Developer",
//     description: `I’m Nahida, a passionate Full Stack Developer with expertise in MERN stack and modern web technologies. I specialize in building efficient, user-friendly, and SEO-friendly applications using React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, Prisma, and PostgreSQL.

// I enjoy taking on new challenges, exploring emerging frameworks and libraries, and transforming ideas into innovative digital experiences.`,
//     stats: [
//       { label: "Finished Projects", value: "12+" },
//       { label: "Happy Clients", value: "2+" },
//       { label: "Experience", value: "1+ Year" },
//     ],
//     skills: [
//       {
//         title: "Frontend",
//         icon: "/assets/fontend1.png",
//         skills: [
//           { skill: "HTML5", icon: "https://img.icons8.com/color/48/html-5.png" },
//           { skill: "CSS3", icon: "https://img.icons8.com/color/48/css3.png" },
//           { skill: "JavaScript", icon: "https://img.icons8.com/color/48/javascript.png" },
//           { skill: "React.js", icon: "https://img.icons8.com/plasticine/48/react.png" },
//           { skill: "Shadcn UI", icon: "https://img.icons8.com/color/48/web-design.png" },
//           { skill: "Tailwind CSS", icon: "https://img.icons8.com/color/48/tailwindcss.png" },
//           { skill: "Material UI", icon: "https://img.icons8.com/color/48/material-ui.png" },
//         ],
//       },
//       {
//         title: "Backend",
//         icon: "/assets/fontend3.png",
//         skills: [
//           { skill: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
//           { skill: "Express.js", icon: "https://img.icons8.com/ios/50/express-js.png" },
//           { skill: "Next.js", icon: "https://img.icons8.com/color/48/nextjs.png" },
//           { skill: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
//           { skill: "Mongoose", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-mongoose.png" },
//           { skill: "Prisma", icon: "https://img.icons8.com/color/48/prisma-orm.png" },
//           { skill: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" },
//         ],
//       },
//       {
//         title: "Tools",
//         icon: "/assets/fontend2.webp",
//         skills: [
//           { skill: "Git & GitHub", icon: "https://img.icons8.com/ios-filled/50/github.png" },
//           { skill: "Visual Studio Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
//           { skill: "Firebase", icon: "https://img.icons8.com/color/48/firebase.png" },
//           { skill: "Vercel", icon: "https://img.icons8.com/ios/50/vercel.png" },
//         ],
//       },
//       {
//         title: "WordPress",
//         icon: "/assets/fontend4.png",
//         skills: [
//           { skill: "Elementor", icon: "https://img.icons8.com/color/48/wordpress.png" },
//           { skill: "E-commerce", icon: "https://img.icons8.com/color/48/shopping-cart.png" },
//           { skill: "Divi Builder", icon: "https://img.icons8.com/color/48/web.png" },
//           { skill: "Bug Fixing", icon: "https://img.icons8.com/color/48/bug.png" },
//           { skill: "WP Bakery", icon: "https://img.icons8.com/color/48/wordpress.png" },
//         ],
//       },
//     ],
//   },
// };

// async function main() {
//   await prisma.about.create({
//     data: {
//       title: PORTFOLIO_DATA.about.title,
//       description: PORTFOLIO_DATA.about.description,
//       stats: {
//         create: PORTFOLIO_DATA.about.stats,
//       },
//       skills: {
//         create: PORTFOLIO_DATA.about.skills.map((cat) => ({
//           title: cat.title,
//           icon: cat.icon,
//           skills: {
//             create: cat.skills,
//           },
//         })),
//       },
//     },
//   });
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//     console.log("✅ Portfolio data inserted!");
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });