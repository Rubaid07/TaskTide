import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-info">Terms of Service</h1>
      <div className="prose">
        <p className="mb-4">
          Welcome to TaskTide. By accessing or using our website, you agree to be bound by these Terms of Service.
        </p>
        <p className="mb-4">
          You must be at least 18 years old to use our services. You are responsible for maintaining the confidentiality of your account and password.
        </p>
        <p className="mb-4">
          All content posted on TaskTide must comply with applicable laws and must not infringe on any third-party rights. We reserve the right to remove any content that violates these terms.
        </p>
        <p className="mb-4">
          TaskTide provides a platform for connecting task posters with freelancers, but we are not responsible for the quality, safety, or legality of any tasks or services provided.
        </p>
        <p className="mb-4">
          We may modify these terms at any time, and your continued use of the service constitutes acceptance of the modified terms.
        </p>
        <p className="mb-4">
          The service is provided "as is" without warranties of any kind. TaskTide shall not be liable for any damages resulting from use of the service.
        </p>
        <p className="mb-4">
          These terms shall be governed by the laws of [Your Country/State] without regard to its conflict of law provisions.
        </p>
        <p>
          If you have any questions about these Terms of Service, please contact us at support@tasktide.com.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;