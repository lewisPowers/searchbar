let searchbar = document.querySelector('[data-searchbar]')
console.log(searchbar)
let sBByClass = document.querySelectorAll('.searchbar')[0]
let list = document.querySelectorAll('.list')[0]
let filterDiv = document.querySelectorAll('.filter')[0]
let container = document.querySelectorAll('.container')[0]
console.log(sBByClass, list, filterDiv, container)

let search = function(value) {
  console.log(`searching for ${value}`)

}

sBByClass.addEventListener('keyup', function(e) {
  let key = e.key;
  console.log(key);
  let val = sBByClass.value;
  if (key === 'ArrowDown' && sBByClass.value != '') {

    console.log('down arrow  PRESSED');
    // enter into arrow scrolling mode
  } else {
    displayList(val)
  }

})

function buildElement( value, DOMType, click) {
  let li = document.createElement('li')
  li.classList.add('li')
  // let input = document.createElement('input')
  li.textContent = value;
  if (click === 'click') {
    li.addEventListener('click', e => {
      search(value)
    })
  }
  // li.append(input)
  list.append(li)

}
function displayList(val) {
  let filtered = filterList(val)
  if (filtered.length) {
    sBByClass.style.borderBottom = '1px solid rgb(232, 234, 237)';
  } else {
    sBByClass.style.borderBottom = '1px solid rgba(232, 234, 237, 0)';
  }
  list.innerHTML = '';
  filtered.forEach((item, i) => {
    buildElement(item, 'li', 'click')

  })

}

function filterList(val) {
  if (val == '') return [];
  return lib.filter((category) => {
    return category.includes(val)
  }).sort((a,b) => {
    if (val[0] === a[0]) return -1;
    if (val[0] === b[0]) return 1;
  })
}

let lib = ['nail clippers', 'brush', 'mousetrap', 'kitty collars', 'food', 'toys','cat bed','kitty treats','cat treats','litter','kitty litter','cat bed','catnip']
// filter list
