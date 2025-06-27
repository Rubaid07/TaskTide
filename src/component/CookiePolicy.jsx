import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">Cookie Policy</h1>
      <div className="prose">
        <p className="mb-4">
          This Cookie Policy explains how TaskTide uses cookies and similar technologies when you use our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small text files stored on your device when you visit websites. They help the site remember information about your visit.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Cookies</h2>
        <p className="mb-4">
          We use cookies to:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li className="mb-2">Keep you signed in</li>
          <li className="mb-2">Remember your preferences</li>
          <li className="mb-2">Understand how you use our service</li>
          <li className="mb-2">Improve and personalize your experience</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">Types of Cookies We Use</h2>
        <p className="mb-2 font-medium">Essential Cookies:</p>
        <p className="mb-4">
          Necessary for the website to function and cannot be switched off.
        </p>
        <p className="mb-2 font-medium">Performance Cookies:</p>
        <p className="mb-4">
          Help us understand how visitors interact with our website.
        </p>
        <p className="mb-2 font-medium">Functionality Cookies:</p>
        <p className="mb-4">
          Allow the website to remember choices you make.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Managing Cookies</h2>
        <p className="mb-4">
          You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Cookie Policy from time to time. We'll notify you of any changes by posting the new policy on this page.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p>
          For questions about our Cookie Policy, contact us at privacy@tasktide.com.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;