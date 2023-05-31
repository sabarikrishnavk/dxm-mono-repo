
import { saveInCache, getCache } from "dxm-util";
import { Metadata, ResolvingMetadata } from 'next';
import { CMSPage, getCMSPage } from 'dxm-cms';

type Props = {
  params: { id: string, slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const env = process.env;

async function getData(id: string) {
  const key = "product-" + id;
  const response = await getCache(key);

  if (response) {
    return response;
  } else {
    let productjson = await fetch(env.NEXT_PUBLIC_HOSTED_URL + '/product-' + id + '.json').then(res => res.json());
    let product = productjson.product;
    await saveInCache(key, product, 5);
    return product;
  }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {

  const id = params.slug;//'2587160';
  const product = await getData(id);
  const resPage: CMSPage = await getCMSPage('/liquorland/home');
  // const pagejson = getEntryByUrl('ecom_marketing_page', '/liquorland/home', '', null);
  return {
    title: product.name
  };
}

export default async function Page({ params, searchParams }: Props) {

  const env = process.env;
  const tenant = env.NEXT_PUBLIC_TENANT;
  const theme = 'theme-' + tenant;
  const id = params.slug;//'2587160';  
  const product = await getData(id);
  console.log('product : ' + product.name);
  return (
    <>

      <div className="sm:m-6 space-y-6">
        <div className={`${tenant ? `${theme}` : 'theme-default'}`}>
          <div className=" relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
            <img className="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
            <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
            <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
                <span className="block">Product Details</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-skin-muted">
                {product.name}</p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  {product.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
