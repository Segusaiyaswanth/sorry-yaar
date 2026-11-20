document.addEventListener("DOMContentLoaded", () => {

    // PAGE ELEMENTS
    const welcomePage = document.getElementById("welcomePage");
    const bottlePage = document.getElementById("bottlePage");
    const letterPage = document.getElementById("letterPage");

    // BUTTONS
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const bottleBtn = document.getElementById("bottleBtn");

    // BOTTLE ELEMENTS
    const messageBottle = document.getElementById("messageBottle");
    const paperPlane = document.getElementById("paperPlane");
    const bottleCaption = document.getElementById("bottleCaption");

    // CHECK REQUIRED ELEMENTS
    if (
        !welcomePage || !bottlePage || !letterPage ||
        !yesBtn || !noBtn || !bottleBtn ||
        !messageBottle || !paperPlane
    ) {
        console.error("Apology website: Required HTML element missing.");
        return;
    }

    // PAGE NAVIGATION
    function showPage(page) {
        if (!page) return;

        document.querySelectorAll(".page").forEach(item => {
            item.classList.remove("active");
        });

        page.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // NO BUTTON MOVEMENT
    function moveNoButton() {
        const maxX = Math.max(
            10,
            window.innerWidth - noBtn.offsetWidth - 20
        );

        const maxY = Math.max(
            10,
            window.innerHeight - noBtn.offsetHeight - 20
        );

        noBtn.style.position = "fixed";
        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";
    }

    noBtn.addEventListener("mouseenter", moveNoButton);

    noBtn.addEventListener("touchstart", event => {
        event.preventDefault();
        moveNoButton();
    });

    // YES BUTTON - OPEN BOTTLE PAGE
    yesBtn.addEventListener("click", () => {

        yesBtn.disabled = true;

        const girl = document.querySelector(".illustrated-girl");
        const star = document.querySelector(".glowing-star");

        if (girl) {
            girl.style.animation = "float .35s ease-in-out 4";
        }

        if (star) {
            star.textContent = "💖";
        }

        setTimeout(() => {
            showPage(bottlePage);
            yesBtn.disabled = false;
        }, 1500);
    });

    // LETTER REVEAL
    function revealLetter() {
        const letter = document.querySelector(".letter");

        if (!letter) return;

        letter.classList.remove("letter-reveal");

        void letter.offsetWidth;

        letter.classList.add("letter-reveal");
    }

    // OPEN BOTTLE AND SEND PAPER AIRPLANE
    bottleBtn.addEventListener("click", () => {

        if (bottleBtn.disabled) return;

        bottleBtn.disabled = true;
        bottleBtn.textContent = "Sending your message... 💌";

        messageBottle.classList.add("opening");

        if (bottleCaption) {
            bottleCaption.textContent =
                "A little message is on its way to you... ❤️";
        }

        setTimeout(() => {
            paperPlane.classList.add("fly");
        }, 400);

        // OPEN APOLOGY LETTER
        setTimeout(() => {
            showPage(letterPage);
            revealLetter();
        }, 2600);

    });

});
