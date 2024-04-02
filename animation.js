// const animateElements = (selector, animationClass, leavesAnimation) => {
//   const elements = document.querySelectorAll(selector);

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate__animated", animationClass, "show");
//           /* Saat elemen masuk ke dalam tampilan, tambahkan kelas animated dan animationClass */
//         } else {
//           entry.target.classList.add(leavesAnimation);
//           entry.target.classList.remove("animate__animated", animationClass, "show");

//           /* Jika elemen keluar dari tampilan, hapus kelas animated dan animationClass */
//         }
//       });
//     },
//     {
//       root: null, // Gunakan viewport sebagai root
//       rootMargin: "0px", // Tidak ada margin tambahan
//       threshold: 0.5, // Saat 20% dari elemen terlihat, lakukan animasi
//     }
//   );

//   elements.forEach((element) => {
//     observer.observe(element);
//   });
// };

// // Panggil fungsi untuk animasi fade left
// animateElements(".animation-left", "animate__fadeInLeft", "animate__fadeOutLeft");

// // Panggil fungsi untuk animasi fade top
// animateElements(".animation-top", "animate__fadeInDown", "animate__fadeOutUp");
// animateElements(".animation-bottom", "animate__fadeInUp", "animate__fadeOutDown");
// animateElements(".animation-right", "animate__fadeInRight", "animate__fadeOutRight");

// animation scroll reveal
ScrollReveal().reveal(".fadeleft", {
  origin: "left", // Mulai dari kiri
  distance: "100px", // Jarak 50px
  duration: 1000, // Durasi 1 detik
  reset: true, // Reset ketika keluar dari layar
});
ScrollReveal().reveal(".faderight", {
  origin: "right", // Mulai dari kiri
  distance: "100px", // Jarak 50px
  duration: 1000, // Durasi 1 detik
  reset: true, // Reset ketika keluar dari layar
});
ScrollReveal().reveal(".fadedown", {
  origin: "top", // Mulai dari kiri
  distance: "100px", // Jarak 50px
  duration: 1000, // Durasi 1 detik
  reset: true, // Reset ketika keluar dari layar
});
ScrollReveal().reveal(".fadeup", {
  origin: "bottom", // Mulai dari kiri
  distance: "100px", // Jarak 50px
  duration: 1000, // Durasi 1 detik
  reset: true, // Reset ketika keluar dari layar
});
