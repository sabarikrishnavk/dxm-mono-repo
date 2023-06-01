import * as contentstack from 'contentstack';
import * as Utils from '@contentstack/utils';
import { CMSPage } from '../model/content-types/page.model';
import { getTenant } from 'dxm-util';

import ContentstackLivePreview from '@contentstack/live-preview-utils';

const envConfig = process.env;

const Stack = contentstack.Stack({
    api_key: envConfig.CONTENTSTACK_API_KEY
        ? envConfig.CONTENTSTACK_API_KEY
        : envConfig.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
    delivery_token: envConfig.CONTENTSTACK_DELIVERY_TOKEN,
    environment: envConfig.CONTENTSTACK_ENVIRONMENT,
    live_preview: {
        enable: envConfig.CONTENTSTACK_LIVE_PREVIEW === 'true' || true,
        management_token: envConfig.CONTENTSTACK_MANAGEMENT_TOKEN,
        host: envConfig.CONTENTSTACK_API_HOST,
    },
});


if (envConfig.CONTENTSTACK_API_HOST) {
    Stack.setHost(envConfig.CONTENTSTACK_API_HOST);
}

ContentstackLivePreview.init({
    //@ts-ignore
    stackSdk: Stack,
    clientUrlParams: {
        host: envConfig.CONTENTSTACK_APP_HOST,
    },
    stackDetails: {
        apiKey: envConfig.CONTENTSTACK_API_KEY,
        environment: envConfig.CONTENTSTACK_ENVIRONMENT,
    },
    ssr: false,
});

export const { onEntryChange } = ContentstackLivePreview;
type GetEntry = {
    contentTypeUid: string;
    referenceFieldPath: string[] | undefined;
    jsonRtePath: string[] | undefined;
};

type GetEntryByUrl = {
    entryUrl: string | undefined;
    contentTypeUid: string;
    referenceFieldPath: string[] | undefined;
    jsonRtePath: string[] | undefined;
};


const renderOption = {
    span: (node: any, next: any) => next(node.children),
};


export const getCMSPage = async (entryUrl: string): Promise<CMSPage> => {
    const cmsurl = '/' + getTenant() + entryUrl;
    console.log("get CMS page : " + cmsurl);

    const response: CMSPage[] = await getPageByUrl(
        'ecom_marketing_page',
        cmsurl, [], []);
    // ['page_components.from_blog.featured_blogs'],
    // [
    //     'page_components.from_blog.featured_blogs.body',
    //     'page_components.section_with_buckets.buckets.description',
    //     'page_components.section_with_html_code.description',
    // ]);

    return response[0] as CMSPage;
};
export const getPageByUrl = async (
    contentTypeUid: string,
    entryUrl: string,
    referenceFieldPath: string[],
    jsonRtePath: string[]
): Promise<CMSPage[]> => {
    return new Promise((resolve, reject) => {
        const blogQuery = Stack.ContentType(contentTypeUid).Query();
        if (referenceFieldPath) blogQuery.includeReference(referenceFieldPath);
        blogQuery.includeOwner().toJSON();
        const data = blogQuery.where('url', `${entryUrl}`).find();
        data.then(
            (result) => {
                // console.log('getPageByUrl : result :::----' + JSON.stringify(result));
                jsonRtePath &&
                    Utils.jsonToHTML({
                        entry: result,
                        paths: jsonRtePath,
                        renderOption,
                    });
                resolve(result[0]);
            },
            (error) => {
                console.error(error);
                reject(error);
            }
        );
    });
}
export const getEntryByUrl = async (contentTypeUid: string,
    entryUrl: string,
    referenceFieldPath: string,
    jsonRtePath: any): Promise<GetEntryByUrl> => {

    return new Promise((resolve, reject) => {
        const blogQuery = Stack.ContentType(contentTypeUid).Query();

        if (referenceFieldPath) blogQuery.includeReference(referenceFieldPath);
        blogQuery.includeEmbeddedItems().toJSON();
        const data = blogQuery.where('url', `${entryUrl}`).find();

        data.then(
            (result) => {
                console.log('result :::----' + JSON.stringify(result));
                jsonRtePath &&
                    Utils.jsonToHTML({
                        entry: result,
                        paths: jsonRtePath,
                        renderOption,
                    });
                resolve(result[0]);
            },
            (error) => {
                console.error(error);
                reject(error);
            }
        );
    });
}
