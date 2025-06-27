import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-info">Privacy Policy</h1>
      <div className="prose">
        <p className="mb-4">
          At TaskTide, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
        <p className="mb-4">
          We collect information you provide when registering, posting tasks, or communicating with us. This may include your name, email address, profile picture, and payment details.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
        <p className="mb-4">
          Your information is used to provide our services, process transactions, communicate with you, and improve our platform. We do not sell your personal data to third parties.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your data. However, no internet transmission is 100% secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance your experience. You can disable cookies in your browser settings, but this may affect functionality.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services (like payment processors) that have their own privacy policies. We're not responsible for their practices.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p>
          For privacy-related questions, contact us at privacy@tasktide.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;