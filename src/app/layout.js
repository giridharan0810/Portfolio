import "./globals.css";

export const metadata = {
  title: "Giridharan S | Full Stack Developer (React, Next.js, Node.js, SQL Server)",
  description: "Portfolio of Giridharan S - Full Stack Developer with 2 years of experience building enterprise CRMs, ERPs, REST APIs, and modern responsive web applications.",
  keywords: [
    "Giridharan S",
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "SQL Server",
    "TypeScript",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Giridharan S" }],
  creator: "Giridharan S",
  openGraph: {
    title: "Giridharan S | Full Stack Developer",
    description: "Full Stack Developer with 2 years of experience developing web applications using React.js, JavaScript, Node.js, Express.js and SQL Server.",
    url: "https://portfolio-h9rf.vercel.app/",
    siteName: "Giridharan S Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans antialiased bg-[#050814] text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
