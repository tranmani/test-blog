const truncate = (str: string, length: number, ending: string = '...') => {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }
  return str;
}

export default truncate;