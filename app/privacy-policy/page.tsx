import SectionAnimation from "@/components/section-animation"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">Privacy Policy</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <SectionAnimation>
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="lead">Last Updated: April 1, 2025</p>

              <h2>Introduction</h2>
              <p>
                KraftDaddy ("we," "our," or "us") respects your privacy and is committed to protecting your personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access the site or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect information about you in a variety of ways, including:</p>

              <h3>Personal Data</h3>
              <p>
                When you use our services or contact us, we may collect personally identifiable information, such as
                your:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Company information</li>
                <li>Payment information</li>
              </ul>

              <h3>Usage Data</h3>
              <p>We may also collect information about how you access and use our website, including:</p>
              <ul>
                <li>Your IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Pages you visit</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect about you for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations, including:</p>

              <h3>Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information
                may be transferred as part of that transaction.
              </p>

              <h3>Third-Party Service Providers</h3>
              <p>
                We may share your information with third-party service providers who perform services on our behalf,
                such as payment processing, data analysis, email delivery, hosting services, and customer service.
              </p>

              <h3>Legal Requirements</h3>
              <p>
                We may disclose your information where required to do so by law or in response to valid requests by
                public authorities.
              </p>

              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information.
                While we have taken reasonable steps to secure the information you provide to us, please be aware that
                no security measures are perfect or impenetrable, and we cannot guarantee the security of your
                information.
              </p>

              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the
                right to:
              </p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to our processing of your information</li>
                <li>Request restriction of processing</li>
                <li>Request transfer of your information</li>
                <li>Withdraw consent</li>
              </ul>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
              <p>
                Email: privacy@kraftdaddy.com
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Address: 123 Print Street, Design City, 12345
              </p>
            </div>
          </div>
        </section>
      </SectionAnimation>
    </main>
  )
}

