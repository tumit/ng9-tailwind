import { NextButtonComponent } from "../app/components/next-button/next-button.component";

export default {
  title: "NextButton",
  component: NextButtonComponent
};

export const Text = () => ({
  component: NextButtonComponent,
  props: {
    text: "ต่อไป"
  }
});
