export const imageMixins = {
    data() {
        return {
            slideIndex: 1,
        }
    },
    methods: {
        currentSlide(n) {
            this.showSlides((this.slideIndex = n));
        },
        showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                this.slideIndex = 1;
            }
            if (n < 1) {
                this.slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex - 1].style.display = "block";
            dots[this.slideIndex - 1].className += " active";
        },
        autoScroll() {
            setInterval(() => {
                this.slideIndex++;
                if (this.slideIndex > document.getElementsByClassName("mySlides").length) {
                    this.slideIndex = 1;
                }
                this.showSlides(this.slideIndex);
            }, 5000);
        }
    },
    mounted() {
        this.autoScroll();
        this.showSlides(1)
    },
}