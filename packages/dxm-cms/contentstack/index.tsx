import * as contentstack from 'contentstack';
import * as Utils from '@contentstack/utils';
import { CMSPage, eComHeader } from 'dxm-ui-component';
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
    const cmsPage = response[0];
    const header = await getEcomHeader(cmsPage.ecom_header[0].uid);

    cmsPage.header = header;
    return cmsPage;
};

export const getEcomHeader = async (entryUid: string): Promise<eComHeader> => {
    console.log("getEcomHeader  : " + entryUid);
    const response: eComHeader = await getEntriesById(
        'ecom_header',
        entryUid, [], []);
    return response as eComHeader;

}
export const getPageByUrl = async (
    contentTypeUid: string,
    entryUrl: string,
    referenceFieldPath: string[],
    jsonRtePath: string[]
): Promise<CMSPage[]> => {
    return new Promise((resolve, reject) => {
        const query = Stack.ContentType(contentTypeUid).Query();
        if (referenceFieldPath) query.includeReference(referenceFieldPath);
        query.includeOwner().toJSON();
        const data = query.where('url', `${entryUrl}`).find();
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



export const getEntriesById = async (
    contentTypeUid: string,
    entryUid: string,
    referenceFieldPath: string[],
    jsonRtePath: string[]): Promise<eComHeader> => {
    return new Promise((resolve, reject) => {

        const query = Stack.ContentType(contentTypeUid).Entry(entryUid);
        query.includeOwner().toJSON();
        const data = query.fetch();
        data.then(
            (result) => {
                // console.log("result : " + JSON.stringify(result));
                jsonRtePath &&
                    Utils.jsonToHTML({
                        entry: result,
                        paths: jsonRtePath,
                        renderOption,
                    });
                resolve(result);
            },
            (error) => {
                console.error(error);
                reject(error);
            }
        );
    });
} 