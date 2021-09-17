let cat = document.getElementById('cat');
let btn_cat = document.getElementById('btn_cat');

btn_cat.addEventListener('click', get_random_cat);

async function get_random_cat() {
  let data = await fetch('https://random.dog/woof.json');
  let res = await data.json();
  let alternate = 'DOG';
  cat.innerHTML = `<img src = "${res.url}" alt=${alternate}>`;
}