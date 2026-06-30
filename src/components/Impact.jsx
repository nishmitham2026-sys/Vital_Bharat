

export default function Impact() {
  return (
    <section id="impact" className="py-5 bg-vb-slate position-relative">
      <div className="container py-5">
        
        {/* Section Header */}
        <div className="row justify-content-center mb-5 text-center">
          <div className="col-lg-8">
            <span className="section-subtitle">Impact & Partnerships</span>
            <h2 className="section-title mt-2">Scaling Rural Healthcare Through Collaboration</h2>
            <p className="text-vb-muted fs-5">
              Healthcare delivery in rural India requires a ecosystem effort. We partner with leading social organizations and corporate sponsors to turn technology into lives saved.
            </p>
          </div>
        </div>

        {/* NGO & CSR Outreach Section */}
        <div className="row align-items-center mb-5 pb-4">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <span className="badge bg-vb-accent-light text-vb-accent px-3 py-2 rounded-pill fw-bold mb-3 fs-7">
              NGO & CSR Outreach
            </span>
            <h3 className="fw-bold text-vb-primary mb-4" style={{ fontSize: '2rem' }}>
              Powering Your Foundation's Rural Health Mandate
            </h3>
            <p className="text-vb-muted mb-4" style={{ lineHeight: '1.7' }}>
              Spiritual organizations, NGOs, and CSR departments possess the trust and local networks, while Vital Bharat provides the clinical framework and technological backbone. Together, we deploy scalable telemedicine clinics in weeks rather than months.
            </p>
          </div>

          <div className="col-lg-6 ps-lg-5">
            {/* Why Partner Grid */}
            <div className="row g-3">
              <div className="col-12 d-flex gap-3">
                <div className="text-vb-secondary fs-4">
                  <i className="bi bi-bar-chart-fill"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-vb-primary">Real-Time CSR Dashboard</h6>
                  <p className="small text-vb-muted mb-0">Track patient outreach, consult volumes, and clinical parameters live to measure the precise impact of your funding.</p>
                </div>
              </div>
              <div className="col-12 d-flex gap-3">
                <div className="text-vb-secondary fs-4">
                  <i className="bi bi-wallet2"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-vb-primary">Cost-Efficient Operations</h6>
                  <p className="small text-vb-muted mb-0">Reduce physical doctor travel and stay overheads by substituting them with high-definition virtual clinics.</p>
                </div>
              </div>
              <div className="col-12 d-flex gap-3">
                <div className="text-vb-secondary fs-4">
                  <i className="bi bi-gear-wide-connected"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-vb-primary">End-to-End Implementation</h6>
                  <p className="small text-vb-muted mb-0">We assist in hardware procurement, local coordinator training, doctor onboarding, and system support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pitch callout section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-vb-primary text-white p-5 rounded-4 shadow-lg text-center position-relative overflow-hidden">
              {/* Background Glow */}
              <div className="position-absolute" style={{ right: '-5%', bottom: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13, 148, 136, 0.25) 0%, transparent 70%)' }}></div>
              
              <h3 className="fw-bold mb-3">Is Your Organization Planning a Health Campaign?</h3>
              <p className="lead text-light mb-4 mx-auto" style={{ maxWidth: '750px', opacity: 0.9 }}>
                Let Vital Bharat configure your telemedicine kiosks, connect top-tier doctors, and supply structured health records. Let's maximize your healthcare outreach together.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="#partner" className="btn btn-vb-accent px-4 py-2">Become a Partner</a>
                <a href="#features" className="btn btn-outline-light px-4 py-2 border-2">How It Works</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
