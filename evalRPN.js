function evalRPN(tokens) {
  let arr = [];
  let result;
  for (let i = 0; i < tokens.length; i++) {
    let item = tokens[i];
    switch (item) {
      case "+":
        arr.push(arr.pop() + arr.pop());
        break;
      case "*":
        arr.push(arr.pop() * arr.pop());
        break;
      case "-":
        arr.push(-(arr.pop() - arr.pop()));
        break;
      case "/":
        arr.push(Math.trunc(1 / (arr.pop() / arr.pop())));
        break;
      default:
        arr.push(parseInt(item));
    }
  }
  return arr[0];
}
