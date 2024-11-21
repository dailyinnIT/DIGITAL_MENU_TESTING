document.getElementById("orderButton").addEventListener("click", function() {
    const roomNumber = document.getElementById("roomNumber").value.trim();

    if (!roomNumber) {
        alert("Harap masukkan nomor kamar Anda.");
        return;
    }

    // Ganti dengan nomor WhatsApp yang sesuai (gunakan format internasional tanpa tanda plus)
    const whatsappNumber = "6281280734718";  // Jangan gunakan tanda '+' pada nomor
    const message = `Halo, saya ingin memesan menu. Nomor kamar saya: ${roomNumber}`;
    const encodedMessage = encodeURIComponent(message); // Encode pesan dengan benar
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Membuka WhatsApp di tab baru dengan pesan otomatis
    window.location.href = whatsappURL;  // Gunakan window.location.href untuk membuka WhatsApp di tab yang sama

});
