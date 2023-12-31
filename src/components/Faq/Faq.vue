<template>
  <div class="faq-area bg-f1f5fd">
    <div class="container">
      <div class="faq-accordion-content">
        <div class="box">
          <h3>General Information</h3>
          <div class="accordion" id="faqAccordion">
            <!-- Iterating over filteredGeneralQuestions to display each question and answer -->
            <div class="accordion-item" v-for="(item, index) in filteredGeneralQuestions" :key="index">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + index" aria-expanded="true" :aria-controls="'collapse' + index">
                {{ item.question }}
              </button>
              <div :id="'collapse' + index" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p v-html="item.answer"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <h3>Services and Solutions</h3>
          <div class="accordion" id="faqAccordion2">
            <!-- Iterating over filteredServicesQuestions to display each question and answer -->
            <div class="accordion-item" v-for="(item, index) in filteredServicesQuestions" :key="index">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#collapse2' + index" aria-expanded="true" :aria-controls="'collapse2' + index">
                {{ item.question }}
              </button>
              <div :id="'collapse2' + index" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p v-html="item.answer"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <h3>Working with Us</h3>
          <div class="accordion" id="faqAccordion3">
            <!-- Iterating over filteredWorkingQuestions to display each question and answer -->
            <div class="accordion-item" v-for="(item, index) in filteredWorkingQuestions" :key="index">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#collapse3' + index" aria-expanded="true" :aria-controls="'collapse3' + index">
                {{ item.question }}
              </button>
              <div :id="'collapse3' + index" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p v-html="item.answer"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
  props: {
    query: String
  },
  data() {
    return {
      generalQuestions: [
        {
          question: "What services does GharbiDev Solutions offer?",
          answer: "<a href='https://solutions.gharbidev.com/contact' target='_blank'>GharbiDev Solutions</a> prides itself on offering a comprehensive range of services including cloud integration, where we help businesses transition to cloud platforms; IT consulting, where we provide expert guidance and strategic planning; cybersecurity solutions, ensuring your digital assets are protected against emerging threats; and custom software development, tailored specifically to address unique business challenges and enhance operational efficiency."
        },
        {
          question: "How long has GharbiDev Solutions been in the IT industry?",
          answer: "With over a decade of experience in the IT industry, <a href='https://solutions.gharbidev.com/contact' target='_blank'>GharbiDev Solutions</a> has grown significantly, adapting to the rapid technological changes and emerging as a leading provider of innovative IT solutions.Our journey has been marked by continuous learning, evolving expertise, and a deep commitment to staying at the forefront of technological advancements."
        },
        {
          question: "Where is GharbiDev Solutions located?",
          answer: "Our main office is in Montreal, serving as a hub for our global operations. We have a strong online presence and remote capabilities, allowing us to efficiently collaborate with clients worldwide.Regardless of your location, we ensure seamless communication and top-notch service."
        },
        {
          question: "What makes GharbiDev Solutions stand out in the IT sector?",
          answer: "What sets us apart is our personalized approach to each project. We don't just provide generic solutions; instead, we dive deep into understanding your specific needs and challenges. Our team of experts combines innovative technology with strategic planning to deliver solutions that are not only effective but also bespoke, ensuring they align perfectly with your business goals."
        },
        {
          question: "Can GharbiDev Solutions work with businesses of any size?",
          answer: "Indeed, our client base is diverse, ranging from ambitious startups to established multinational corporations. We tailor our solutions to match the scale and complexity of any business, ensuring that whether you're a small local business or a large enterprise, you receive a solution that's just right for you."
        }
      ],
      servicesQuestions: [
        {
          question: "Can you help migrate my business to the cloud?",
          answer: "Certainly! Cloud migration is one of our core specialties. We offer a holistic service that encompasses everything from initial assessment and planning to the actual migration process and post-migration support. Our approach is meticulous and tailored, ensuring a smooth transition with minimal disruption to your business operations, all while maximizing the benefits of cloud technology in terms of scalability, efficiency, and cost savings."
        },
        {
          question: "Do you provide ongoing IT support and maintenance?",
          answer: "Absolutely. Our relationship with clients doesn't end with project completion. We provide ongoing support and maintenance services to ensure that your IT systems are not just up and running, but also continuously optimized. This includes regular updates, security checks, and performance monitoring, ensuring that your IT infrastructure remains robust and efficient in the long run."
        },
        {
          question: "How does GharbiDev ensure data security in its solutions?",
          answer: "Data security is paramount in all our solutions. We employ a multi-layered security approach that includes the latest encryption technologies, secure access protocols, and regular security audits. Our team stays abreast of the latest cybersecurity trends and threats, ensuring that your data is protected against all forms of digital threats and vulnerabilities. We also educate our clients on best practices in data security to further fortify their defenses."
        },
        {
          question: "Can you develop custom software tailored to my business needs?",
          answer: "Yes, developing custom software solutions is one of our specialties. We believe every business has unique requirements and challenges, and our approach is to create software that is precisely aligned with your specific needs. This process involves a thorough understanding of your business processes, challenges, and goals, followed by the development of a solution that is not only efficient and scalable but also easy to integrate into your existing systems."
        },
        {
          question: "What industries does GharbiDev Solutions have experience with?",
          answer: "Our expertise spans a wide range of industries, including but not limited to finance, healthcare, education, retail, and technology. This diverse experience allows us to bring best practices from various sectors to your projects, providing you with solutions that are innovative, industry-specific, and aligned with the latest trends and regulations."
        }
      ],
      workingQuestions: [
        {
          question: "How do I start a project with GharbiDev Solutions?",
          answer: "Starting a project with us is simple and straightforward. The first step is reaching out to us via our<a href='https://solutions.gharbidev.com/contact' target='_blank'> website</a> or <a href='mailto:sgharbi@gharbidev.com'> email</a >.We then schedule a detailed consultation session to understand your needs, challenges, and objectives.This initial discussion is crucial for us to provide you with a tailored proposal that outlines our approach, timeline, and cost.Once agreed upon, we initiate the project with a clear plan and regular checkpoints for your input and feedback."
        },
        {
          question: "What is the typical timeline for a project?",
          answer: "The timeline for a project varies greatly depending on its scope and complexity. After our initial consultation and understanding of your project requirements, we provide a realistic timeline that includes all key milestones. We are committed to meeting these deadlines while ensuring the highest quality of work. Our project management approach is transparent, allowing you to track progress and be involved at every stage."
        },
        {
          question: "How does GharbiDev Solutions handle client communication?",
          answer: "Effective and transparent communication is at the heart of our client relationships. We establish regular updates and checkpoints through your preferred communication channels, be it email, phone calls, or virtual meetings. Our aim is to keep you fully informed and involved in the decision-making process throughout the project lifecycle. We also welcome and encourage feedback at all stages, ensuring that the final product aligns perfectly with your expectations."
        },
        {
          question: "Are there customized payment plans for different projects?",
          answer: "Yes, we offer a variety of flexible payment plans that can be customized to suit the specific needs and budget of your project. We understand that every project is unique, and our goal is to provide a payment structure that is both convenient and accommodating. This might include phased payments aligned with project milestones, retainer models for ongoing work, or other arrangements tailored to your financial requirements."
        },
        {
          question: "Can I request changes or upgrades after project completion?",
          answer: "Of course! We understand that business needs can evolve, and we are fully prepared to make adjustments or upgrades to your solution even after the project is completed. Our aim is to foster long-term partnerships with our clients, which means we are always available to support, enhance, and modify your solutions as your business grows and your needs change."
        }
      ]
    };
  },
  computed: {
    filteredGeneralQuestions() {
      console.log(this.query);
      if (this.query === "") return this.generalQuestions;
      return this.generalQuestions.filter(q =>
        q.question.toLowerCase().includes(this.query.toLowerCase()) ||
        q.answer.toLowerCase().includes(this.query.toLowerCase())
      );
    },
    filteredServicesQuestions() {
      if (this.query === "") return this.servicesQuestions;
      return this.servicesQuestions.filter(q =>
        q.question.toLowerCase().includes(this.query.toLowerCase()) ||
        q.answer.toLowerCase().includes(this.query.toLowerCase())
      );
    },
    filteredWorkingQuestions() {
      if (this.query === "") return this.workingQuestions;
      return this.workingQuestions.filter(q =>
        q.question.toLowerCase().includes(this.query.toLowerCase()) ||
        q.answer.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  }
};
</script>
