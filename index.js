const matchingStrings = (stringList, queries) => {
  let counts = []

  stringList.forEach((string, i) =>{
    counts[i] = 0
    queries.forEach((query, i) => {
      if(string === query){
        counts[i] += 1
      }
    })
  })
  return counts
}

let list = ['ab', 'ab', 'abc']
let queries = ['ab', 'abc', 'bc']

console.log(matchingStrings(list, queries))