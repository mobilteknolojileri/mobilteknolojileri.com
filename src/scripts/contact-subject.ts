// Links with data-contact-subject hand their subject to the contact form on the home page.
// sessionStorage carries it across the page load and covers a form that isn't hydrated yet.
document.addEventListener("click", (event) => {
  const link = (event.target as Element | null)?.closest<HTMLElement>("[data-contact-subject]");
  const subject = link?.dataset.contactSubject;
  if (!subject) return;
  try {
    sessionStorage.setItem("contact-subject", subject);
  } catch {
    // Private mode
  }
  window.dispatchEvent(new CustomEvent("contact:subject", { detail: subject }));
});
