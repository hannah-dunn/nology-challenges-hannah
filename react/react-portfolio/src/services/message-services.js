export const createNewMessage = async (formData) => {
  const response = await fetch("http://localhost:3000/messages", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  if (!response.ok) {
    throw new Error("failed to send message");
  }
  return await response.json();
};
