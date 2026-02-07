import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoPaceOn from "@assets/image_1770448613540_cropped.png";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-black">
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/78 shadow-[0_12px_40px_-34px_rgba(0,0,0,.55)] border-b border-black/5">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">
          <Link href="/">
            <img
              src={logoPaceOn}
              alt="PaceOn Coaching"
              className="h-11 w-auto"
              data-testid="img-logo-terms"
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
          <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-terms-eyebrow">
            Legal
          </div>
          <h1 className="mt-3 font-heading text-4xl md:text-5xl font-semibold tracking-tight" data-testid="text-terms-title">
            Terms & Legal
          </h1>
          <p className="mt-3 text-[14px] text-black/50" data-testid="text-terms-updated">
            Last updated: January 2026
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-black/80" data-testid="content-terms">
            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">About This Page</h2>
              <p>
                This page outlines important legal information regarding the use of the PaceOn Coaching website and services. By accessing our website or engaging our coaching services, you acknowledge and agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Business Information</h2>
              <div className="rounded-2xl border border-black/10 bg-white/60 p-5 space-y-1">
                <p><strong>Trading Name:</strong> PaceOn Coaching</p>
                <p><strong>Legal Entity:</strong> L.E COOK & J GHOSH</p>
                <p><strong>ABN:</strong> 97 486 449 730</p>
                <p><strong>Contact:</strong>{" "}
                  <a href="mailto:coaching@paceon.com.au" className="text-[hsl(var(--secondary))] hover:underline" data-testid="link-terms-email">
                    coaching@paceon.com.au
                  </a>
                </p>
                <p><strong>Location:</strong> Perth, Western Australia</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Terms of Use</h2>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Acceptance of Terms</h3>
              <p>
                By accessing and using the PaceOn Coaching website, you accept and agree to be bound by these terms. If you do not agree to these terms, please do not use our website or services.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Use of Website</h3>
              <p>You may use our website for lawful purposes only. You agree not to:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorised access to our systems or networks</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Reproduce, distribute, or commercially exploit our content without permission</li>
              </ul>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">User-Generated Content</h3>
              <p>
                If you submit content through contact forms or communications, you grant us the right to use this information to provide our services and communicate with you.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Medical and Health Disclaimer</h2>
              <div className="rounded-2xl border border-[hsl(var(--secondary))]/20 bg-[hsl(var(--secondary))]/5 p-5 mb-4">
                <p className="font-medium text-black">
                  IMPORTANT: Please read carefully
                </p>
                <p className="mt-2">
                  The information and coaching services provided by PaceOn Coaching are for educational and training purposes only and are not intended as medical advice.
                </p>
              </div>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Consult a Medical Professional</h3>
              <p>Before beginning any training programme, you should consult with your doctor or other qualified healthcare professional, especially if you:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Have any pre-existing health conditions</li>
                <li>Are taking medication</li>
                <li>Have a history of injuries</li>
                <li>Are pregnant or nursing</li>
                <li>Have not exercised regularly</li>
                <li>Are over 40 years of age (men) or 50 years of age (women)</li>
              </ul>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">No Medical Diagnosis</h3>
              <p>
                We do not diagnose, treat, or cure any medical conditions. Our coaching services focus on training programme design and athletic development, not medical treatment.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Training at Your Own Risk</h3>
              <p>Participation in endurance training and sport carries inherent risks. You acknowledge that:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>You participate in training and racing at your own risk</li>
                <li>You are responsible for monitoring your own health and wellbeing</li>
                <li>You will discontinue training if you experience pain, discomfort, or unusual symptoms</li>
                <li>You will seek medical attention when necessary</li>
              </ul>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Individual Results Vary</h3>
              <p>
                Training outcomes depend on numerous factors including genetics, current fitness level, adherence to programming, nutrition, sleep, stress management, and overall health. We cannot guarantee specific results or performance improvements.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Liability Limitations</h2>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Service Disclaimer</h3>
              <p>While we strive to provide high-quality coaching services, we make no warranties or guarantees regarding:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Specific performance outcomes or results</li>
                <li>Freedom from injury or health complications</li>
                <li>Qualification for races or events</li>
                <li>Achievement of particular goals</li>
              </ul>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Limitation of Liability</h3>
              <p>To the fullest extent permitted by Australian law, PaceOn Coaching, L.E COOK & J GHOSH, and their representatives shall not be liable for:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Personal injury, illness, or death resulting from training or racing</li>
                <li>Failure to achieve desired results or performance goals</li>
                <li>Lost opportunities, race entries, or travel costs</li>
                <li>Indirect, consequential, or incidental damages</li>
              </ul>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Your Responsibilities as an Athlete</h3>
              <p>You are responsible for:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Honestly communicating your health status, injuries, and limitations</li>
                <li>Following medical advice from qualified healthcare professionals</li>
                <li>Making informed decisions about your training and racing</li>
                <li>Ensuring adequate insurance coverage for training and competition</li>
                <li>Modifying or discontinuing training if experiencing adverse symptoms</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Cookies and Tracking Technologies</h2>
              <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyse website traffic.</p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">What are cookies?</h3>
              <p>Cookies are small text files stored on your device that help websites remember your preferences and understand how you use the site.</p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Types of cookies we use:</h3>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website (via Google Analytics)</li>
                <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
              </ul>
              <p className="mt-3">You can control cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Intellectual Property</h2>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Copyright</h3>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of PaceOn Coaching or its licensors and is protected by Australian and international copyright laws.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Training Programmes</h3>
              <p>Training programmes created for individual athletes remain the intellectual property of PaceOn Coaching. Athletes may use programmes for personal training purposes but may not:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Share programmes with other athletes or coaches</li>
                <li>Reproduce or distribute programmes commercially</li>
                <li>Claim authorship of the programming methodology</li>
              </ul>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Permitted Use</h3>
              <p>
                You may view and print pages from our website for personal, non-commercial use, provided you do not modify the content and retain all copyright notices.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Professional Standards</h2>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Coaching Qualifications</h3>
              <p>Our coaches hold appropriate qualifications and accreditations as stated on the website. We are committed to:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Maintaining current coaching certifications</li>
                <li>Continuing professional development</li>
                <li>Operating within our scope of practice</li>
                <li>Referring athletes to appropriate medical professionals when necessary</li>
              </ul>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Code of Conduct</h3>
              <p>We adhere to professional coaching standards including:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Athlete safety and wellbeing as the highest priority</li>
                <li>Honest and transparent communication</li>
                <li>Respect for athlete privacy and confidentiality</li>
                <li>Evidence-based coaching practices</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Payment Terms</h2>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Service Fees</h3>
              <p>
                Coaching fees are outlined on our Offerings page and are subject to change. Current athletes will be notified of fee changes with at least 30 days' notice.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Payment Processing</h3>
              <p>
                Payments are processed securely through Stripe. By providing payment information, you authorise us to charge the agreed fees for coaching services.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Cancellation and Refunds</h3>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Coaching services require one month's notice for cancellation</li>
                <li>No refunds are provided for partial months</li>
                <li>Payment for the current month is required even if notice is given mid-month</li>
                <li>Pauses for injury or life circumstances can be arranged by mutual agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Termination of Services</h2>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Our Right to Terminate</h3>
              <p>We reserve the right to terminate coaching services if:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Payment obligations are not met</li>
                <li>An athlete engages in abusive or threatening behaviour</li>
                <li>An athlete fails to communicate honestly about health or injury status</li>
                <li>We determine the coaching relationship is not beneficial or appropriate</li>
              </ul>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Your Right to Terminate</h3>
              <p>
                You may terminate coaching services at any time with one month's written notice to{" "}
                <a href="mailto:coaching@paceon.com.au" className="text-[hsl(var(--secondary))] hover:underline">coaching@paceon.com.au</a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Please review our complete{" "}
                <a href="/privacy" className="text-[hsl(var(--secondary))] hover:underline" data-testid="link-terms-privacy">Privacy Policy</a>{" "}
                for detailed information about how we collect, use, and protect your personal information.
              </p>
              <p className="mt-3">Key Points:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>We collect personal and health information necessary to provide coaching services</li>
                <li>Your data is stored securely and used only for coaching purposes</li>
                <li>We do not sell or share your information with third parties (except service providers)</li>
                <li>You have rights to access, correct, and delete your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">External Links</h2>
              <p>Our website may contain links to external websites. We are not responsible for:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>The content or privacy practices of external sites</li>
                <li>The availability or accuracy of external resources</li>
                <li>Any transactions or interactions with third-party websites</li>
              </ul>
              <p className="mt-3">We recommend reviewing the terms and privacy policies of any external websites you visit.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Indemnification</h2>
              <p>You agree to indemnify and hold harmless PaceOn Coaching, L.E COOK & J GHOSH, and their representatives from any claims, damages, losses, or expenses (including legal fees) arising from:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Your use of our website or services</li>
                <li>Your violation of these terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Any injury, illness, or adverse event resulting from your training or racing</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Governing Law</h2>
              <p>
                These terms are governed by the laws of Western Australia and the Commonwealth of Australia. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Western Australia.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Changes to Legal Terms</h2>
              <p>We reserve the right to modify these terms at any time. Material changes will be communicated via:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Email to active coaching clients</li>
                <li>Prominent notice on our website</li>
                <li>Updated "Last updated" date on this page</li>
              </ul>
              <p className="mt-3">Continued use of our website or services after changes constitutes acceptance of the modified terms.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Insurance</h2>
              <p>Athletes are strongly encouraged to maintain appropriate insurance coverage including:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Personal health insurance</li>
                <li>Sports accident insurance</li>
                <li>Travel insurance (for interstate or international events)</li>
                <li>Public liability insurance (where applicable)</li>
              </ul>
              <p className="mt-3">PaceOn Coaching maintains professional indemnity insurance appropriate to our services.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Dispute Resolution</h2>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Initial Contact</h3>
              <p>
                If you have concerns about our services, please contact us at{" "}
                <a href="mailto:coaching@paceon.com.au" className="text-[hsl(var(--secondary))] hover:underline">coaching@paceon.com.au</a>.
                {" "}We are committed to resolving issues promptly and professionally.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Escalation</h3>
              <p>If we cannot resolve a dispute informally, either party may pursue:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Mediation through a mutually agreed mediator</li>
                <li>Formal complaint to relevant professional bodies</li>
                <li>Legal action (as a last resort)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Consumer Rights</h2>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Australian Consumer Law</h3>
              <p>
                Nothing in these terms excludes, restricts, or modifies any consumer rights or guarantees under the Australian Consumer Law or other applicable consumer protection legislation that cannot be excluded, restricted, or modified by agreement.
              </p>

              <h3 className="font-heading text-lg font-medium text-black mt-5 mb-2">Guarantees</h3>
              <p>Under Australian Consumer Law, our services come with guarantees that cannot be excluded, including:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Services will be provided with due care and skill</li>
                <li>Services will be fit for any specified purpose</li>
                <li>Services will be delivered within a reasonable time</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-black mb-3">Contact and Questions</h2>
              <p>If you have questions about these legal terms, please contact us:</p>
              <div className="mt-3 rounded-2xl border border-black/10 bg-white/60 p-5 space-y-1">
                <p className="font-medium text-black">PaceOn Coaching</p>
                <p>L.E COOK & J GHOSH</p>
                <p>ABN: 97 486 449 730</p>
                <p>
                  Email:{" "}
                  <a href="mailto:coaching@paceon.com.au" className="text-[hsl(var(--secondary))] hover:underline" data-testid="link-terms-contact-email">
                    coaching@paceon.com.au
                  </a>
                </p>
              </div>
              <p className="mt-4">
                For privacy-specific enquiries, please refer to our{" "}
                <a href="/privacy" className="text-[hsl(var(--secondary))] hover:underline">Privacy Policy</a>.
              </p>
              <p className="mt-2">
                For coaching service enquiries, please visit our{" "}
                <a href="/#talk" className="text-[hsl(var(--secondary))] hover:underline">Let's Talk</a> page.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
