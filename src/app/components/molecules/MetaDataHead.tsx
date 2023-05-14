import Head from 'next/head';

const MetaDataHead = ({
  title = 'nsm-dev-conf',
  description,
  url,
  image,
}: MetaDataHeadProps) => {
  return (
    <Head>
      <title>{title || 'nsm-dev-conf'}</title>
      <meta
        name="description"
        content={description || 'NSM CODE-REIVEW 컨테스트'}
      />
      <meta property="og:title" content={title || 'nsm-dev-conf'} />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={url || 'localhost:3000'} />
      <meta property="og:image" content={'/images/seo_image.png'} />
    </Head>
  );
};

export default MetaDataHead;
