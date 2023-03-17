function changeImg(id){
        let imgPath = document.getElementById(id).getAttribute('src');
        document.getElementById('img-main').setAttribute('src',imgPath);
}