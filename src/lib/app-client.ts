const API_BASE_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL || '';

export async function getHelloWorld() {
  if (!API_BASE_URL) {
    throw new Error('API Gateway URL is not configured. Please set NEXT_PUBLIC_API_GATEWAY_URL environment variable.');
  }

  console.log('Calling API:', `${API_BASE_URL}/hello`);
  
  const response = await fetch(`${API_BASE_URL}/hello`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}