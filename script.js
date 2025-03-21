document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("accessForm");
    const errorMessage = document.getElementById("errorMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const purchaseCode = document.getElementById("purchaseCode").value.trim();

            if (purchaseCode.length < 8) {
                errorMessage.innerText = "❌ Code invalide. Veuillez réessayer.";
            } else {
                // Stocker le code fictif et rediriger vers la page du coupon
                localStorage.setItem("fakeCouponCode", generateFakeCoupon());
                window.location.href = "coupon.html";
            }
        });
    }

