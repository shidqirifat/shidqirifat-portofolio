export default function aosAnimate(selector, type = "fade-up") {
  const container = document.querySelectorAll(`${selector}`);
  container.forEach((item, index) => {
    item.dataset.aos = type;
    item.dataset.aosDelay = index * 100;
  });
}
