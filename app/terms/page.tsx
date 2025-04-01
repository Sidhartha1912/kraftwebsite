import SectionAnimation from "@/components/section-animation"

export default function TermsPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">Terms of Service</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            The terms and conditions governing your use of our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <SectionAnimation>
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="lead">Last Updated: April 1, 2025</p>

              <h2>Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you and KraftDaddy
                ("we," "our," or "us") governing your use of our website, products, and services.
              </p>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
                Terms, you may not access or use our services.
              </p>

              <h2>Services</h2>
              <p>
                KraftDaddy provides printing and design services, including but not limited to corporate printing,
                marketing materials, packaging design, large format printing, custom merchandise, and design services.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without
                notice or liability.
              </p>

              <h2>Orders and Payment</h2>
              <h3>Placing Orders</h3>
              <p>
                When you place an order with us, you are making an offer to purchase our services. All orders are
                subject to acceptance and availability. We reserve the right to refuse any order for any reason.
              </p>

              <h3>Pricing</h3>
              <p>
                All prices are quoted in US dollars unless otherwise specified. Prices are subject to change without
                notice. Quotes are valid for 30 days unless otherwise stated.
              </p>

              <h3>Payment</h3>
              <p>Payment terms are as follows:</p>
              <ul>
                <li>50% deposit required to begin work on new projects</li>
                <li>Remaining balance due upon completion before delivery</li>
                <li>For established clients, net 30 payment terms may be available upon approval</li>
              </ul>
              <p>
                We accept payment via credit card, bank transfer, and check. Late payments may incur a fee of 1.5% per
                month.
              </p>

              <h2>Proofs and Approvals</h2>
              <p>We will provide proofs for your approval before final production. It is your responsibility to:</p>
              <ul>
                <li>Review all proofs carefully</li>
                <li>Check for errors in content, design, size, and color</li>
                <li>Provide written approval before production begins</li>
              </ul>
              <p>
                Once you approve a proof, you accept responsibility for any errors that may exist. Changes requested
                after approval may incur additional charges and affect delivery timelines.
              </p>

              <h2>Delivery and Shipping</h2>
              <p>
                Delivery times are estimates only and are not guaranteed. We are not responsible for delays caused by
                shipping carriers or circumstances beyond our control.
              </p>
              <p>
                Risk of loss or damage passes to you upon delivery to the carrier. It is your responsibility to inspect
                all deliveries promptly and report any damage or discrepancies within 48 hours.
              </p>

              <h2>Intellectual Property</h2>
              <h3>Your Content</h3>
              <p>
                You retain ownership of any content you provide to us. By submitting content to us, you grant us a
                non-exclusive license to use, reproduce, and modify the content as necessary to provide our services.
              </p>
              <p>
                You represent and warrant that you own or have the necessary rights to all content you provide and that
                our use of such content will not infringe any third party's intellectual property or other rights.
              </p>

              <h3>Our Content</h3>
              <p>
                All content created by us, including designs, layouts, and artwork, remains our property until full
                payment is received. Upon full payment, you will receive a license to use the final deliverables for
                their intended purpose.
              </p>
              <p>
                We retain the right to use all work created for you in our portfolio and promotional materials unless
                otherwise agreed in writing.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, in no event shall KraftDaddy be liable for any indirect,
                incidental, special, consequential, or punitive damages, including without limitation, loss of profits,
                data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul>
                <li>Your use or inability to use our services</li>
                <li>Any errors or omissions in content</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>Any bugs, viruses, or other harmful code that may be transmitted through our services</li>
              </ul>
              <p>
                Our total liability for any claims arising under these Terms shall not exceed the amount you paid us for
                the applicable order.
              </p>

              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless KraftDaddy and our officers, directors, employees, and
                agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable
                attorneys' fees, arising out of or in any way connected with your use of our services or your violation
                of these Terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of [State],
                without regard to its conflict of law provisions.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by
                posting the updated Terms on our website and updating the "Last Updated" date.
              </p>
              <p>Your continued use of our services after such changes constitutes your acceptance of the new Terms.</p>

              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                Email: legal@kraftdaddy.com
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

