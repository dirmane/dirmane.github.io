import { def } from "../pages/docker/default.js";

var renderingTool = (function renderingTool() {
  const articleBox = document.getElementById("inside");
  const fastTravel = document.getElementById("ft-wrapper");

  function articleRendering(element) {
    moddingTool.append(articleBox, element);
  }
  function ftRendering(element) {
    moddingTool.append(fastTravel, element);
  }
  async function repleace(articleElement, ftElement) {
    new Promise((resolve, reject) => {
      moddingTool.empty(articleBox) && moddingTool.empty(fastTravel);

      if (
        moddingTool.children(articleBox) == [] &&
        moddingTool.children(fastTravel) == []
      )
        resolve(moddingTool.nodeChildren(articleBox));
    }).then(() => {
      articleRendering(articleElement);
      ftRendering(ftElement);
    });
  }
  return {
    default: async () => {
      articleRendering(def.article);
      ftRendering(def.ft);
      window.doace();
    },
    none: async () => {
      repleace(document.createElement("null"), document.createElement("null"));
    },
  };
})();

window.renderingTool = renderingTool;

(async function () {
  await renderingTool.none();

  document.getElementById("fastTravel").textContent =
    document.getElementById("title").textContent;
})();
