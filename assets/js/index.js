// Fungsi untuk menampilkan modal dengan informasi tentang pekerjaan
function showWorkModal(e) {
    e.preventDefault(); // Cegah aksi default link (mengarahkan ke #)

    // Ambil elemen .work yang merupakan induk dari link ini
    const workElement = e.currentTarget.closest('.work');
    const title = workElement.getAttribute('data-title');
    const description = workElement.getAttribute('data-description');
    const imageSrc = workElement.getAttribute('data-image');

    // Tampilkan modal SweetAlert2 dengan informasi dari data-atribut
    Swal.fire({
        title: title,
        html: `
            <div style="display: flex; align-items: center;">
                <img src="${imageSrc}" alt="${title}" style="width: 150px; margin-right: 20px;">
                <div>
                    <p>${description}</p>
                </div>
            </div>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        width: '600px', // Menyesuaikan lebar modal
    });
}

// Menambahkan event listener untuk setiap elemen dengan class "view-work"
const workLinks = document.querySelectorAll('.view-work');
workLinks.forEach(link => {
    link.addEventListener('click', showWorkModal);
});
