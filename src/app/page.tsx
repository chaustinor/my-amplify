'use client';

import { useState } from 'react';
import { getHelloWorld } from '@/lib/app-client';

export default function Home() {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const data = await getHelloWorld();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error connecting to Lambda');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          HIPAA Compliant Next.js + Lambda
        </h1>
        
        <button
          onClick={handleClick}
          disabled={loading}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors font-medium text-lg shadow-lg"
        >
          {loading ? 'Loading...' : 'Call Lambda Function'}
        </button>
        
        {message && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <p className="text-xl text-gray-800">{message}</p>
          </div>
        )}
      </div>
    </main>
  );
}