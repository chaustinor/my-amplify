const API_BASE_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

export async function getHelloWorld() {
  const response = await fetch(`${API_BASE_URL}/hello`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch hello world');
  }
  
  return response.json();
}