class MultiStepForm {
  constructor() {}

  init() {
    this.form = document.querySelector("form");
    this.steps = Array.from(document.querySelectorAll("form .step"));
    this.nextBtn = document.querySelectorAll("form .next-btn");
    this.prevBtn = document.querySelectorAll("form .previous-btn");

    this.addListeners();
  }

  addListeners() {
    this.nextBtn.forEach((btn) => {
      btn.addEventListener("click", () => this.changeStep(1));
    });

    this.prevBtn.forEach((btn) => {
      btn.addEventListener("click", () => this.changeStep(-1));
    });

    this.form.addEventListener("submit", this.submit);
  }

  changeStep = (step) => {
    if (!this.checkStepValidity()) return;

    const activeStep = document.querySelector(".active");
    let stepIndex = this.steps.indexOf(activeStep);
    this.steps[stepIndex].classList.remove("active");
    stepIndex += step;
    if (step === 0) stepIndex = 0;

    if (stepIndex < 0 || stepIndex >= this.steps.length) stepIndex = 0;

    this.steps[stepIndex].classList.add("active");
  };

  resetSteps = () => {
    this.changeStep(0);
  };

  checkStepValidity = () => {
    const activeStep = document.querySelector(".active");
    let stepIndex = this.steps.indexOf(activeStep);
    const inputs = activeStep.querySelectorAll("input");

    let isCorrect = true;

    for (const input of inputs) {
      const valid = input.checkValidity();

      if (valid) {
        input.classList.remove("invalid-input");
      } else {
        input.classList.add("invalid-input");
        isCorrect = false;
      }
    }

    return isCorrect;
  };

  submit = (event) => {
    event.preventDefault();
    this.form.reset();
    this.resetSteps();
  };
}

const multiForm = new MultiStepForm();
multiForm.init();
