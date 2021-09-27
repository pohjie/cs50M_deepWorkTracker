export const fetchQuote = async () => {
  const response = await fetch('https://zenquotes.io/api/today')
  const result = await response.json()

  const quote = result[0].q
  const author = result[0].a
  return {quote, author}
}