let Carousel = {
    render: async (list) => {
        let view = `
            <section>
                <div class="slideshow-container">

                        ${list.map((a, index) =>
                            `
                            <div class="mySlides fade">
                                <div class="numbertext">${index + 1} / ${list.length}</div>
                                <img src=${a.url} >
                                <div class="text">${a.name}</div>
                            </div>
                            `
                            ).join('\n ')
                                }

                        <a class="prev" >&#10094;</a>
                        <a class="next" >&#10095;</a>
                    </div>
                    <br>

                    <div style="text-align:center">
                    ${list.map((a, index) =>
                        `
                        <span class="dot" data-arg=${index + 1}></span> 
                        `
                        ).join('\n ')
                        }
                    
                    </div>

            </section>
        `
        return view
    },
    after_render: async () => {
        var slideIndex = 0;
        showSlides(slideIndex);

        document.querySelector(".prev").addEventListener('click', () => {
            showSlides(slideIndex -= 1);
        })

        document.querySelector(".next").addEventListener('click', () => {
            showSlides(slideIndex += 1);
        })

        document.querySelectorAll(".dot")
            .forEach(btn => btn.addEventListener("click", e => {
                const index = e.target.getAttribute('data-arg');
                showSlides(slideIndex = index);
            }));

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            
            if(slides.length === 0 || dots.length === 0) 
                return
            
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 3000);
        }
    }

}

export default Carousel;