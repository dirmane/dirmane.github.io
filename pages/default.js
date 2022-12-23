import Component from "../../js/core/component";

const def = {
  article: document.createElement("article"),
  ft: document.createElement("ft"),
};

def.article.innerHTML = `
    <h1 id="title">Main</h1>
    <div class='editor' dlang="javascript">function foo(items) {
    var x = "All this is syntax highlighted";
    return x;
    }</div>
    `;
def.ft.innerHTML = "<li>Start</li>";

export { def };
