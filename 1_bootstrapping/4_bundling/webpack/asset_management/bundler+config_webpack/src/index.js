import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash import from ES6 imports on line 1
  elements.innerHTML = _.join(['Hello', 'webpack'], '');
  return element;
}

document.bosy.appendChild(component());
