export const fetchEvents = async (region) => {
  try {
    const response = await fetch(`https://api.ciclovia.com/events/${region}`);
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching events:", error);

  }
  setLoading(false);
};
