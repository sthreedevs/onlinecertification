import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-10 text-zinc-500">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="space-y-6">
        <p>
          This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information
          when you visit or interact with our services, including our website. References to "we", "our", or "us" refer to our organization.
        </p>

        <p>
          By using our services or submitting information to us, you acknowledge that you have read and understood this Privacy Policy,
          and you consent to our practices regarding the collection, use, and disclosure of your personal data.
          If you do not agree, please do not use our services. 
        </p>

        <p>
          If you are using our services on behalf of another individual or entity, you represent that you are authorized
          to accept this Privacy Policy on their behalf.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">Personal Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Your name, age, gender, and date of birth</li>
          <li>Contact details: phone number, email address, mailing address</li>
          <li>Identification documents and signatures</li>
          <li>Health and medical records</li>
          <li>Images you upload or provide</li>
          <li>Payment information and transaction details</li>
          <li>Browser, device, location, and usage data</li>
          <li>Other information you provide through forms, surveys, or direct communication</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">How We Use Your Information</h2>
        <p>We may collect, use, and disclose your information for purposes including, but not limited to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Providing access to our platform and services</li>
          <li>Communicating with you about inquiries, feedback, and updates</li>
          <li>Internal record-keeping and administrative purposes</li>
          <li>Conducting analytics and improving our services</li>
          <li>Marketing and promotional communication (with your consent)</li>
          <li>Complying with legal obligations and resolving disputes</li>
          <li>Employment or contractor opportunities</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">Disclosure of Personal Information</h2>
        <p>We may share your information with:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Service providers (IT, marketing, data storage, hosting, etc.)</li>
          <li>Medical practitioners and healthcare providers</li>
          <li>Employees, contractors, and affiliated entities</li>
          <li>Payment processors via secure methods</li>
          <li>Regulatory authorities as required by law</li>
          <li>Analytics and marketing partners such as Google Analytics</li>
        </ul>
        <p>
          By providing your information, you consent to its transfer outside your jurisdiction if necessary.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">Data Protection and Security</h2>
        <p>
          We are committed to securing your information and have implemented appropriate technical and
          organizational measures to safeguard your personal data against unauthorized access, modification,
          disclosure, or destruction.
        </p>
        <p>
          Despite our efforts, transmission over the internet is not completely secure, and we cannot guarantee
          the absolute security of your data.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">Sensitive Information</h2>
        <p>Sensitive information we may collect includes:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Health and medical data</li>
          <li>Biometric data</li>
          <li>Genetic information</li>
          <li>Information related to race, religion, sexual orientation, and criminal history</li>
        </ul>
        <p>
          Sensitive information is collected and handled with the highest level of confidentiality in accordance with applicable laws.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">Your Rights and Choices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You may request access to or correction of your personal data.</li>
          <li>You may restrict or object to the processing of your data.</li>
          <li>You can opt-out of receiving marketing communications at any time.</li>
          <li>To exercise any of these rights, please contact us using the details provided below.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">Cookies and Tracking Technologies</h2>
        <p>
          Our website may use cookies and similar technologies to enhance your experience, analyze traffic, and
          personalize content and advertisements. You may control cookie settings through your browser.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">Links to Third-Party Sites</h2>
        <p>
          Our website may contain links to external sites. We are not responsible for the privacy practices
          or content of third-party sites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. Changes will be effective upon posting
          on our website. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how we handle your personal information,
          please contact us via email or through the contact form on our website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;