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
                  How does the image search work?
                </button>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <p>SimiliSnap uses advanced algorithms to analyze and match images based on visual similarities,
                      providing accurate and quick search results.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Can I share my photos easily?
                </button>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <p>Absolutely! SimiliSnap offers seamless sharing options, allowing you to easily share individual
                      photos or entire galleries with others.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Is my data secure with SimiliSnap?
                </button>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <p>Yes, your data's security is our top priority. We use robust encryption and privacy measures to
                      ensure your photos are protected.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Are there any storage limitations?
                </button>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <p>SimiliSnap offers various storage plans to suit different needs, with options to upgrade for
                      additional space as your gallery grows.</p>
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
