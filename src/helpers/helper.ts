export function getImage(images: { thumbnail: string, desktop: string, tablet: string, mobile: string }): string {
    const viewPortWidth: number = document.documentElement.clientWidth
    if (viewPortWidth > 1024) return images.desktop ?? ''
    if (viewPortWidth >= 768) return images.tablet ?? ''
    return images.mobile ?? ''

}