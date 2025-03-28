import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Christoffert Moussounda is a Technical Lead & Full Stack Developer building robust web applications with React and Node.js"
      />
      <meta
        name="keywords"
        content="Christoffert Moussounda, Technical Lead, Full Stack Developer, React, Node.js, TypeScript, JavaScript, Software Engineer, Congo, Pointe-Noire, Ginov"
      />
      <meta
        property="og:title"
        content="Christoffert Moussounda - Full Stack Developer"
      />
      <meta
        property="og:description"
        content="A passionate Full Stack Developer building modern web applications that deliver exceptional user experiences"
      />
      <meta property="og:image" content="/images/chrisoffert-moussounda.jpg" />
      <meta property="og:url" content="https://chrismoussounda.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Christoffert Moussounda',
};
