const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500)
function getData(){
    header.innerHTML = '<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="">'
    title.innerHTML = 'writing smth just for nothing '
    excerpt.innerHTML = 'lorem ipsum olar is a dummy test just to fill up the space. and its been awhile since i ever coded'
    profile_img.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML = 'John Smith'
    date.innerHTML = 'oct 5 2020'


    animated_bgs.forEach(bg => bg.classList.remove('animated_bg'))
    animated_bg_texts.forEach(text => text.classList.remove('animated-bg-text'))
}