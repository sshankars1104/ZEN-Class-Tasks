document.addEventListener("DOMContentLoaded", function () {
    let countdownDiv = document.getElementById("countdown");

    setTimeout(function () {
        countdownDiv.innerText = 10;

        setTimeout(function () {
            countdownDiv.innerText = 9;

            setTimeout(function () {
                countdownDiv.innerText = 8;

                setTimeout(function () {
                    countdownDiv.innerText = 7;

                    setTimeout(function () {
                        countdownDiv.innerText = 6;

                        setTimeout(function () {
                            countdownDiv.innerText = 5;

                            setTimeout(function () {
                                countdownDiv.innerText = 4;

                                setTimeout(function () {
                                    countdownDiv.innerText = 3;

                                    setTimeout(function () {
                                        countdownDiv.innerText = 2;

                                        setTimeout(function () {
                                            countdownDiv.innerText = 1;

                                            setTimeout(function () {
                                                countdownDiv.innerText = "Happy Independence Day!";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});
