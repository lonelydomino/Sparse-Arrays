const matchingStrings = (stringList, queries) => {
  let counts = []
  queries.forEach((query, i) =>{
    counts.push(0)
    stringList.forEach((string) => {
      if(query === string){
        counts[i] += 1
      }
    })
  })
  return counts
}


let list = ['ab', 'ab', 'abc']
let queries = ['ab', 'abc', 'bc']

console.log(matchingStrings(list, queries))