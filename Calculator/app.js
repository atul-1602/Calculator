
function add() {
  var act = 0,
    b = 0;
  act = form.ans.value;
  b = act.charAt(act.length - 1);
  if (b == "+" || b == "-" || b == "/" || b == "*") {
    form.ans.value = act.substring(0, act.length - 1);
  }
  form.ans.value += "+";
}
function div() {
  var act = 0,
    b = 0;
  act = form.ans.value;
  b = act.charAt(act.length - 1);
  if (b == "+" || b == "-" || b == "/" || b == "*") {
    form.ans.value = act.substring(0, act.length - 1);
  }
  form.ans.value += "/";
}
function sub() {
  var act = 0,
    b = 0;
  act = form.ans.value;
  b = act.charAt(act.length - 1);
  if (b == "+" || b == "-" || b == "/" || b == "*") {
    form.ans.value = act.substring(0, act.length - 1);
  }
  form.ans.value += "-";
}
function mul() {
  var act = 0,
    b = 0;
  act = form.ans.value;
  b = act.charAt(act.length - 1);
  if (b == "+" || b == "-" || b == "/" || b == "*") {
    form.ans.value = act.substring(0, act.length - 1);
  }
  form.ans.value += "*";
}
