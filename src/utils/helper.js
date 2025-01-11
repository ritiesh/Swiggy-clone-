export function filterData(searchText, restaurent) {
  return restaurent.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

}

