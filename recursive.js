const list = [1, 2, 3, 4, 5, 6, 7];

const recursiveForLoop = (para) => {
  const { i, arr, cb } = para; 
  if (i > arr.length) return;

  cb(arr[i]);
  recursiveForLoop({ i: i + 1, arr, cb });
};

const callBack = (val) => console.log(val);
recursiveForLoop({ i: 0, arr: list, cb: callBack });
