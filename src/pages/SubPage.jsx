import React from 'react'

function SubPage() {
  return (
    <div>
      <div className='font-bold text-[64px] pb-[18px]'>
        Smart Inbox Analysis
      </div>
      <div className='text-[32px] max-w-[857px] mx-auto pb-[60px]'>
        Connect your email to automatically discover and track all your subscriptions
      </div>
      <div class="bg-white rounded-2xl border-2 border-blue-300 overflow-hidden shadow-lg">
            <table class="w-full">
                <thead>
                    <tr class="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                        <th class="px-6 py-4 text-left text-gray-800 font-semibold text-lg">Subscription</th>
                        <th class="px-6 py-4 text-center text-gray-800 font-semibold text-lg">Remaining day</th>
                        <th class="px-6 py-4 text-center text-gray-800 font-semibold text-lg">Process</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 text-gray-900 font-medium text-left">Netflix</td>
                        <td class="px-6 py-4 text-center text-gray-700 text-left">10 gün</td>
                        <td class="px-6 py-4 text-center">
                            <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                                Add to calendar
                            </button>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 text-gray-900 font-medium text-left">Spotify</td>
                        <td class="px-6 py-4 text-center text-gray-700 text-left">5 gün</td>
                        <td class="px-6 py-4 text-center">
                            <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                                Kalendara əlavə et
                            </button>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 text-gray-900 font-medium text-left">Adobe Creative</td>
                        <td class="px-6 py-4 text-center text-gray-700 text-left">35 gün</td>
                        <td class="px-6 py-4 text-center">
                            <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                                Kalendara əlavə et
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default SubPage
