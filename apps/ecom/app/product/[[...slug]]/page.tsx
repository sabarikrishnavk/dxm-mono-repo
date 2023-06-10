import { saveInCache, getCache } from "dxm-util";
import { Metadata, ResolvingMetadata } from 'next';
import { getTheme, getTenant } from 'dxm-util';

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
  return {
    title: product.name
  };
}

export default async function Page({ params, searchParams }: Props) {
  const tenant = getTenant();
  const theme = getTheme();
  const id = params.slug;//'2587160';  
  const product = await getData(id);
  console.log('product : ' + product.name);
  return (
    <>

      <div className="sm:m-6 space-y-6">
        <div className={`${tenant ? `${theme}` : 'theme-default'}`}>
          <div className=" relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
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
