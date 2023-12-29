<template>
  <div class="faq-area with-top-border ptb-100">
    <div class="container">
      <div class="row m-0 align-items-end">
        <div class="col-lg-6 col-md-12 p-0">
          <div class="faq-accordion">
            <div class="section-title">
              <span class="sub-title">Frequently Asked Questions</span>
              <h2>Dedicated to help anything people’s needs</h2>
            </div>
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  What are your core IT services?
                </button>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <p>Our core services include cloud integration, IT consulting, cybersecurity solutions, and innovative
                      software development, tailored to meet the unique needs of each client.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How does cloud migration work?
                </button>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <p>Cloud migration involves transferring data, applications, and IT processes from on-premises servers
                      to cloud-based infrastructure. We ensure a smooth transition with minimal disruption, focusing on
                      scalability, security, and efficiency.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Can you ensure data security?
                </button>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <p>Absolutely. Data security is a top priority. We implement the latest cybersecurity measures,
                      including encrypted data storage, secure access protocols, and regular security audits to protect
                      your data.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Do you offer customized IT solutions?
                </button>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <p>Yes, we specialize in creating customized IT solutions that align with your specific business
                      requirements. Our approach involves understanding your challenges and designing solutions that drive
                      efficiency and innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 p-0">
          <div class="faq-image" data-aos="fade-up">
            <img src="../../assets/images/faq1.png" alt="faq-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq"
};
</script>
