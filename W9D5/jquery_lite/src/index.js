const $l = (selector) => {
  const nodeList = document.querySelectorAll(selector);
  const nodeArray = Array.from(nodeList);
  console.log(nodeArray);
};

window.$l = $l;

