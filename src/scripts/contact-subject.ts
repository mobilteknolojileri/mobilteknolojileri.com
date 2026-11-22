// Links with data-contact-subject or data-contact-topic hand them to the contact form on the
// home page. sessionStorage carries them across the page load and covers a form that isn't
// hydrated yet.
function handOver(key: string, event: string, value: string | undefined) {
  if (!value) return;
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // Private mode
  }
  window.dispatchEvent(new CustomEvent(event, { detail: value }));
}

document.addEventListener("click", (event) => {
  const link = (event.target as Element | null)?.closest<HTMLElement>(
    "[data-contact-subject], [data-contact-topic]",
  );
  if (!link) return;
  handOver("contact-topic", "contact:topic", link.dataset.contactTopic);
  handOver("contact-subject", "contact:subject", link.dataset.contactSubject);
});
