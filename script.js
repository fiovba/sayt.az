const sidebar = document.getElementById('sidebar');
function toggleMenu() {
    if (sidebar.classList.contains('translate-x-full')) {
        sidebar.classList.remove('translate-x-full');
        sidebar.classList.add('translate-x-0');
    } else {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
    }
}
function toggleDropdown(event) {
    const dropdownContent = event.target.nextElementSibling;
    dropdownContent.classList.toggle('hidden');
}
const select = document.getElementById('select');

const domainList = [
    ".az", ".com", ".net", ".info", ".biz", ".org", ".us", ".in", ".ws",
    ".mobi", ".tv", ".me", ".ru", ".de", ".com.az", ".co", ".site.az",
    ".sayt.az", ".ureb.com", ".org.az", ".info.az", ".biz.az", ".net.az"
];
domainList.forEach(item => {
    select.innerHTML += `<option value="${item}">${item}</option>`

})
function setSelect(element) {
    const selected = element.innerText.split("\n")[0].trim();
    const options = select.querySelectorAll('option');
    options.forEach(option => {
        if (option.value === selected) {
            option.selected = true;
        } else {
            option.selected = false;
        }
    })
}
const warningInput = document.getElementById('warningInput')

function warning() {
    const domenName = document.getElementById('domenName').value;
    const icazeliSimvollar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-";
    if (domenName.length < 3 && domenName.length != 0) {
        warningInput.innerHTML = '*Domen adı 3 hərfdən az ola bilməz.';
        return;
    }
    for (let i = 0; i < domenName.length; i++) {
        if (!icazeliSimvollar.includes(domenName[i])) {
            warningInput.innerHTML = '*Domen adı yalnız hərf, rəqəm və "-" simvolundan ibarət ola bilər.';
            return;
        }
    }
    warningInput.innerHTML = '';
}

let qiymetler = {
    ekonom: 5,
    standart: 10,
    premium: 20
};
let aylıqÖdəniş = true;
function togglePlan(selected) {
    aylıqÖdəniş = selected === 1;
    document.getElementById('option1').classList.toggle('bg-[#a271f2]', aylıqÖdəniş);
    document.getElementById('option1').classList.toggle('text-white', aylıqÖdəniş);
    document.getElementById('option1').classList.toggle('bg-white', !aylıqÖdəniş);
    document.getElementById('option1').classList.toggle('text-gray-500', !aylıqÖdəniş);
    document.getElementById('option2').classList.toggle('bg-[#a271f2]', !aylıqÖdəniş);
    document.getElementById('option2').classList.toggle('text-white', !aylıqÖdəniş);
    document.getElementById('option2').classList.toggle('bg-white', aylıqÖdəniş);
    document.getElementById('option2').classList.toggle('text-gray-500', aylıqÖdəniş);
    let priceElements = document.querySelectorAll('.price');
    priceElements[0].innerText = aylıqÖdəniş ? qiymetler.ekonom : qiymetler.ekonom * 12;
    priceElements[1].innerText = aylıqÖdəniş ? qiymetler.standart : qiymetler.standart * 12;
    priceElements[2].innerText = aylıqÖdəniş ? qiymetler.premium : qiymetler.premium * 12;
}


function selectCard(element) {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('border-2', 'border-purple-500', 'scale-110', 'z-10');
    });
    element.classList.add('border-2', 'border-purple-500', 'scale-110', 'z-10');
}

const teamMembers = [
    {
        name: "Ramil Mirzayev",
        role: "CEO",
        image: "https://api.websiteca.com/storage/Cup5kWbVIA9nfp4TN5w9ecGRkQUkhfVh8umVITKe.jpg"
    },
    {
        name: "Rasim Adurahman",
        role: "Project Manager",
        image: "https://api.websiteca.com/storage/uTGbFRppma9BB7BTTYffzFgy8m1MfQEa7RkNdAVe.jpg"
    },
    {
        name: "Ahmad Rustamov",
        role: "Team Lead",
        image: "https://api.websiteca.com/storage/cMDfFJGRPFXHH8bqJc6CXw5RT6RbYOjHDmmAhvq4.jpg"
    },
    {
        name: "Murad Aghamedov",
        role: "Backend Developer",
        image: "https://api.websiteca.com/storage/4RIXyEhwxrU4nkxG2MUT2NqxZk0byqD4W7VyvnRf.jpg"
    },
    {
        name: "Fuad Mammadov",
        role: "Front-End Developer",
        image: "https://api.websiteca.com/storage/S3chfzTRjo3ykhVY7JaRbRNbJ28LVeXA1duP7YAN.png"
    },
    {
        name: "Mirafgan Eminbayli",
        role: "Frontend Developer",
        image: "https://api.websiteca.com/storage/8imyJH3yz86nxrP3fTkAfq9faXyfrPhLMsD5nWvm.jpg"
    },
    {
        name: "Idrak Mustafazada",
        role: "Customer Support",
        image: "https://api.websiteca.com/storage/UFeJ0M6cDGYTUcdTSz79BOYyuQMUIU5NWfhk2wuv.jpg"
    },
    {
        name: "Saida Chinani",
        role: "SMM",
        image: "https://api.websiteca.com/storage/k6AiYFMXvZ3HIpwTdQAZiHZMyjeOnGQ8TpZY4VTz.jpg"
    },
    {
        name: "Matanat M.",
        role: "Front End Developer",
        image: "https://api.websiteca.com/storage/souFthYY1tpKeJKs20LqEqbjGvT1pxAZ5OBCtr1u.jpg"
    }
];
const ishcilerDiv = document.getElementById('ishcilerDiv');
teamMembers.forEach(item => {
    let card = document.createElement("div");
    card.className = "p-5 border-2 border-purple-800 rounded-3xl text-center shadow-lg w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] max-w-[250px] min-w-[200px] flex-grow";

    card.innerHTML = `
        <div class="relative">
            <img src="${item.image}" class="w-full h-48 object-cover rounded-lg">
        </div>
        <div class="mt-4 rounded-b-2xl">
            <h2 class="text-xl font-bold text-[#300b60]">${item.name}</h2>
            <p class="text-[#300b60]">${item.role}</p>
        </div>
    `;

    ishcilerDiv.appendChild(card);
});
const portfolioData = [
    {
        name: "BİOPHYSİCS.AZ",
        image: "https://api.websiteca.com/storage/wKyykqEbaB5lQ5Q4bq6r5KcpP91bZytQXDtBopDY.png",
        link: "/portfolio"
    },
    {
        name: "UREB.COM",
        image: "https://api.websiteca.com/storage/Mupn6xSf0FTlbBj0ilDZAqXuLiLrwFGjZct4gQLH.png",
        link: "/portfolio"
    },
    {
        name: "UG.NEWS",
        image: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png",
        link: "/portfolio"
    },
    {
        name: "FOOTBALL.BİZ",
        image: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png",
        link: "/portfolio"
    },
    {
        name: "WISHER.AZ",
        image: "https://api.websiteca.com/storage/mMkkjJ32v64o4mN5tuMBvn7SWWkd1dPBBM1ZBzE2.png",
        link: "/portfolio"
    },
    {
        name: "IMEXCOMMODITIES.COM",
        image: "https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png",
        link: "/portfolio"
    },
    {
        name: "AZFENTTQ.AZ",
        image: "https://api.websiteca.com/storage/l7CnTnqSgXj1XA2ZMFtVvo4E8j2nZ4wgElrDehh7.png",
        link: "/portfolio"
    },
    {
        name: "NOTEHUB.AZ",
        image: "https://api.websiteca.com/storage/vjciI2KyS5K2wrvpm1JlLFKdcd7WlG4wB0GTlItY.png",
        link: "/portfolio"
    },
    {
        name: "AZEHOLİDAYS.COM",
        image: "https://api.websiteca.com/storage/7g8cGPiEFNN7KfmRLC7Hes27A0xj9UD85yxLjSXZ.png",
        link: "/portfolio"
    },
    {
        name: "VİPCONSULTİNG.AZ",
        image: "https://api.websiteca.com/storage/J0npE6PgAdvfSUmaUYdqdbQHplamTsx4RiOGB7wJ.png",
        link: "/portfolio"
    },
    {
        name: "ZEMED.AZ",
        image: "https://api.websiteca.com/storage/2Nr06VCFo72kSNXyGBNM6Vp8sl95xifE8PDKUnXO.png",
        link: "/portfolio"
    },
    {
        name: "ESCO.AZ",
        image: "https://api.websiteca.com/storage/STK6FPMjjvSWhL030mPfPDDzeUFvpoAEKVSYfgkw.png",
        link: "/portfolio"
    },
    {
        name: "AZFENTTQ.AZ",
        image: "https://api.websiteca.com/storage/l7CnTnqSgXj1XA2ZMFtVvo4E8j2nZ4wgElrDehh7.png",
        link: "/portfolio"
    },
    {
        name: "NOTEHUB.AZ",
        image: "https://api.websiteca.com/storage/vjciI2KyS5K2wrvpm1JlLFKdcd7WlG4wB0GTlItY.png",
        link: "/portfolio"
    },
    {
        name: "AZEHOLİDAYS.COM",
        image: "https://api.websiteca.com/storage/7g8cGPiEFNN7KfmRLC7Hes27A0xj9UD85yxLjSXZ.png",
        link: "/portfolio"
    },
    {
        name: "VİPCONSULTİNG.AZ",
        image: "https://api.websiteca.com/storage/J0npE6PgAdvfSUmaUYdqdbQHplamTsx4RiOGB7wJ.png",
        link: "/portfolio"
    },
    {
        name: "ZEMED.AZ",
        image: "https://api.websiteca.com/storage/2Nr06VCFo72kSNXyGBNM6Vp8sl95xifE8PDKUnXO.png",
        link: "/portfolio"
    },
    {
        name: "ESCO.AZ",
        image: "https://api.websiteca.com/storage/STK6FPMjjvSWhL030mPfPDDzeUFvpoAEKVSYfgkw.png",
        link: "/portfolio"
    }
];
const itemsPerPage = 6;
let currentPage = 1;
const totalPages = Math.ceil(portfolioData.length / itemsPerPage);
function renderPortfolio(page) {
    let portfolioGrid = document.getElementById('portGrid');
    portfolioGrid.innerHTML = "";
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedItems = portfolioData.slice(start, end);
    paginatedItems.forEach(item => {
        portfolioGrid.innerHTML += `
            <a href="${item.link}" class="col-span-1 h-fit p-6  rounded-[30px] border-2 border-[#E4D7FD]">
                <div>
                    <img alt="${item.name}" class="w-full xl:h-[380px] lg:h-[320px] md:h-[240px] sm:h-[200px] h-[120px] object-contain rounded-[15px]" src="${item.image}">
                </div>
                <div class="xmd2:text-xl text-sm font-semibold text-[#300b60]  pt-6">${item.name}</div>
            </a>
        `;
    });
    document.getElementById("page1").style.fontWeight = (page === 1) ? "bold" : "normal";
    document.getElementById("page2").style.fontWeight = (page === 2) ? "bold" : "normal";
    document.getElementById("page3").style.fontWeight = (page === 3) ? "bold" : "normal";
}

function goPage(page) {
    currentPage = page;
    renderPortfolio(currentPage);
}
renderPortfolio(currentPage);

//swipper
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const blogPosts = [
    {
        title: "Uğurlu biznes üçün hansı veb trendləri izləməlisən?",
        image: "https://api.websiteca.com/storage/F9fi8pQIutOxgHSQBQdOz3IYGZjHvpCjPMyeKbWQ.jpg",
        link: "/bloq/ugurlu-biznes-ucun-hansi-veb-trendleri-izlemelisen",
        date: "Feb 27, 2025",
        tags: ["webdesign", "marketinq", "sayt"]
    },
    {
        title: "DeepSeek AI: Yeni Nəsil Süni İntellekt Aləti",
        image: "https://api.websiteca.com/storage/DUPcyTWGCtnRzHz9801ms8fDZWbMUsRIoErzIdyW.jpg",
        link: "/bloq/deepseek-ai-yeni-nesil-suni-intellekt-aleti",
        date: "Feb 6, 2025",
        tags: ["sayt yaratmaq", "sayt sifarişi", "saytların hazırlanması"]
    },
    {
        title: "2025-ci ildə Onlayn Biznesin Trendləri",
        image: "https://api.websiteca.com/storage/numKcPzot4A6JVvsEvxWnmTKm1LRLr3svtTxTDU5.jpg",
        link: "/bloq/2025-ci-ilde-onlayn-biznesin-trendleri",
        date: "Jan 29, 2025",
        tags: ["marketinq", "social", "peşəkar veb dizayn"]
    }
];
const blogContainer = document.getElementById("blogContainer");

blogPosts.forEach(post => {
    blogContainer.innerHTML += `
                <div class="bg-white rounded-sm p-5 border-1 border-purple-700 shadow-lg overflow-hidden transform transition">
                    <a href="${post.link}">
                        <img src="${post.image}" alt="${post.title}" class="w-full  h-52 object-cover sm:p-3 ">
                    </a>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2 text-gray-800 pb-3">
                            <a href="${post.link}">${post.title}</a>
                        </h3>
                        <div class="flex flex-wrap gap-2 items-center">
                            ${post.tags.map(tag => `<span class="bg-[#a271f2] text-white text-sm font-medium px-3 py-2 rounded-md">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
});

//SLider
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.relative.flex.flex-shrink-0');
    const prevButton = document.querySelector('[aria-label="Slide back"]');
    const nextButton = document.querySelector('[aria-label="Slide forward"]');
    let currentIndex = 0;

    function updateSlidePosition() {
        // Move all images to the left
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    prevButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1;
        }
        updateSlidePosition();
    });

    nextButton.addEventListener("click", function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    // Initial position
    updateSlidePosition();
});
