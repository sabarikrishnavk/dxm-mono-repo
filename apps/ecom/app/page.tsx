import { RenderPage } from "dxm-ui-component";
import { Metadata, ResolvingMetadata } from 'next';
import { CMSPage, getCMSPage } from 'dxm-cms';


// export const metadata: Metadata = { 'title': 'Home Page', 'description': 'Home Page desc' };

type Props = {
  params: { id: string };
  pageUrl: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

async function generateMetadata(
  { pageUrl }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {

  const resPage: CMSPage = await getCMSPage('/liquorland/home');
  return {
    title: resPage.title
  };
}

export default async function Page() {
  const cmsPage: CMSPage = await getCMSPage('/liquorland/home');
  const tenant = "site1";
  return (

    <>
      <br />
      <a href="/product/2587160"> Product -  2587160</a>
      <br />
      <div className="boxShadowColor">
        <RenderPage tenant={tenant} cmsPage={cmsPage} />
      </div>
    </>
  );
}  
