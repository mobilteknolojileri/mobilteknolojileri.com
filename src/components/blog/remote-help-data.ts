// Shared by RemoteHelp.astro and the Markdown copy of the Android posts
export const REMOTE_HELP = {
  heading: "Telefonunuzun yazılımını uzaktan onarırım",
  setup: {
    /** The diagram's accessible name */
    label:
      "Telefonunuz USB kabloyla bilgisayarınıza bağlanır, ben internet üzerinden o bilgisayara bağlanırım.",
    phone: { label: "Telefon", note: "sizde kalır" },
    computer: { label: "Bilgisayar", note: "Windows" },
    me: { label: "Ben", note: "uzaktan" },
  },
  // Every Android post ends with the same three steps, so the posts don't repeat them
  steps: [
    {
      title: "Bana yazın",
      body: "Telefonun modelini, ekranın fotoğrafını ve bozulmadan önce ne olduğunu gönderin. Çoğu zaman ilk yanıtta ne yapılabileceğini söylerim.",
    },
    {
      title: "Bilgisayarınıza bağlanırım",
      body: "Telefon sizde kalır. Windows bilgisayarınıza USB kabloyla bağlarsınız, ben internet üzerinden o bilgisayara bağlanıp işi yaparım.",
    },
    {
      title: "Önce konuşuruz",
      body: "Veri silecek bir adıma onayınız olmadan geçmem. Olmayacaksa bunu baştan söylerim.",
    },
  ],
};
