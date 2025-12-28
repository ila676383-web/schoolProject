

export const sendMessage = async (text: string) => {

  const res = await fetch("/api/tg/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return await res.json()
};


export const StrongMessage = async () => {
    const res = await fetch("/api/tg/send", {
      method: "POST",
      body: JSON.stringify({ text: 'ЭКСТРЕННАЯ ТРЕВОГА!' }),
    });
    return await res.json()
}