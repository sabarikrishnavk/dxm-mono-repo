const env = process.env;
export function getTheme() {
    const tenant = env.NEXT_PUBLIC_TENANT;
    const theme = 'theme-' + tenant;
    return theme;
}
export function getTenant() {
    const tenant = env.NEXT_PUBLIC_TENANT;
    return tenant;
}