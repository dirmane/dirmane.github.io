import { def } from "../pages/default.js";
import { docker } from "../pages/docker/docker.js";
import { python } from "../pages/python/python.js";
import Component from "./core/component.js";

var renderingTool = (function renderingTool() {
  const articleBox = document.getElementById("inside");
  const fastTravel = document.querySelector(".ft-wrapper");

  function articleRendering(element) {
    moddingTool.append(articleBox, element);
  }
  async function repleace(articleElement, ftElement) {
    new Promise((resolve, reject) => {
      moddingTool.empty(articleBox);

      resolve();
    }).then(() => {
      articleRendering(articleElement);

      window.doace();

      document.querySelector(".fastTravel").textContent =
        document.getElementById("title").textContent;

      window.ft();
    });
  }
  return {
    default: async () => {
      repleace(def.htmlComponent);
    },
    docker: async () => {
      repleace(docker.htmlComponent);
    },
    python: async () => {
      repleace(python.htmlComponent);
    },
  };
})();
window.renderingTool = renderingTool;

log.green("defined", "window.renderingTool");

renderingTool.default();

(function () {
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
})();

(function () {
  window.phc = () => {
    document.querySelector(".menuWr").classList.toggle("active");
    document.getElementById("inside").classList.toggle("inactive");
  };
})();
