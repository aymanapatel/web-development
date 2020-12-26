
function component() {
  const element = document.createElement('div');

  // Lodash import from <script> tag in index.html
  elements.innerHTML = _.join(['Hello', 'webpack'], '');
  return element;
}

document.bosy.appendChild(component());
