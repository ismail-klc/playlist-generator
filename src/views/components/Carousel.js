const getList = () => {
    let values = JSON.parse(localStorage.getItem('my-list'));
    let sum = 0;
    let map = {};

    // find sum
    for (let i = 0; i < values.length; i++) {
        sum += values[i].weight
    }

    let k = parseInt(10000 / sum);
    sum = 0;

    for (let i = 0; i < values.length; i++) {
        map[i] = values[i].weight * k
        values[i].weight = map[i]
        sum += values[i].weight
    }

    console.log(sum," uzunluğunda liste oluşturuluyor...");

    // check whether is valid
    for (let val of values) {
        if (val.weight - (sum - val.weight) >= 2) {
            location.replace('/#/')
            alert("Your list is invalid")
            return
        }
    }

    // get count from user
    let count = prompt("Bir değer girin", "6");

    // check whether is a valid number
    if(isNaN(count)){
        location.replace('/#/')
        alert("You need to enter a number")
        return 
    }

    let tmp = sum;
    let ans = [];
    let prev = -1;

    let list = [];
    for(let i=0; i<values.length; i++){
        list.push(i)
    }

    for (let i = 0; i < tmp; i++) {
        list = list.sort(() => Math.random() - 0.5)
        for (let key of list) {
            let isvalid = true;

            if(map[key] < 1 || prev === Number(key)) continue;

            for (let j = 0; j < values.length; j++) {
                if (j === Number(key)) continue;
                if (values[j].weight - (sum - 1 - values[j].weight) >= 2) {
                    isvalid = false;
                    break;
                }
            }

            if (!isvalid) continue;

            ans.push(values[key]);
            prev = Number(key);
            values[key].weight--;
            sum--;
            map[key]--;
            break;
        };
    }

    return ans.slice(0,count)
}

let Navbar = {
    render: async () => {
        let list = getList()

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
        var slideIndex = 1;
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


        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }

}

export default Navbar;