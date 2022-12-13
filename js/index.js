import { def } from "../pages/docker/default.js";

var renderingTool = (function renderingTool() {
  function articleRendering(element) {
    moddingTool.append(document.getElementById("inside"), element);
  }
  function isPlainObject(value) {
    // https://stackoverflow.com/a/52453407
    return Object.prototype.toString.call(value).slice(8, -1) === "Object";
  }
  return {
    default: async () => {
      articleRendering(def);
    },
  };
})();

(async function () {
  await renderingTool.default();

  document.getElementById("fastTravel").textContent =
    document.getElementById("title").textContent;
})();
