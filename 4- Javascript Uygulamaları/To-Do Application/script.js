const addButton = document.getElementById("add-btn");
const toDoInput = document.getElementById("todo-input");
const toDoDiv = document.getElementById("todo-list");

// Görev ekleme
addButton.addEventListener("click", () => {
  const task = toDoInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  const span = document.createElement("span");
  span.textContent = task;

  const btn = document.createElement("button");
  btn.className = "btn btn-danger btn-sm";
  btn.textContent = "Sil";

  li.appendChild(span);
  li.appendChild(btn);
  toDoDiv.appendChild(li);

  toDoInput.value = "";
});

// Silme ve tamamlandı işaretleme
toDoDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "SPAN") {
    e.target.classList.toggle("completed");
  }
});

// Çift tıklama ile düzenleme
toDoDiv.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "SPAN") {
    const span = e.target;
    const input = document.createElement("input");
    input.value = span.textContent;

    span.parentElement.replaceChild(input, span);
    input.focus();

    input.addEventListener("blur", () => {
      span.textContent = input.value;
      input.parentElement.replaceChild(span, input);
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        span.textContent = input.value;
        input.parentElement.replaceChild(span, input);
      }
    });
  }
});
