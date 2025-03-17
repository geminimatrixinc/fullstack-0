

function getKeyValuePairs(obj) {
    var res = [[],[]];
      for (var key in obj) {
      res[0].push(key);
      res[1].push(obj[key]);
    }
    return res;
  }


  function getKeyValuePairs(obj) {
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    return [
      keys,
      values
    ]
  }

getKeyValuePairs({ a: 5, b: 10, c: 16 })
//Output => [ [ 'a', 'b', 'c' ], [ 5, 10, 16 ] ]

getKeyValuePairs({ r: "React", a: "Angular", v: "Vue" })
// Output => [ [ 'r', 'a', 'v' ], [ 'React', 'Angular', 'Vue' ] ]

getKeyValuePairs({ k1: true, k2: false, k3: undefined })
// Output => [ [ 'k1', 'k2', 'k3' ], [ true, false, undefined ] ]



