import { RenderPage } from "dxm-ui-component";
import { Metadata, ResolvingMetadata } from 'next';
import { CMSPage, getCMSPage } from 'dxm-cms';
import { getTheme, getTenant } from 'dxm-util';


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

  const resPage: CMSPage = await getCMSPage('/home');
  return {
    title: resPage.title
  };
}

export default async function Page() {
  const cmsPage: CMSPage = await getCMSPage('/home');
  const tenant = getTenant();
  const theme = getTheme();
  return (

    <>

      <div className="sm:m-6 space-y-6">
        <div className={`${tenant ? `${theme}` : 'theme-default'}`}>
          <div className=" relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
            <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">

              <RenderPage tenant={tenant} cmsPage={cmsPage} />

            </div>
          </div>
        </div>
      </div >

    </>
  );
}  
