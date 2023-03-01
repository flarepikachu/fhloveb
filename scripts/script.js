class fhlnavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="main-footer align-middle">
      <div class="align-middle">
        <div class="policy text-center">
          <p>
            <a class="policy-link" href="/policy/privacy.html"
              >Privacy Policy</a
            >
            <a class="policy-link" href="/policy/cookies.html">Cookie Policy</a>
          </p>
        </div>
        <p class="text-center">
          Faith Hope Love Business Ltd &#9415 - Registered in Hong Kong, Singapore,
          and the United Kingdom.
        </p>
        <p class="text-center">
          <span class="bold">Hong Kong:</span> Room 2502, 25/F., 148 Electric
          Road, North Point, Hong Kong, China<br />
          <span class="bold">Singapore:</span> 68 Circular Road #02-01 Singapore
          (049422)<br />
          <span class="bold">United Kingdom:</span> 167-169 Great Portland
          Street, 5th Floor, London, W1W 5PF, United Kingdom
        </p>
        <p class="text-center">
          Copyright 2023 &copy; Faith Hope Love Business Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
      `;
  }
}

customElements.define('footer-component', fhlnavbar);

class fhlfooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg py-3">
    <div class="container">
      <a href="/index.html" class="navbar-brand">
        <!-- Logo Image -->
        <img
          src="/images/logo.png"
          width="200"
          alt=""
          class="d-inline-block align-middle mr-2"
        />
      </a>

      <div
        id="navbarSupportedContent"
        class="navbar hidden-tablet hidden-phone"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="/index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="/about-us.html" class="nav-link"
              ><span>About FHL</span></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Services</a
            >
            <div class="dropdown-menu">
            <a class="dropdown-item" href="/bookkeeping-and-accounting-service.html">Bookkeeping and Accounting Service</a>
            <a class="dropdown-item" href="/company-secretarial-service.html">Company Secetarial Service</a>
            <a class="dropdown-item" href="/directorship-services.html">Directorship Services</a>
            <a class="dropdown-item" href="/real-estate-investment-visa.html">Real Estate (UK, Dubai) & Investment Visa (Dubai)</a>
            <a class="dropdown-item" href="/register-overseas-entities.html">Register of Overseas Entities (UK)</a>
            <a class="dropdown-item" href="/registered-office-space-provision.html">Registered Office Space Provision</a>
            <a class="dropdown-item" href="/risk-kyc-aml-compliance.html">Risk & KYC/AML Compliance</a>
            <a class="dropdown-item" href="/statutory-audit.html">Statutory Audit</a>
            <a class="dropdown-item" href="/tax-filing-services-and-solutions.html">Tax Filing Services & Solutions (Hong Kong)</a>
            <a class="dropdown-item" href="/trust-and-company-formation.html">Trust & Company Formation</a>
   
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Jurisdictions</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/bvi.html"
                >British Virgin Islands</a
              >
              <a class="dropdown-item" href="/cayman-island.html"
                >Cayman Island</a
              >
              <a class="dropdown-item" href="/hong-kong.html">Hong Kong</a>
              <a class="dropdown-item" href="/singapore.html">Singapore</a>
              <a class="dropdown-item" href="/united-kingdom.html"
                >United Kingdom</a
              >
            </div>
          </li>
          <li class="nav-item">
            <a href="/contact-us.html" class="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      `;
  }
}

customElements.define('navigation-component', fhlfooter);

class contactus extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="thingy">
    <div class="contact-us-title">Contact Us</div>
    <form
      target="_blank"
      action="https://formsubmit.co/4d455adcbb0ddd053febdee8f2bc1f26"
      method="POST"
    >
      <div class="form-group">
        <div class="form-row">
          <div class="col">
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="/thanks.html"
            />
            <input type="text" name="_honey" style="display: none" />
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Full Name"
              style="height: 50px"
              rows="2"
              required
            />
          </div>
          <div class="col">
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Email Address"
              rows="2"
              style="height: 50px"
              required
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <textarea
          placeholder="Your Message"
          class="form-control"
          name="message"
          rows="10"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-block submit-button">
        Submit Form
      </button>
    </form>
  </div>
      `;
  }
}

customElements.define('contact-us', contactus);
