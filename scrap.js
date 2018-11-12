  const filterWord = (arr, badWord) => {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      let comment = arr[i].comment;
      let splitComment = comment.split(" ");
      let okToPush = true;
      for (let j = 0; j < splitComment.length; j++) {
        if (badWord[splitComment[j]]) {
          okToPush = false;
        }
      }

      if(okToPush) {
        answer.push(arr[i])
      }
    }
    return answer;
  }
  })

  let myArr = [
  {id: 1, comment: "This is bad"},
  {id: 2, comment: "This is good"}
]

console.log(filterWord(myArr, {
  "bad": true,
  "dude": true,
  "gun": true
}));
