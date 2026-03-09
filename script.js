document.getElementById('form-ucapan').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const kehadiran = document.getElementById('kehadiran').value;
    const pesan = document.getElementById('pesan').value;

    const ucapanBaru = document.createElement('div');
    ucapanBaru.classList.add('item-ucapan');
    
    ucapanBaru.innerHTML = `
        <strong>${nama}</strong> <span class="badge">${kehadiran}</span>
        <p>${pesan}</p>
    `;

    const daftarUcapan = document.getElementById('daftar-ucapan');
    daftarUcapan.insertBefore(ucapanBaru, daftarUcapan.firstChild);

    document.getElementById('form-ucapan').reset();
    alert("Terima kasih! Ucapan Anda berhasil dikirim.");
});