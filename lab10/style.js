var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1'; 
// var img_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=53608779187&format=json&nojsoncallback=1';

function getimg() {
    fetch(imglist_Url)
    .then(response => response.json())
    .then(data => {
        const photoList = data.photos?.photo;
        add_new_img(photoList);
    })
}

function add_new_img(dataset) {
    const gallery = document.getElementById('gallery');

    dataset.forEach(photo => {
        const sizesUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=${photo.id}&format=json&nojsoncallback=1`;
        fetch(sizesUrl)
        .then(response => response.json())
        .then(data => {
            const sizes = data.sizes.size;
            const largeSize = sizes.find(size => size.label === 'Large' || size.label === 'Medium');

            if (largeSize) {
                const img = document.createElement('img');
                img.src = largeSize.source;
                img.alt = photo.title;
                gallery.appendChild(img);
            }
        })
    });
}