import React from 'react';
import './PrivacyPolicy.css';
import { assets } from '../../assets/assets';

const PrivacyPolicy = () => {
  return (
    <>
      <section className="privacy-policy-section">
        <div className="privacy-policy-container">
          <h1 className="privacy-policy-title">Privacy Policy</h1>
          <p className="privacy-policy-description">
            Welcome to Kevin's Fried Creations! We are committed to protecting your privacy and ensuring that your
            personal information is handled responsibly. This Privacy Policy outlines the types of data we collect,
            how we use it, and the measures we take to keep it secure.
          </p>
          <h2 className="privacy-policy-subtitle">Information We Collect</h2>
          <p className="privacy-policy-description">
            We collect information you provide to us when you create an account, place an order, or contact us.
            This includes your name, email address, phone number, and payment information. We may also collect
            non-personal data such as your browsing behavior and device information.
          </p>
          <h2 className="privacy-policy-subtitle">How We Use Your Information</h2>
          <p className="privacy-policy-description">
            We use your information to provide you with a seamless experience on our platform, including processing
            orders, sending updates, and improving our services. Your data helps us better understand your preferences
            so we can tailor our offerings to meet your needs.
          </p>
          <h2 className="privacy-policy-subtitle">Data Sharing</h2>
          <p className="privacy-policy-description">
            Your data will never be sold or shared with third parties without your consent, except when required
            by law or necessary to provide services (e.g., payment processors, delivery partners). We work only
            with trusted third parties that adhere to strict data protection standards.
          </p>
          <h2 className="privacy-policy-subtitle">Your Rights</h2>
          <p className="privacy-policy-description">
            You have the right to access, update, or delete your personal information at any time. If you have
            any questions or need assistance, please contact us at <a href="mailto:privacy@kevinsfriedcreations.com">privacy@kevinsfriedcreations.com</a>.
          </p>
          <h2 className="privacy-policy-subtitle">Updates to Our Privacy Policy</h2>
          <p className="privacy-policy-description">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal
            requirements. Please check this page regularly for updates.
          </p>
          <h2 className="privacy-policy-subtitle">Contact Us</h2>
          <p className="privacy-policy-description">
            If you have any questions about our Privacy Policy or how we handle your data, feel free to reach
            out to us at <a href="mailto:privacy@kevinsfriedcreations.com">privacy@kevinsfriedcreations.com</a>.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
