export const getMediaUrl = media => {
  if (!media) return ""

  if (typeof media === "string" || media instanceof String) {
    return String(media)
  }

  return (
    media.mediaItemUrl ||
    media.sourceUrl ||
    media.publicUrl ||
    media.publicURL ||
    media.url ||
    ""
  )
}
