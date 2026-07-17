//Elements
const present = document.getElementById("present-container");
const letter = document.getElementById("letter-container");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const title = document.querySelector(".letter-window h1");
const promptText = document.querySelector(".message-panel p");
const presentImg = document.getElementById("present-img");
const buttons = document.getElementById("letter-buttons");
const finaltext = document.getElementById("final-text");
const postActions = document.getElementById("post-actions");
const actionButtons = document.querySelectorAll(".post-action-btn");
const panels = document.querySelectorAll(".post-panel");
const photoGrid = document.querySelector(".photo-grid");

//Click Present

present.addEventListener("click", () => {
    present.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

//Logic to make YES button to grow

let yesScale = 1;

yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 0.2;
    
    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    } else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// Yes is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "YAY!";

    if (promptText) {
        promptText.textContent = "";
        promptText.style.display = "none";
    }

    if (presentImg) {
        presentImg.style.display = "none";
    }
    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";
    postActions.classList.remove("hidden");

    finaltext.style.display = "none";

    if (photoGrid.children.length === 0) {
        const photos = [
            "1.jpeg",
            "2.jpeg",
            "3.jpeg",
            "4.jpeg",
            "5.jpeg",
            "6.jpeg",
            "7.jpeg",
            "8.jpeg",
            "9.jpeg",
            "10.jpeg",
            "11.jpeg",
            "12.jpeg",
            "13.jpeg",
            "14.jpeg",
            "15.jpeg",
            "16.jpeg",
            "17.jpeg",
            "18.jpeg",
            "19.jpeg",
            "20.jpeg",
            "21.jpeg",
            "22.jpeg",
            "23.jpeg",
            "24.jpeg"
        ];

        photos.forEach((photo) => {
            const item = document.createElement("div");
            item.className = "photo-item";
            item.style.backgroundImage = `url('${photo}')`;
            photoGrid.appendChild(item);
        });
    }

    document.getElementById("letter-body").textContent = "happiest birthday lucky sperm! but i would say im the lucky one since i got to know you. i know it has not been easy but i hope as the year passes it becomes bearable. you know you keep on talking about finding love, but it is much closer than you think. it is within you, you are so full of love that it spills out, out of its jar and spread like a disease haha jk. i dont have to doubt or question myself when im with you, and you are so easy to love that it just becomes a daily occurrence for me to brought you up whenever im talking to someone. you have grown so much even if the world has not been kind to you, i hope you will always be healthy, wealthy, funny, happy, silly, and down to earth-y :p";
});

actionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;
        panels.forEach(panel => panel.classList.add("hidden"));
        document.getElementById(targetId).classList.remove("hidden");
    });
});