const def = document.createElement("default");

def.innerHTML = `
    <h1 id="title">Main</h1>
    <div class='editor' dlang="javascript">function foo(items) {
    var x = "All this is syntax highlighted";
    return x;
    }</div>
    `;

export { def };
