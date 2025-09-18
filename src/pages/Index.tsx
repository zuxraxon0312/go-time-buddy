import { useState, useEffect } from 'react'
import { supabase } from '@/integrations/supabase/client'

const Index = () => {
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    // Test Supabase connection
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('_realtime').select('*').limit(1)
        if (!error) {
          setConnected(true)
        }
      } catch (err) {
        console.log('Supabase connection test:', err)
      }
    }
    
    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Supabase Connected!
        </h1>
        
        <div className="flex items-center justify-center mb-6">
          <div className={`w-3 h-3 rounded-full mr-2 ${connected ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
          <span className="text-sm text-gray-600">
            Status: {connected ? 'Connected' : 'Connecting...'}
          </span>
        </div>

        <p className="text-gray-600 text-center mb-6">
          Your project is now connected to Supabase database. You can start building your application with authentication, real-time data, and more.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Next Steps:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Create database tables</li>
            <li>• Set up authentication</li>
            <li>• Configure Row Level Security</li>
            <li>• Build your features</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Index