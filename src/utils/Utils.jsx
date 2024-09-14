export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()                   // Convert to lowercase
      .replace(/\s+/g, "-")            // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, "")        // Remove all non-word characters
      .replace(/\-\-+/g, "-")          // Replace multiple hyphens with a single hyphen
      .replace(/^-+/, "")              // Trim hyphens from the start
      .replace(/-+$/, "");             // Trim hyphens from the end
  };
  