import { def } from "../pages/default.js";
import { docker } from "../pages/docker/docker.js";
import Component from "./core/component.js";

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
      moddingTool.empty(articleBox);

      moddingTool.empty(fastTravel);

      resolve();
    }).then(() => {
      articleRendering(articleElement);

      ftRendering(ftElement);

      window.doace();

      document.getElementById("fastTravel").textContent =
        document.getElementById("title").textContent;
    });
  }
  return {
    default: async () => {
      repleace(def.article, def.ft);
    },
    docker: async () => {
      repleace(docker.article.htmlComponent, docker.ft.htmlComponent);
    },
  };
})();
window.renderingTool = renderingTool;

log.green("defined", "window.renderingTool");

renderingTool.default();

const phoneMenu = new Component(
  "div",
  "menuWr",
  `<ul id="menu">
${document.querySelector("#indexes").innerHTML}
</ul>`
);

document
  .getElementById("body")
  .insertBefore(phoneMenu.htmlComponent, document.getElementById("inside"));

const phoneMenuCH = () => {
  document.querySelector(".menuWr").classList.toggle("active");
  document.getElementById("inside").classList.toggle("inactive");
};
window.phoneMenuCH = phoneMenuCH;
