const slugify = (text: string): string => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
}

export default slugify;