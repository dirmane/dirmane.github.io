//import { def } from "../pages/docker/default";

const def = document.createElement("default");

def.innerHTML = `
<h2>Index</h2>
<div class='editor' dlang="javascript">function foo(items) {
  var x = "All this is syntax highlighted";
  return x;
}</div>
    `;

var renderingTool = (function renderingTool() {
  function isObjectLike(value) {
    // checking if val is an object like
    return value != null && typeof value == "object";
  }
  function isPlainObject(value) {
    // https://stackoverflow.com/a/52453407
    return Object.prototype.toString.call(value).slice(8, -1) === "Object";
  }
  function isNode(value) {
    //read about DOM nodes
    return isObjectLike(value) && isPlainObject(value);
  }
  //parentNode and newNode mannipulation
  return {
    default: async () => {
      moddingTool.append(document.getElementById("inside"), def);
    },
  };
})();

renderingTool.default();
