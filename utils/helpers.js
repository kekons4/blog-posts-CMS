module.exports = {
  get_emoji: () => {
    const randomNum = Math.random();
    let book = "📗";

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    return `<span for="img" aria-label="book">${book}</span>`;
  },
  update_blog_url: (blog_id) => {
    return `/dashboard/update/${blog_id}`;
  },
  format_time: (date) => {
    return date.tolocaleTimeString();
  },
  format_date: (date) => {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  }
};
  