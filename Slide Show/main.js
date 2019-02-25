let i = 0
let images = []


images.push("http://www.sdjgjx.com/up/pc/background%20hd.jpg")
images.push("https://i.etsystatic.com/12211789/r/il/820216/1440931443/il_fullxfull.1440931443_jwiq.jpg")
images.push("https://storage.pixteller.com/designs/designs-images/2017-07-29/12/backgrounds-photography-background-photo-1-597c5bdc25470.png")
images.push("http://doanarae.com/doanarae/7513-hd-photography-nature-wallpapers_2703.jpg")
images.push("https://www.businessnewsdaily.com/images/i/000/012/437/original/vintage-camera.jpg?1474308879")

function carouselNext() {
    if (i == images.length - 1) {
        i = 0
        document.slide.src = images[0]
    } else {
        document.slide.src = images[i++]
    }
    console.log(i)
}

function carouselBack() {
    if (i == 0) {
        i = images.length - 1;
        document.slide.src = images[i]
    } else {
        document.slide.src = images[i--]
    }
    console.log(i)
}