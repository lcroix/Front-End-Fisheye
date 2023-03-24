function filterMedia(medias) {
    const selectedSort = document.querySelector('#media-sorting');

    selectedSort.addEventListener('change', (event) => {
        if (event.target.value === 'date') {
            medias.sort(sortFunctionDate);
        } else if (event.target.value === 'title') {
            medias.sort(sortFunctionTitle);
        } else if (event.target.value === 'popularity') {
            medias.sort(sortFunctionPopularity);
        } else {
            medias.sort(sortFunctionPopularity);
        }
        document.querySelector('.photographerGallery').innerHTML = '';
        document.querySelector('.modal-content').innerHTML = '';
        return displayMedia(medias);
    });
}



function sortFunctionPopularity(a, b) {
    if (a['likes'] === b['likes']) {
        return 0;
    } else {
        return (a['likes'] > b['likes']) ? -1 : 1;
    }
}

function sortFunctionDate(a, b) {
    if (a['date'] === b['date']) {
        return 0;
    } else {
        return (a['date'] > b['date']) ? -1 : 1;
    }
}


function sortFunctionTitle(a, b) {
    if (a['title'] === b['title']) {
        return 0;
    } else {
        return (a['title'] < b['title']) ? -1 : 1;
    }
}