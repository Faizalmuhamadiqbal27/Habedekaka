document.addEventListener("DOMContentLoaded", function() {
    // Mengambil elemen-elemen yang diperlukan untuk transisi slide
    let firstSlideContainer = document.querySelector(".slide--content");
    let secondSlideContainer = document.querySelector(".slide--content--one");
    let secondCanvas = document.querySelector(".second--canvas");
    let thirdCanvas = document.querySelector(".third--canvas");

    // Menyembunyikan elemen-elemen yang tidak perlu ditampilkan awal
    secondSlideContainer.style.display = "none";
    secondCanvas.style.display = "none";
    thirdCanvas.style.display = "none";

    // Mengatur timeout untuk animasi transisi antar slide
    let containerToggleOne = setTimeout(function() {
        firstSlideContainer.style.display = "none";
        secondSlideContainer.style.display = "block";
    }, 2500);

    let removeFirstSlide = setTimeout(function() {
        document.querySelector(".first--slide").style.display = "none";
        secondCanvas.style.display = "block";
    }, 6500);

    let removeSecondCanvas = setTimeout(function() {
        secondCanvas.style.display = "none";
        thirdCanvas.style.display = "block";
    }, 9800);

    // Fungsi untuk navigasi kembali ke index.html dan menampilkan .main
    function navigateBackToIndex() {
        window.location.href = 'index.html';
        sessionStorage.setItem('showMain', 'true');
    }

    // Set timeout untuk navigasi kembali ke index.html setelah 17 detik
    setTimeout(navigateBackToIndex, 17000);

    // Periksa apakah perlu menampilkan .main saat kembali ke index.html
    if (sessionStorage.getItem('showMain') === 'true') {
        sessionStorage.removeItem('showMain');
        $(".main").fadeIn("fast");
    }
});
