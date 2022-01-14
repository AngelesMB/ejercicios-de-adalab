// elemento de HTML
const text = document.querySelector(".text");
const textContainer = document.querySelector(".container");

// handler
function createParagraph() {
  textContainer.innerHTML += ` <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ex
illo error dolores harum alias provident voluptate illum. Quam,
exercitationem qui! Similique recusandae pariatur consequatur quae ipsa
quas possimus nam!
</p>`;
}

// listener sobre el elemento, con tipo de evento y handler
text.addEventListener("mouseover", createParagraph);
