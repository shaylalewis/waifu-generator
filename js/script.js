document.getElementById("waifu").addEventListener('click', getWaifu);

function getWaifu() {
    const url = "https://api.waifu.im/random/?is_nsfw=false&selected_tags=selfies&full=false";

    fetch(url)
        .then(res => res.json()) //parse response as json
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerHTML = data.images[0].source;
            document.querySelector('.img1').src = data.images[0].url;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}