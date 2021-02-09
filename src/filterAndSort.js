Array.prototype.filterAndSort = function(type, filter = false, sort = "a+", search = false) {
    if(type !== "shelf" && type !== "rating") return []
    function alphabetSort(array) { 
        return array.sort((x, y) => {
            if (x.title < y.title) return -1;
            else if (x.title > y.title) return 1;
            else return 0;
        })
    }
    function yearSort(array) { 
        return array.sort((x, y) => (
            Number(String(x.year).substring(0,4)) - Number(String(y.year).substring(0,4)))   
        ) 
    }
    function ratingSort(array) { 
        return array.sort((x, y) => Number(x.rating) - Number(y.rating))     
    }
    const filterWithSearch = (search) => {
        if(!search) return this
        const search_as_array = search.indexOf(" ") >= 0 
          ? search.split(" ") 
          : [search]
        return this.filter(item => {
          let helper = 0;
          for(let i=0; i<search_as_array.length; i++) {
              let regex = new RegExp(`\\w*${search_as_array[i]}\\w*`,`i`,`g`);
              if(regex.test(item.title)) {
                  helper++;
              }
          }
          return helper>0 && item
        }) 
      }
    const filtered = filterWithSearch(search).filter(item => filter  
        ? item[type] && item.type === filter 
        : item[type])
    switch(sort) {
        case "a+": return alphabetSort(filtered)
        case "a-": return alphabetSort(filtered).reverse()
        case "y+": return yearSort(filtered)
        case "y-": return yearSort(filtered).reverse()
        case "r+": return ratingSort(filtered)
        case "r-": return ratingSort(filtered).reverse()
        default: return alphabetSort(filtered)
    }
  }