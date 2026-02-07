import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoPaceOn from "@assets/image_1770448613540_cropped.png";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-black">
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/78 shadow-[0_12px_40px_-34px_rgba(0,0,0,.55)] border-b border-black/5">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">
          <Link href="/">
            <img
              src={logoPaceOn}
              alt="PaceOn Coaching"
              className="h-11 w-auto"
              data-testid="img-logo-privacy"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-black/70 hover:text-black transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20 px-5">
        <div className="mx-auto max-w-3xl">
          <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-privacy-eyebrow">
            Legal
          </div>
          <h1 className="mt-3 font-heading text-4xl md:text-5xl font-semibold tracking-tight" data-testid="text-privacy-title">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[14px] text-black/50" data-testid="text-privacy-updated">
            Last updated: January 2026
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-black/80" data-testid="content-privacy">
            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Introduction</h2>
              <p>
                PaceOn Coaching, operated by L.E COOK & J GHOSH ("we," "us," or "our"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our coaching services.
              </p>
              <p className="mt-3">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Information We Collect</h2>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Personal Information You Provide</h3>
              <p>We collect information that you voluntarily provide to us when you:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Complete enquiry or contact forms on our website</li>
                <li>Sign up for coaching services</li>
                <li>Communicate with us via email or other channels</li>
                <li>Provide training and health information as part of coaching</li>
              </ul>
              <p className="mt-3">This information may include:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Name and contact details (email, phone number, location)</li>
                <li>Date of birth and gender</li>
                <li>Training history and athletic background</li>
                <li>Health and injury information relevant to coaching</li>
                <li>Goals and performance data</li>
                <li>Payment and billing information</li>
              </ul>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information about your device and browsing behaviour, including:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Provide coaching services and create personalised training programmes</li>
                <li>Communicate with you about your training, progress, and coaching</li>
                <li>Process payments and manage billing</li>
                <li>Respond to enquiries and provide customer support</li>
                <li>Send administrative information and service updates</li>
                <li>Improve our website and services</li>
                <li>Analyse usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Data Storage and Security</h2>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Security Measures</h3>
              <p>
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Data Retention</h3>
              <p>
                We retain your personal information for as long as necessary to fulfil the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Coaching-related data is typically retained for seven years after the coaching relationship ends to comply with Australian record-keeping requirements.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Data Location</h3>
              <p>
                Your information may be stored and processed in Australia or other countries where our service providers operate. By using our services, you consent to the transfer of information to countries outside Australia.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Third-Party Services</h2>
              <p>
                We use third-party services to help deliver our coaching services and operate our website. These services may have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your information.
              </p>
              <p className="mt-3">Third-party services we use include:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li><strong>TrainingPeaks:</strong> Training programme delivery and session tracking</li>
                <li><strong>Microsoft Office 365:</strong> Email communications and document storage</li>
                <li><strong>HubSpot:</strong> Website hosting, form submissions, and payment processing</li>
                <li><strong>Stripe:</strong> Payment processing and billing (integrated via HubSpot)</li>
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>GoDaddy:</strong> Domain registration</li>
                <li><strong>Microsoft Forms:</strong> Contact and enquiry forms</li>
              </ul>
              <p className="mt-3">
                Each of these services has their own privacy policies governing how they handle your data. We encourage you to review their policies.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Your Rights</h2>
              <p>Under Australian privacy law (Privacy Act 1988), you have the right to:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li><strong>Access:</strong> Request copies of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Objection:</strong> Object to our processing of your personal information</li>
              </ul>
              <p className="mt-3">To exercise these rights, please contact us using the details below.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyse website traffic.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">What are cookies?</h3>
              <p>
                Cookies are small text files stored on your device that help websites remember your preferences and understand how you use the site.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Types of cookies we use:</h3>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website (via Google Analytics)</li>
                <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
              </ul>
              <p className="mt-3">
                You can control cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Sensitive Information</h2>
              <p>
                As part of providing coaching services, we may collect sensitive information including health data, injury history, and performance metrics. This information is collected with your explicit consent and is used solely for the purpose of delivering safe, effective coaching. We implement additional security measures to protect sensitive information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Marketing Communications</h2>
              <p>
                With your consent, we may send you emails about our services, events, and relevant content. You can opt out of marketing communications at any time by:
              </p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Clicking the "unsubscribe" link in any marketing email</li>
                <li>Contacting us directly</li>
              </ul>
              <p className="mt-3">
                Even if you opt out of marketing, we may still send you essential service-related communications.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. The updated version will be indicated by an updated "Last updated" date at the top of this policy. We encourage you to review this policy periodically.
              </p>
              <p className="mt-3">
                For material changes, we will notify you by email or prominent notice on our website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
              </p>
              <div className="mt-3 rounded-2xl border border-black/10 bg-white/60 p-5 space-y-1">
                <p className="font-medium text-black">PaceOn Coaching</p>
                <p>L.E COOK & J GHOSH</p>
                <p>ABN: 97 486 449 730</p>
                <p>
                  Email:{" "}
                  <a href="mailto:coaching@paceon.com.au" className="text-[hsl(var(--secondary))] hover:underline" data-testid="link-privacy-email">
                    coaching@paceon.com.au
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Complaints</h2>
              <p>
                If you believe we have not adequately addressed your privacy concerns, you have the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC):
              </p>
              <div className="mt-3 rounded-2xl border border-black/10 bg-white/60 p-5 space-y-1">
                <p>
                  Website:{" "}
                  <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--secondary))] hover:underline" data-testid="link-oaic-website">
                    www.oaic.gov.au
                  </a>
                </p>
                <p>Phone: 1300 363 992</p>
                <p>
                  Email:{" "}
                  <a href="mailto:enquiries@oaic.gov.au" className="text-[hsl(var(--secondary))] hover:underline" data-testid="link-oaic-email">
                    enquiries@oaic.gov.au
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
