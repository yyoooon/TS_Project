export const createDom = (template: string): DocumentFragment => {
  const domParser = new DOMParser();
  const doc = domParser.parseFromString(template, 'text/html');
  const childNode = Array.from(doc.body.childNodes);
  const fragment = document.createDocumentFragment();

  fragment.append(...childNode);
  return fragment;
};
