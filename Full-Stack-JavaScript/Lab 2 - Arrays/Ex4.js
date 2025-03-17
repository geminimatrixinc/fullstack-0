function findArrIndex(myArr, str) {
	return myArr.indexOf(str);
}

console.log(findArrIndex(["abc", "edabit", "yyy", "xxx"], "yyy")) // 2

findArrIndex(["a", "g", "y", "z"], "z") // 3

findArrIndex(["egg","bacon","toast","coffee","random","juice"], "coffee") // 3

findArrIndex(["egg","bacon","toast","coffee","random","juice"], "mcmuffin") //-1