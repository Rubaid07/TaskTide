import { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaBook } from 'react-icons/fa';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on 'Forgot Password' on the login page. You'll receive an email with instructions to create a new password."
    },
    {
      id: 2,
      question: "Where can I download the mobile app?",
      answer: "Our mobile app is available on both the Apple App Store and Google Play Store. Search for our app name to find and download it."
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for certain services."
    },
    {
      id: 4,
      question: "How can I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account settings. Go to 'Billing' and select 'Cancel Subscription'."
    }
  ];
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleFaqToggle = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text mb-4">How can we help you?</h1>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search help articles..."
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Support Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap border-b border-gray-600">
            <button
              className={`px-6 py-3  font-medium text-sm rounded-t-lg mr-2 ${activeTab === 'faq' ? 'border border-b-0 border-gray-600 text-info' : 'text'}`}
              onClick={() => setActiveTab('faq')}
            >
              <FaQuestionCircle className="inline mr-2" />
              FAQs
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm rounded-t-lg ${activeTab === 'resources' ? 'border border-b-0 border-gray-600 text-info' : 'text'}`}
              onClick={() => setActiveTab('resources')}
            >
              <FaBook className="inline mr-2" />
              Resources
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="box shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text mb-6">Frequently Asked Questions</h2>
            
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="border border-gray-600 rounded-lg overflow-hidden">
                    <button
                      className="w-full px-4 py-3 text-left font-medium text focus:outline-none flex justify-between items-center"
                      onClick={() => handleFaqToggle(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform ${activeFaq === faq.id ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeFaq === faq.id && (
                      <div className="px-4 py-3 box ">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No results found for your search. Try different keywords.</p>
              </div>
            )}
          </div>
        )}


        {/* Resources Section */}
        {activeTab === 'resources' && (
          <div className="box shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text mb-6">Helpful Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-600 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <FaBook className="h-6 w-6 text-[#4ba5dc]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text mb-2">Documentation</h3>
                    <p className="text-gray-500 mb-3">
                      Browse our comprehensive documentation to learn how to use all features of our product.
                    </p>
                    <a href="#" className="text-[#4ba5dc] hover:text-info text-sm font-medium">
                      View Documentation →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-600 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text mb-2">Video Tutorials</h3>
                    <p className="text-gray-500 mb-3">
                      Watch step-by-step video guides to help you get the most out of our platform.
                    </p>
                    <a href="#" className="text-[#4ba5dc] hover:text-info text-sm font-medium">
                      Watch Tutorials →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-600 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text mb-2">Webinars</h3>
                    <p className="text-gray-500 mb-3">
                      Join our live webinars or watch recordings to learn advanced features and best practices.
                    </p>
                    <a href="#" className="text-[#4ba5dc] hover:text-info text-sm font-medium">
                      View Schedule →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-600 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text mb-2">API Documentation</h3>
                    <p className="text-gray-500 mb-3">
                      For developers: Detailed API reference and integration guides.
                    </p>
                    <a href="#" className="text-[#4ba5dc] hover:text-info text-sm font-medium">
                      API Reference →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportPage;