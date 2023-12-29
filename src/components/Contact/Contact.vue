<template>
  <div class="contact-info-area bg-f1f5fd">
    <div class="container">
      <div class="contact-info-inner">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-contact-info-box">
              <div class="icon bg1">
                <i class="ph-phone-call"></i>
              </div>
              <h3><a href="tel:+1(514) 713-0322">+1(514) 713-0322<br /><br /><br /></a></h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-contact-info-box">
              <div class="icon">
                <i class="ph-envelope-simple-open"></i>
              </div>
              <h3><a href="mailto:sgharbi@gharbidev.com">sgharbi@gharbidev.com<br /><br /><br /></a></h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-contact-info-box">
              <div class="icon bg2">
                <i class="ph-map-pin-line"></i>
              </div>
              <h3>9130 Rue Saint-Urbain, H2N1S7, Montréal, Qc, Canada.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-area ptb-100">
    <div class="container">
      <div class="section-title style-two">
        <span class="sub-title">Contact with us</span>
        <h2>Have Any Questions? <br>Let's Talk!</h2>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="contact-form">
            <form @submit.prevent="sendMessage">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" v-model="form.name" class="form-control" id="name">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" v-model="form.email" class="form-control" id="email">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label>Subject</label>
                    <input type="text" name="msg_subject" v-model="form.msg_subject" class="form-control"
                      id="msg_subject">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" name="phone_number" v-model="form.phone_number" class="form-control"
                      id="phone_number">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Message...</label>
                    <textarea name="message" id="message" v-model="form.message" class="form-control" cols="30"
                      rows="5"></textarea>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="checkme" v-model="form.termsAccepted">
                    <label class="form-check-label" for="checkme">
                      Accept <router-link to="/coming-soon">Terms of Services</router-link> and
                      <router-link to="/coming-soon">Privacy Policy</router-link>
                    </label>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" class="btn-style-one red-light-color">Send Message <i
                      class="ph-caret-right"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div id="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.411942591337!2d-73.6494886!3d45.5420381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918e600907e77%3A0x27d06033ba7463ee!2s9130%20Rue%20Saint-Urbain%2C%20Montr%C3%A9al%2C%20QC%20H2N%201S7!5e0!3m2!1sfr!2sca!4v1703471788220!5m2!1sfr!2sca"
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        msg_subject: "",
        phone_number: "",
        message: "",
        termsAccepted: false
      }
    };
  },
  methods: {
    sendMessage() {
      console.log("Form data:", this.form);

      // Reset form after sending the message
      this.form = {
        name: "",
        email: "",
        msg_subject: "",
        phone_number: "",
        message: "",
        termsAccepted: false
      };

      // TODO logic to send email to sgharbi@gharbidev.com
    }
  }
};
</script>
