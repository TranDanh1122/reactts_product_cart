export function getImage(images) {
    let viewPortWidth = document.documentElement.clientWidth
    if (viewPortWidth > 1024) return images['desktop'] ?? ''
    if (viewPortWidth >= 768) return images['tablet'] ?? ''
    return images['mobile'] ?? ''

}